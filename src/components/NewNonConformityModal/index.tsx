import Modal from 'react-modal';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useNonConformity } from '../../contexts/useNonConformity';

import { HiX } from "react-icons/hi";
import addIcon from '../../assets/addIcon.png';
import { FormContainer } from './styles';
import { SectionContainer, ActionContainer } from './styles';
import { DepartmentCheckbox } from '../DepartmentCheckbox';

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

                <SectionContainer>
                    <div className="multiselect">
                    <h4>Departamentos responsáveis</h4>
                        {/* <div className="selectBox" >
                        <select>
                            <option>Select an option</option>
                        </select>
                        <div className="overSelect"></div>
                        </div>
                        <div id="checkboxes">
                        <label htmlFor="one">
                            <input type="checkbox" id="one" />First checkbox</label>
                        <label htmlFor="two">
                            <input type="checkbox" id="two" />Second checkbox</label>
                        <label htmlFor="three">
                            <input type="checkbox" id="three" />Third checkbox</label>
                        </div> */}
                    <DepartmentCheckbox />
                    </div>
                    <div>
                        <label htmlFor="ocurrence-date">Data da ocorrência</label>
                        <input type="date" name="ocurrence-date" id="ocurrence-date" />
                    </div>
                </SectionContainer>
                <ActionContainer>
                <h4>Adicionar ação corretiva</h4>
                    <button
                        type="button"
                    > 
                        <img src={addIcon} alt="Adicionar ação corretiva" />
                    </button>
                </ActionContainer>
                <button type="submit">Cadastrar</button>
            </FormContainer>

        </Modal>
    );
}