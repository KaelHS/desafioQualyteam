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

    const { nonConformities } = useNonConformity();

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
                                <button><FiTrash2  size="1rem" /></button>
                                <Link to={`/nonconformity/${nonConformity.id}`}>
                                    <RiFileEditFill size="1rem" />
                                </Link>
                            </td>
                            <td>{nonConformity.title}</td>
                            <td className="descriptionData">{ nonConformity.description }</td>
                            <td>
                                {/* {  
                                    nonConformity.departments.map( x => {
                                        let depto = departments.find( item => item.id === x );
                                        if (depto) { 
                                            if (nonConformity.departments.length > 1){
                                                return depto.name + ',  ';
                                                
                                            } else {
                                                return depto.name ;
                                            }
                                            
                                        }      
                                      })
                                } */}
                            </td>
                            <td>{ nonConformity.ocurrenceDate }</td>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </TableContent>
    );
}