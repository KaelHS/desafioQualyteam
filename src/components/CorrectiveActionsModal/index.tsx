import Modal from 'react-modal';

import { HiX } from "react-icons/hi";
import { FormEvent, useState } from 'react';

import { FormContainer } from './styles';


interface ViewyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

async function handleCreateNewCorrectiveAction( event: FormEvent) {
    event.preventDefault();

    // await createNonConformity({
    //     title,
    //     description,
    //     departments, 
    //     "ocurrence-date",
    //     "corrective-actions",
    // })

    // onRequestClose();


}

export function CorrectiveActionsModal ({isOpen, onRequestClose} : ViewyModalProps) {

    const [ oque, setOque ] = useState('');
    const [ porque, setPorque ] = useState('');
    const [ como, setComo ] = useState('');
    const [ onde, setOnde ] = useState('');
    const [ date, setDate ] = useState(null);

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content" >
            
            <button type="button" 
                onClick={onRequestClose} 
                className="react-modal-close" >
                <HiX/>
            </button>
            <div>
                <FormContainer onSubmit={handleCreateNewCorrectiveAction}>
                    <h3>Cadastro de Ação Corretiva</h3>
                    <label htmlFor="title">O que fazer: </label>
                    <input 
                        type="text"
                        id="title"
                        value={oque}
                        onChange={ event => setOque(event.target.value)}/>
                    <label htmlFor="title">Porque fazer: </label>
                    <input 
                        type="text"
                        id="title"
                        value={porque}
                        onChange={ event => setPorque(event.target.value)}/>
                    <label htmlFor="title">Como fazer: </label>
                    <input 
                        type="text"
                        id="title"
                        value={como}
                        onChange={ event => setComo(event.target.value)}/>
                    <label htmlFor="title">O que fazer: </label>
                    <input 
                        type="text"
                        id="title"
                        value={onde}
                        onChange={ event => setOnde(event.target.value)}/>
                    <div>
                        <label htmlFor="date">Data da ocorrência</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <button type="submit">Cadastrar</button>   
                </FormContainer>
            </div>

        </Modal>
    );
}