import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";


interface NonConformity {
    id: number;
    title: string;
    description: string;
    "ocurrence-date": string;
    departments: Array<number>;
    'corrective-actions': Array<number>
}

interface Department {
    id: number;
    name: string;
}

// type NonConformityIput = Omit<NonConformity, 'id' >

interface NonConformityContextData {
    nonConformities: Array<NonConformity>;
    createNonConformity: ( nonConformityInput: NonConformity ) => void ;
    departments: Array<Department>;
}

interface NonConformityProviderProps {
    children: ReactNode;
}

const NonConformityContext = createContext<NonConformityContextData>(
    {} as NonConformityContextData);



export function NonConformityProvider ( {children} : NonConformityProviderProps) {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);
    const [ departments, setDepartments ] = useState<Department[]>([]);


    useEffect( () => {
        api.get('/non-conformities').then( ({data}) => setNonConformities(data));
    }, []);

    useEffect( () => {
        api.get('/departments').then( ({data}) => setDepartments(data));
    }, []);
    

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
        <NonConformityContext.Provider value={{nonConformities, createNonConformity, departments}}>
            {children}
        </NonConformityContext.Provider>
    );

}

export function useNonConformity() {
    const context = useContext(NonConformityContext);

    return context;
}