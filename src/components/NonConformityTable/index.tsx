import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TableContent } from "./styles";

interface NonConformity {
    id: number;
    title: string;
    description: string;
    ocurrenceDate: string;
    departments: Array<number>;
    correctiveActions: Array<number>
}

export function NonConformityTable () {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);

    useEffect( () => {
    
        api.get("/non-conformities")
        .then( ({ data }) => setNonConformities( data ));

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
                            <td>{ nonConformity.ocurrenceDate }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContent>
    );
}