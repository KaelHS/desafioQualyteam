import Modal from 'react-modal';
import { ChangeEvent, FormEvent, useState } from 'react';

import { HiX } from "react-icons/hi";
import { FormContainer } from './styles';
import { useNonConformity } from '../../contexts/useNonConformity';

interface NewNonConformityModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface Department { 
    id: number;
    title: string;
}

export function NewNonConformityModal ( {isOpen, onRequestClose} : NewNonConformityModalProps ) {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ date, setDate ] = useState(new Date());
    const [ correctiveActions, setCorrectiveActions ] = useState({});
    
    const [ departments, setDepartments ] = useState<Department[]>([]);

    const { createNonConformity } = useNonConformity();

    // function handleSetDepartments ( event: ChangeEvent<HTMLInputElement> ) {
    //     if ( event.target.checked  ) {
    //         setDepartments([{...departments}, event.target.value])
    //     } else {
    //         setDepartments( departments.filter( departament => departament !== event.target.value))
    //     }
    // }

    async function handleCreateNewNonConformity( event: FormEvent) {
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
                    id="title"
                    value={title}
                    onChange={ event => setTitle(event.target.value)}/>
                <label htmlFor="description">Descrição</label>
                <textarea
                    id="description"
                    rows={5}
                    cols= {25}
                    value={description}
                    onChange={ event => setDescription(event.target.value)}
                     ></textarea>

                <div>
                    <h3>Departamentos responsáveis</h3>
                    <label>
                    <input 
                        type="checkbox" 
                        name="department-option"
                        value="Quality" 
                         />Qualidade</label>
                     <label>
                    <input 
                        type="checkbox" 
                        name="department-option"
                        value="Management" 
                         />Gerência</label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="department-option"
                        value="Sales"
                         />Vendas</label>
                </div>
                <label htmlFor="ocurrence-date">Data da ocorrência</label>
                <input type="date" name="ocurrence-date" id="ocurrence-date" />
                <button type="submit">Cadastrar</button>
            </FormContainer>

        </Modal>
    );
}