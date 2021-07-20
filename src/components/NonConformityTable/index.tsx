import React from "react";
import { Link } from 'react-router-dom';
import { TableContent } from "./styles";    
import { useNonConformity } from '../../hooks/useNonConformity';

import { RiFileEditFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';

interface NonConformityTableProps {
    onOpenViewModal: ( ) => void;
}

export function NonConformityTable ( ) {

    const { nonConformities, depts, deleteNonConformity } = useNonConformity();

    return (
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
                                <button
                                    onClick={() => deleteNonConformity(String(nonConformity.id))}
                                ><FiTrash2  size="1.2rem" color="var(--red-500)" /></button>
                                <Link to={`/nonconformity/${nonConformity.id}`}>
                                    <RiFileEditFill size="1.2rem" color="var(--yellow-500)" />
                                </Link>
                            </td>
                            <td>{nonConformity.title}</td>
                            <td className="descriptionData">{ nonConformity.description }</td>
                            <td>
                                {  
                                   depts && nonConformity.departments.map( x => {
                                        let depto = depts.find( item => item.id === x );
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
                            <td>{ nonConformity.ocurrenceDate }</td>
                            <td>
                                { nonConformity.correctiveActions 
                                    ? <button>[...]</button> 
                                    : 'Sem Ações Corretivas'
                                }
                            </td>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </TableContent>
    );
}