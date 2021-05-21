import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewNonConformityModal } from './components/NewNonConformityModal';
import { NonConformityTable } from './components/NonConformityTable';

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
    <div className="App">
      <Header onOpenNewNonConformityModal={handleOpenNewConformityModal}/>
      <NonConformityTable />
      <GlobalStyle />
      {/* <NewNonConformityModal
      isOpen={isNonConformityModalOpen}
      onRequestClose={handleCloseNewConformityModal} />  */}
    </div>
  );
}
