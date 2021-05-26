import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";


interface Department {
    id: number;
    name: string;
}

interface DepartmentContextData {

    departments: Array<Department>;
}

interface DepartmentProvider {
    children: ReactNode;
}

const DepartmentContext = createContext<DepartmentContextData>(
    {} as DepartmentContextData);



export function DepartmentProvider ( {children} : DepartmentProvider) {

    const [ departments, setDepartments ] = useState<Department[]>([]);

    useEffect( () => {

        async function getDepartments () {
           const {data} = await api.get('/departments')
           
           setDepartments(data);

        }
        getDepartments();



    }, []);
    

    return (
        <DepartmentContext.Provider value={{ departments }}>
            {children}
        </DepartmentContext.Provider>
    );

}

export function useDepartments() {
    const context = useContext(DepartmentContext);

    return context;
}