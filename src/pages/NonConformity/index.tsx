import React, { FunctionComponent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import  { RouteComponentProps, withRouter } from 'react-router-dom';

import IPage from '../../interfaces/pages';
import { INonConformity } from '../../interfaces/nonConformity';

import { Container } from './styles';
import { useNonConformity } from '../../contexts/useNonConformity';
import { useDepartments } from '../../contexts/useDepartments';
import { CorrectiveActionsModal } from '../../components/CorrectiveActionsModal';


interface HeaderProps {
        onOpenCorrelativeActionsModal: () => void;

}

const NonConformity: FunctionComponent<IPage & RouteComponentProps<any>> = ( props, {onOpenCorrelativeActionsModal} : HeaderProps ) => {

    const [ nConformity, setNConformity ] = useState<INonConformity>({} as INonConformity);
    const [ isCorrectiveActionsModal, setIsCorrectiveActionsModal ] = useState(false);

    const {  nonConformities } = useNonConformity();
    const { departments } = useDepartments();
    
    useEffect ( () => {
        
        const slug = props.match.params.slug;
        
        async function getData () {
            
            const { data } = await api.get<INonConformity>(`/non-conformities/${slug}`);
            
            setNConformity(data);
            
            console.log(data);
            console.log(departments);
            
            console.log(nonConformities);
            
            // data.departments.map( x => {
                //     let depto = departments.find( item => item.id === x );
                //     if (depto) { 
                    //         if (nConformity.departments.length > 1){
                        //             return depto.name + '  ';
                        //         }
                        //     }      
                        //     })
                    }
                    
                    getData();
                    
                }, [props] );
                
        function handleOpenCorrectiveActionsModal( ) {
            setIsCorrectiveActionsModal(true);
        }
                
        function handleCloseCorrectiveActionsModal() {
            setIsCorrectiveActionsModal(false);
        } 

    return (
        <>
        <Container>
            <h1>{nConformity.title}</h1>
            <p>{nConformity.description}</p>
            <p>  {nConformity.departments}</p>
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

export default withRouter(NonConformity);