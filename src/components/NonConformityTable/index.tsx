import React, { useEffect, useState } from "react";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { api } from "../../services/api";
import { TableContent } from "./styles";    
import { useNonConformity } from '../../contexts/useNonConformity';

import  deleteIcon  from '../../assets/deleteIcon.png';
import sheetIcon from '../../assets/sheetIcon.png';


interface Department {
    id: number;
    name: string;
}

interface NonConformityTableProps {
    onOpenViewModal: ( ) => void;
}
export function NonConformityTable ( {onOpenViewModal}: NonConformityTableProps) {

    const [ department, setDepartment ] = useState<Department[]>([]);

    const { nonConformities } = useNonConformity();

    const  getDepartmentById: any = ( arraydpts: Array<number> ) => {

        let deptList = department.filter( dpto => 
            arraydpts.filter( ( id ) => 
                { 
                    if (id === dpto.id){
                        return(
                            <p>{ JSON.stringify(dpto.name) } </p>
                        );
                    }}
                    ) )

    }


    useEffect( () => {
        async function loadDepartments () {

            const { data } = await api.get('/departments');
    
            setDepartment(data);
    
        }
        
        loadDepartments();


    }, [])

    return (
        <BrowserRouter>
        <Switch>
        <TableContent>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Ocorrência</th>
                        <th>Descrição</th>
                        <th>Departamentos</th>
                        <th>Data</th>
                        <th>Ações Corretivas</th>
                    </tr>
                </thead>
                <tbody>

                    { nonConformities.map ( (nonConformity, index ) => (
                        <tr key={ nonConformity.id}>
                            <td>
                            <button>
                                <Link to="">
                                    <img src={deleteIcon} alt="Deletar não conformidade" />
                                </Link>
                            </button>
                            <button
                                type="button"
                                // onClick={onOpenViewModal}
                            >
                                <Link to={`/nonconformity/${nonConformity.id}`}>
                                    <img src={sheetIcon} alt="Visualizar não conformidade" />
                                </Link>
                            </button>
                            </td>
                            <td>{nonConformity.title}</td>
                            <td className="descriptionData">{ nonConformity.description }</td>
                            <td>
                                {getDepartmentById (nonConformity.departments) }
                                {/* { department.filter( ( dpt ) => {
                                    if ( dpt.id === nonConformity.departments[index]) {
                                    return JSON.stringify(dpt.name);
                                }})} */}
                            </td>
                            <td>{ nonConformity["ocurrence-date"] }</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div>
                { department.map( (dpt) => (
                    <ul key={dpt.id}>
                        <h2>{dpt.name}</h2>
                    </ul>
                ))}
            </div>
        </TableContent>
        </Switch>
        </BrowserRouter>
    );
}