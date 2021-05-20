import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import { HiX } from "react-icons/hi";
import { FormContainer } from './styles';

interface NewNonConformityModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewNonConformityModal ( {isOpen, onRequestClose} : NewNonConformityModalProps ) {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ date, setDate ] = useState(new Date());
    const [ departments, setDepartments ] = useState([]);
    const [ correctiveActions, setCorrectiveActions ] = useState([]);


    async function handleCreateNewNonConformity( event: FormEvent) {
        event.preventDefault();

        // await createTransaction({
        //     title,
        //     amount,
        //     category,
        //     type,
        // })
    }
        
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button type="button" 
                onClick={onRequestClose} 
                className="react-modal-close" >
                <HiX/>
            </button>
            <FormContainer onSubmit={handleCreateNewNonConformity}>
                <h3>Cadastro de nova ocorrência</h3>
                <label htmlFor="title">Título</label>
                <input 
                    type="text"
                    value={title} 
                    onChange={ event => setTitle(event.target.value)}/>
                <label htmlFor="description">Descrição</label>
                <textarea
                    id="description"
                    rows={5}
                    cols= {25} ></textarea>

                {/* <div>
                    <h3>Departamentos responsáveis</h3>
                    <input 
                        type="checkbox" 
                        name="department-option"
                        value={departments}  >Qualidade</input>
                    <input 
                        type="checkbox" 
                        name="department-option"
                        value={departments}  >Qualidade</input>
                    <input 
                        type="checkbox" 
                        name="department-option"
                        value={departments}  >Qualidade</input>
                </div> */}
                <button type="submit">Cadastrar</button>
            </FormContainer>

        </Modal>
    );
}