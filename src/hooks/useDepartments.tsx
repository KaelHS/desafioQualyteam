import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";
import { IDepartment } from '../interfaces/department';



interface DepartmentContextData {

    departments: Array<IDepartment>;
    // formatDepartments: (id: number) => IDepartment;
}

interface DepartmentProvider {
    children: ReactNode;
}

const DepartmentContext = createContext<DepartmentContextData>(
    {} as DepartmentContextData);



export function DepartmentProvider ( {children} : DepartmentProvider) {

    const [ departments, setDepartments ] = useState<IDepartment[]>([]);

    useEffect( () => {

        async function getDepartments () {
           const {data} = await api.get('/departments')
           
           setDepartments(data);

        }
        getDepartments();



    }, []);

    function formatDepartments(id: number) {
        let depto = departments.find( item => item.id === id );

        let formatted = {
            id: id,
            name: depto?.name,
        }

        return formatted;
    }
    

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