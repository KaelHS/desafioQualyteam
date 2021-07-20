import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CorrectiveActionsModal } from "../../components/CorrectiveActionsModal";
import { useNonConformity } from "../../hooks/useNonConformity";
import { INonConformity } from "../../interfaces/nonConformity";
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

    const [ singleNConformity, setSingleNConformity ] = useState<INonConformity>({} as INonConformity);
    const [ isCorrectiveActionsModal, setIsCorrectiveActionsModal ] = useState(false);

    const { depts, cActions } = useNonConformity();

    console.log(cActions);

    useEffect ( () => {
        
        async function getSingleNonConformity() {

            const { data }  = await api.get(`/non-conformities/${id}`);
    
            // const dataFormatted = ({
            //     id: data.id,
            //     title: data.title,
            //     description: data.description,
            //     "ocurrence-date": data["ocurrence-date"],
            //     departments: data.departments.map((id: number) => {
            //         let depto = depts.find( item => item.id === id );
            //         if(depto) {
            //             return depto.name + ' | '
            //         }
            //     }),
            //     'corrective-actions':  data["corrective-actions"].map( ( item: number) => {
                    
            //     })

            // })

            setSingleNConformity(data);

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
            <p>{singleNConformity.departments?.map((id: number) => {
                    let depto = depts.find( item => item.id === id );
                    if(depto) {
                        return depto.name + ' | '
                    }
                })}</p>
            <div>
                <span>Ações Corretivas</span>
            </div>
            {/* <p>{singleNConformity.correctiveActions}</p> */}
            <ul>
            {  
                cActions && singleNConformity['corrective-actions']?.map( x => {

                        let action = cActions.find( item => item.id === x );
                        if (action) {
                            
                            <li key={action.id}>
                                <p>{action.what}</p>
                                <p>{action.how}</p>
                                <p>{action.why}</p>
                                <p>{action.where}</p>
                                <p>{action.untilWhen}</p>
                            </li>      
                        }      
                    })

            }
            </ul>

            <div>
                <button
                    type="button"
                    onClick={handleOpenCorrectiveActionsModal}
                >
                    Cadastrar ações corretivas</button>
            </div>
        </Container>
        <CorrectiveActionsModal
        nConformity={singleNConformity}
        isOpen={isCorrectiveActionsModal}
        onRequestClose={handleCloseCorrectiveActionsModal} /> 
        </>
    );
}