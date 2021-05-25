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


    useEffect( () => {
        async function loadDepartments () {

            const { data } = await api.get('/departments');
    
            setDepartment(data);
    
        }
        
        loadDepartments();


    }, [nonConformities])

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

                    { nonConformities.map ( nonConformity => (
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
                                {  
                                    nonConformity.departments.map( x => {
                                        let depto = department.find( item => item.id === x );
                                        if (depto) { 
                                            if (nonConformity.departments.length > 1){
                                                return depto.name + ',  ';
                                            } else {
                                                return depto.name ;
                                            }
                                        }      
                                      })
                                }
                            </td>
                            <td>{ nonConformity["ocurrence-date"] }</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </TableContent>
        </Switch>
        </BrowserRouter>
    );
}