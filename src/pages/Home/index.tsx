import { useState } from "react";
import { Header } from "../../components/Header";
import { NewNonConformityModal } from "../../components/NewNonConformityModal";
import { NonConformityTable } from "../../components/NonConformityTable";
import Modal from 'react-modal';


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
            <Header onOpenNewNonConformityModal={handleOpenNewConformityModal}/>
            <NonConformityTable />
            <NewNonConformityModal
            isOpen={isNonConformityModalOpen}
            onRequestClose={handleCloseNewConformityModal} /> 
        
        </>
    );
}