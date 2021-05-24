import { useState } from 'react';
import Modal from 'react-modal';
import { NewNonConformityModal } from './components/NewNonConformityModal';
import { ViewModal } from './components/ViewModal';
import { NonConformityTable } from './components/NonConformityTable';
import { NonConformityProvider } from './contexts/useNonConformity';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {

  const [ isNonConformityModalOpen, setIsNonConformityModalOpen ] = useState(false);
  const [ isViewModalOpen, setIsViewModalOpen ] = useState(false);

  function handleOpenNewConformityModal() {
    setIsNonConformityModalOpen(true);
  }

function handleCloseNewConformityModal() {
  setIsNonConformityModalOpen(false);
  }

  function handleOpenViewModal( ) {
    setIsViewModalOpen(true);
  }

function handleCloseViewModal() {
  setIsViewModalOpen(false);
  }

  return (
    <NonConformityProvider>
      <Header onOpenNewNonConformityModal={handleOpenNewConformityModal}/>
      <NonConformityTable onOpenViewModal={handleOpenViewModal}/>
      <GlobalStyle />
      <NewNonConformityModal
        isOpen={isNonConformityModalOpen}
        onRequestClose={handleCloseNewConformityModal} /> 




        
      <ViewModal
        isOpen={isViewModalOpen}
        onRequestClose={handleCloseViewModal} /> 

      </NonConformityProvider>
  );
}
