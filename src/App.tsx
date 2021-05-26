import React, { useState } from 'react';
import Modal from 'react-modal';
import { NewNonConformityModal } from './components/NewNonConformityModal';
import { CorrectiveActionsModal } from './components/CorrectiveActionsModal';
import { NonConformityTable } from './components/NonConformityTable';
import { NonConformityProvider } from './contexts/useNonConformity';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {

  const [ isNonConformityModalOpen, setIsNonConformityModalOpen ] = useState(false);


  function handleOpenNewConformityModal() {
    setIsNonConformityModalOpen(true);
  }

function handleCloseNewConformityModal() {
  setIsNonConformityModalOpen(false);
  }

  return (
    <NonConformityProvider>

      <Header onOpenNewNonConformityModal={handleOpenNewConformityModal}/>
      <NonConformityTable />
      {/* <GlobalStyle /> */}
      <NewNonConformityModal
        isOpen={isNonConformityModalOpen}
        onRequestClose={handleCloseNewConformityModal} /> 

      </NonConformityProvider>
  );
}
