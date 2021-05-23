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
        api.get('/non-conformities').then( ({data}) => setNonConformities(data));
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
        <NonConformityContext.Provider value={{nonConformities, createNonConformity}}>
            {children}
        </NonConformityContext.Provider>
    );

}

export function useNonConformity() {
    const context = useContext(NonConformityContext);

    return context;
}