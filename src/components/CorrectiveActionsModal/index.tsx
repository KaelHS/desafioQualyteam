import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useNonConformity } from '../../hooks/useNonConformity';

import { HiX } from "react-icons/hi";
import { FormContainer } from './styles';
import DatePicker from 'react-date-picker';
import { api } from '../../services/api';
import { INonConformity } from '../../interfaces/nonConformity';


interface ViewyModalProps {
    nConformity: INonConformity;
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CorrectiveActionsModal ({nConformity, isOpen, onRequestClose} : ViewyModalProps) {

    const [ what, setWhat ] = useState('');
    const [ why, setWhy ] = useState('');
    const [ how, setHow ] = useState('');
    const [ where, setWhere ] = useState('');
    const [ until, setUntil ] = useState(new Date());


    const { cActions, createCorrectiveAction } = useNonConformity();

    function idGenerator(){
        const ids = cActions.map( element => element.id );
        const max = ids.reduce( (a,b) => Math.max(a,b));
        let nextId = max+1;
    
        return nextId;
    
     }
    
    
     async function handleCreateNewCorrectiveAction( event: FormEvent) {
         event.preventDefault();
    
         await createCorrectiveAction( nConformity, {
             id: idGenerator(),
             "what-to-do": what,
             "why-to-do-it": why,
             "how-to-do-it": how,
             "where-to-do-it": where,
             "until-when": String(until),
         })


    
         onRequestClose();
         setWhat('');
         setWhy('');
         setHow('');
         setWhere('');
         setUntil(new Date());
     }

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
                    <label htmlFor="what">O que fazer: </label>
                    <input 
                        type="text"
                        id="what"
                        value={what}
                        onChange={ event => setWhat(event.target.value)}/>
                    <label htmlFor="why">Porque fazer: </label>
                    <input 
                        type="text"
                        id="why"
                        value={why}
                        onChange={ event => setWhy(event.target.value)}/>
                    <label htmlFor="how">Como fazer: </label>
                    <input 
                        type="text"
                        id="how"
                        value={how}
                        onChange={ event => setHow(event.target.value)}/>
                    <label htmlFor="where">Onde fazer: </label>
                    <input 
                        type="text"
                        id="where"
                        value={where}
                        onChange={ event => setWhere(event.target.value)}/>
                    <div>
                        <label htmlFor="date">Previsão de resolução: </label>
                        <DatePicker
                            value={until}
                            onChange={setUntil}
                        />
                    </div>
                    <button type="submit">Cadastrar</button>   
                </FormContainer>
            </div>

        </Modal>
    );
}