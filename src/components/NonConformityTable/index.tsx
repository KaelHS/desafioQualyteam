import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TableContent } from "./styles";

interface NonConformity {
    id: number;
    title: string;
    description: string;
    "ocurrence-date": string;
    departments: Array<number>;
    correctiveActions: Array<number>
}

interface Department {
    id: number;
    name: string;
}

export function NonConformityTable () {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);
    const [ department, setDepartment ] = useState<Department[]>([]);

    useEffect( () => {
    
        api.get("/non-conformities").then( ({ data }) => setNonConformities( data ));

        api.get('/departments').then( response => setDepartment(response.data));

    }, [])



    return (
        <TableContent>
            <table>
                <thead>
                    <tr>
                        <th>Ocorrência</th>
                        <th>Descrição</th>
                        <th>Departamentos</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    { nonConformities.map ( nonConformity => (
                        <tr key={ nonConformity.id}>
                            <td>{nonConformity.title}</td>
                            <td className="descriptionData">{ nonConformity.description }</td>
                            <td>{nonConformity.departments}</td>
                            <td>{ nonConformity["ocurrence-date"] }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContent>
    );
}