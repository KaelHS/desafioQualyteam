import { useState } from "react";
import { Header } from "../../components/Header";
import { NewNonConformityModal } from "../../components/NewNonConformityModal";
import { NonConformityTable } from "../../components/NonConformityTable";
import Modal from 'react-modal';

import { SubHeaderSection} from './styles';
import { MdAddCircleOutline } from "react-icons/md";

Modal.setAppElement('#root');

export function Home() {

    const [ isNonConformityModalOpen, setIsNonConformityModalOpen ] = useState(false);


    function handleOpenNewConformityModal() {
      setIsNonConformityModalOpen(true);
    }
  
    function handleCloseNewConformityModal() {
        setIsNonConformityModalOpen(false);
    }

    return(
        <>
        <Header />
            <SubHeaderSection>
                <h1> <span>Não </span>Conformidades </h1>
                <button 
                    type="button"
                    onClick={handleOpenNewConformityModal}
                >
                <MdAddCircleOutline size="2rem" color="#fff"/>
                Nova Ocorrência</button>

        </SubHeaderSection>
            <NonConformityTable />
            <NewNonConformityModal
            isOpen={isNonConformityModalOpen}
            onRequestClose={handleCloseNewConformityModal} /> 
        
        </>
    );
}