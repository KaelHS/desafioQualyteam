import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";
import { INonConformity } from '../interfaces/nonConformity';
import { IDepartment } from "../interfaces/department";
import { ICorrectiveActions } from "../interfaces/correctiveActions";

export interface NonConformity {
    id: number;
    title: string;
    description: string;
    ocurrenceDate: Date;
    departments: Array<number>;
    correctiveActions?: Array<number>;
}

interface CorrectiveActions {
    id: number;
    what: string;
    why: string;
    how: string;
    where: string;
    untilWhen: Date;
}

// interface CorrectiveActionsInput {
//     ncID: number;
//     correctiveActionsInput: ICorrectiveActions
// }

interface NonConformityContextData {
    nonConformities: Array<NonConformity>;
    createNonConformity: ( nonConformityInput: NonConformity ) => void ;
    depts: Array<IDepartment>;
    deleteNonConformity: (ncId: string) => Promise<void>;
    cActions: Array<CorrectiveActions>;
    createCorrectiveAction: ( ncID: INonConformity, correctiveActionInput: ICorrectiveActions ) => Promise<void>;
}

interface NonConformityProviderProps {
    children: ReactNode;
}

const NonConformityContext = createContext<NonConformityContextData>(
    {} as NonConformityContextData);



export function NonConformityProvider ( {children} : NonConformityProviderProps) {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);
    const [ depts, setDepts ] = useState<IDepartment[]>([]);
    const [ cActions, setCActions ] = useState<CorrectiveActions[]>([]);

    async function getDepartments() {
        const dpResponse = await api.get('/departments');
        setDepts(dpResponse.data);
    }

    async function getCorrectiveActions(){

        const actResponse = await api.get('/corrective-actions');

        const formattedResponse = actResponse.data.map( (action: ICorrectiveActions) => ({
            id: action.id,
            what: action["what-to-do"],
            why: action["why-to-do-it"],
            how: action["how-to-do-it"],
            where: action["where-to-do-it"],
            untilWhen: action["until-when"],
        }))

        setCActions(formattedResponse);
    }

    async function getData() {

        const ncResponse = await api.get('/non-conformities');

        const dataFormatted = ncResponse.data.map( (nc: INonConformity) => ({
            id: nc.id,
            title: nc.title,
            description: nc.description,
            ocurrenceDate: nc['ocurrence-date'],
            departments: nc.departments,
            correctiveActions: nc['corrective-actions']
          }))

        setNonConformities(dataFormatted);

        }

    useEffect( () => {
        getData();
        getDepartments();
        getCorrectiveActions();

    }, []);


    
    async function createNonConformity ( nonConformityInput: NonConformity ) {

        await api.post('/non-conformities', {
            ...nonConformityInput,
        }); 

        await getData();
    }

    async function deleteNonConformity (ncId: string) {

        try {

             await api.delete(`/non-conformities/${ncId}`);

             await getData();

        } catch (err) {
          console.log(err)
        }
    }

    async function createCorrectiveAction ( nc: INonConformity, correctiveActionsInput: ICorrectiveActions ) {

        await api.post('/corrective-actions', {
            ...correctiveActionsInput,
        }); 

        await api.put(`/non-conformities/${nc.id}`, {
            ...nc,
            // "corrective-actions": nc['corrective-actions']?.push(correctiveActionsInput.id)
            "corrective-actions": [...nc["corrective-actions"] as any, correctiveActionsInput.id] 
        })

        const { data } = await api.get('/corrective-actions');
        setCActions(data);

    }

    return (
        <NonConformityContext.Provider 
            value={{nonConformities, createNonConformity, depts, deleteNonConformity, cActions, createCorrectiveAction}}>
            {children}
        </NonConformityContext.Provider>
    );

}

export function useNonConformity() {
    const context = useContext(NonConformityContext);

    return context;
}