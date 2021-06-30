import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CorrectiveActionsModal } from "../../components/CorrectiveActionsModal";
import { useNonConformity } from "../../hooks/useNonConformity";
import { api } from "../../services/api";

import { Container } from './styles';

export interface NonConformity {
    id: number;
    title: string;
    description?: string;
    ocurrenceDate: Date;
    departments: Array<string>
    correctiveActions?: Array<number>
}

export function NonConformityInfo () {

    const { id }:any = useParams();

    const [ singleNConformity, setSingleNConformity ] = useState<NonConformity>({} as NonConformity);
    const [ isCorrectiveActionsModal, setIsCorrectiveActionsModal ] = useState(false);

    const { depts } = useNonConformity();

    useEffect ( () => {
        
        async function getSingleNonConformity() {

            const { data }  = await api.get(`/non-conformities/${id}`);
    
            const dataFormatted = ({
                id: data.id,
                title: data.title,
                description: data.description,
                ocurrenceDate: data["ocurrence-date"],
                departments: data.departments.map((id: number) => {
                    let depto = depts.find( item => item.id === id );
                    if(depto) {
                        return depto.name + ' | '
                    }
                }),
                correctiveActions: data["corrective-actions"]

            })

            setSingleNConformity(dataFormatted);

        }
        
        getSingleNonConformity();
            
    }, [] )

    function handleOpenCorrectiveActionsModal( ) {
        setIsCorrectiveActionsModal(true);
    }
            
    function handleCloseCorrectiveActionsModal() {
        setIsCorrectiveActionsModal(false);
    } 

    return(
        <>
        <Container>
            <h1>{singleNConformity.title}</h1>
            <span>Descrição</span>
            <p>{singleNConformity.description}</p>
            <span>Departamentos envolvidos</span>
            <p>{singleNConformity.departments}</p>
            <div>
                <span>Ações Corretivas</span>
            </div>
            <p>{singleNConformity.correctiveActions}</p>

            <div>
                <button
                    type="button"
                    onClick={handleOpenCorrectiveActionsModal}
                >
                    Cadastrar ações corretivas</button>
            </div>
        </Container>
        <CorrectiveActionsModal
        isOpen={isCorrectiveActionsModal}
        onRequestClose={handleCloseCorrectiveActionsModal} /> 
        </>
    );
}