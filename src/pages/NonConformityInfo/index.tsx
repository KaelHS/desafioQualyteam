import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CorrectiveActionsModal } from "../../components/CorrectiveActionsModal";
import { api } from "../../services/api";

import { Container } from './styles';

export function NonConformityInfo () {

    const { id }:any = useParams();

    const [ nConformity, setNConformity ] = useState({} as any);
    const [ isCorrectiveActionsModal, setIsCorrectiveActionsModal ] = useState(false);


    useEffect ( () => {
            
        api.get(`/non-conformities/${id}`).then( ({ data }) => setNConformity(data));
            
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
            <h1>{nConformity.title}</h1>
            <span>Descrição</span>
            <p>{nConformity.description}</p>
            <span>Departamentos envolvidos</span>
            {/* <p>{ nConformity.departments.map( x => {
                let depto = departments.find( item => item.id === x );
                    if (depto) { 
                        if (nConformity.departments.length > 1){
                            return depto.name + ' ';                       
                        } else {
                            return depto.name ;
                        }                           
                    }      
                })
            }</p> */}
            <div>
                <span>Ações Corretivas</span>
            </div>
            <p>{nConformity['corrective-actions']}</p>

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