import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";
import { INonConformity } from '../interfaces/nonConformity';
import { IDepartment } from "../interfaces/department";

export interface NonConformity {
    id: number;
    title: string;
    description?: string;
    ocurrenceDate: Date;
    departments: Array<number>;
    correctiveActions?: Array<number>
}

// type NonConformityIput = Omit<NonConformity, 'id' >

interface NonConformityContextData {
    nonConformities: Array<NonConformity>;
    createNonConformity: ( nonConformityInput: NonConformity ) => void ;
    depts: Array<IDepartment>;
    deleteNonConformity: (ncId: string) => Promise<void>;
}

interface NonConformityProviderProps {
    children: ReactNode;
}

const NonConformityContext = createContext<NonConformityContextData>(
    {} as NonConformityContextData);



export function NonConformityProvider ( {children} : NonConformityProviderProps) {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);
    const [ depts, setDepts ] = useState<IDepartment[]>([]);

    async function getDepartments() {
        const dpResponse = await api.get('/departments');
        setDepts(dpResponse.data);
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

    }, []);



    let contador = 10;
    
    async function createNonConformity ( nonConformityInput: NonConformity ) {

        const response = await api.post('/non-conformities', {
            ...nonConformityInput,
            //confirmar
        }); 

        const { nonConformity } = response.data;

        setNonConformities([
            ...nonConformities,
            nonConformity
        ])
    }

    async function deleteNonConformity (ncId: string) {

        try {

             await api.delete(`/non-conformities/${ncId}`);

             await getData();

        } catch (err) {
          console.log(err)
        }
    }

    return (
        <NonConformityContext.Provider value={{nonConformities, createNonConformity, depts, deleteNonConformity}}>
            {children}
        </NonConformityContext.Provider>
    );

}

export function useNonConformity() {
    const context = useContext(NonConformityContext);

    return context;
}