import React, { useEffect, useState } from "react";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { TableContent } from "./styles";    
import { useNonConformity } from '../../contexts/useNonConformity';

import  deleteIcon  from '../../assets/deleteIcon.png';
import sheetIcon from '../../assets/sheetIcon.png';


interface NonConformityTableProps {
    onOpenViewModal: ( ) => void;
}
export function NonConformityTable ( {onOpenViewModal}: NonConformityTableProps) {

    const { departments, nonConformities } = useNonConformity();

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
                                        let depto = departments.find( item => item.id === x );
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