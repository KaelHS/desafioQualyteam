import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-date-picker';
import { useNonConformity } from '../../hooks/useNonConformity';

import { HiX } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { FormContainer } from './styles';
import { SectionContainer, ActionContainer } from './styles';

import { Multiselect } from '../Multiselect';

interface NewNonConformityModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewNonConformityModal ( {isOpen, onRequestClose} : NewNonConformityModalProps ) {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ ocurrenceDate, setOcurrenceDate ] = useState(new Date());
    const [ correctiveActions, setCorrectiveActions ] = useState<Number[]>([]);
    
    const [ departments, setDepartments ] = useState<Number[]>([]);
    const [ indexDpt, setIndexDpt ] = useState<Number[]>([])

    const { createNonConformity } = useNonConformity();
    // const { departments} = useDepartments()

    // function handleSetDepartments ( {target}: any ) {
    //     if ( target.checked  ) {
    //         setDept([{...departments}, target.value])
    //     } else {
    //         setDept( dept.filter( departament => departament !== target.value))
    //     }
    // }

    // function handleChecked(id: number) {
    //     return indexDpt.includes(id);
    //   }

    async function handleCreateNewNonConformity( event: FormEvent) {
        event.preventDefault();

        // await createNonConformity({
        //     title,
        //     description,
        //     departments, 
        //     ocurrenceDate,
        //     correctiveActions
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
                    <Multiselect />
                    </div>
                    <div>
                        <label>Data da ocorrência</label>
                        <DatePicker
                            value={ocurrenceDate}
                            onChange={setOcurrenceDate}
                        />
                    </div>
                </SectionContainer>
                <ActionContainer>
                <h4>Adicionar ação corretiva</h4>
                    <button
                        type="button"
                    > 
                        <IoIosAddCircle size="2rem" color="var(--blue-ligth)"/>
                    </button>
                </ActionContainer>
                <button type="submit">Cadastrar</button>
            </FormContainer>

        </Modal>
    );
}