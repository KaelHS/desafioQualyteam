import { useEffect, useState } from "react";
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

    async function loadDepartments () {

        const { data } = await api.get('/departments');

        setDepartment(data);

    }



    useEffect( () => {
        
        loadDepartments();

    }, [])

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
                    <BrowserRouter>
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
                                onClick={onOpenViewModal}
                            >
                                <Link to={`/non-conformities/${nonConformity.id}`}>
                                    <img src={sheetIcon} alt="Visualizar não conformidade" />
                                </Link>
                            </button>
                            </td>
                            <td>{nonConformity.title}</td>
                            <td className="descriptionData">{ nonConformity.description }</td>
                            <td>{nonConformity.departments}</td>
                            <td>{ nonConformity["ocurrence-date"] }</td>
                        </tr>
                    ))}
                    </BrowserRouter>
                </tbody>
            </table>
        </TableContent>
    );
}