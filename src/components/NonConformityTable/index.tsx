import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { TableContent } from "./styles";

interface NonConformity {
    id: number;
    title: string;
    description: string;
    "ocurrence-date": string;
    departments: Array<number>;
    'corrective-actions': Array<number>
}

interface nonConformityFormatted extends NonConformity{
    ocurrenceDateFormatted: Date;    
}

interface Department {
    id: number;
    name: string;
}

export function NonConformityTable () {

    const [ nonConformities, setNonConformities ] = useState<NonConformity[]>([]);
    const [ department, setDepartment ] = useState<Department[]>([]);

    async function loadNonConformityData() {

        const nonConformityResponse = await api.get<NonConformity[]>("/non-conformities", {
            params: {
                _sort: 'ocurrence-date',
                _order: 'desc'
            }
        });

        const data = nonConformityResponse.data.map( nonConformity => ({
            ...nonConformity,
            // ocurrenceDate: new Intl.DateTimeFormat('pt-BR').format( new Date(nonConformity["ocurrence-date"]))
            ocurrenceDate: nonConformity["ocurrence-date"]
        }))

        setNonConformities(data);

    }

    async function loadDepartments () {

        const { data } = await api.get('/departments');

        setDepartment(data);

        
    }

    useEffect( () => {
        

        loadNonConformityData();
        loadDepartments();

        console.log(nonConformities);
        console.log(department);


            // const nonConformityFormatted = nonConformityResponse.data.map( nonConformity => {
            //     return {
            //         id: nonConformity.id,
            //         title: nonConformity.title,
            //         description: nonConformity.description,
            //         ocurrenceDate: format(parseISO(nonConformity["ocurrence-date"]),'d MMM yy', { locale: ptBR } ),
            //         departments: nonConformity.departments,
            //         correctiveActions: nonConformity['corrective-actions']
            //     }
            // } );


        // function dataOrdered () {
        //     const newArray = [...data];
        //     newArray.forEach( (item) => item['ocurrence-date'].Date.parse() );
        //     })
        // }

        // api.get('/departments').then( response => setDepartment(response.data));

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
                        <th>Ações Corretivas</th>
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