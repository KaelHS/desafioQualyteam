import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";
import { INonConformity } from '../interfaces/nonConformity';

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
}

interface NonConformityProviderProps {
    children: ReactNode;
}

const NonConformityContext = createContext<NonConformityContextData>(
    {} as NonConformityContextData);



export function NonConformityProvider ( {children} : NonConformityProviderProps) {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);


    useEffect( () => {
         
        async function getData() {

        const response = await api.get('/non-conformities');

        const dataFormatted = response.data.map( (nc: INonConformity) => ({
            id: nc.id,
            title: nc.title,
            description: nc.description,
            ocurrenceDate: nc['ocurrence-date'],
            departments: nc.departments,
            correctiveActions: nc['corrective-actions']
          }))

        setNonConformities(dataFormatted);

        }

        getData();

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

    return (
        <NonConformityContext.Provider value={{nonConformities, createNonConformity}}>
            {children}
        </NonConformityContext.Provider>
    );

}

export function useNonConformity() {
    const context = useContext(NonConformityContext);

    return context;
}