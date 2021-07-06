import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import { useNonConformity } from '../../hooks/useNonConformity';

import { HiX } from "react-icons/hi";
import { SectionContainer, FormContainer } from './styles';


interface NewNonConformityModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewNonConformityModal ( {isOpen, onRequestClose} : NewNonConformityModalProps ) {

    const options = [
        { value: 1, label: "Qualidade" },
        { value: 2, label: "Gerência" },
        { value: 3, label: "Vendas" }
    ];

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ ocurrenceDate, setOcurrenceDate ] = useState(new Date());
    const [ departments, setDepartments ] = useState<number[]>([]);

    const { nonConformities ,createNonConformity } = useNonConformity();

    function handleSelect(event: any) {

        const updatedDepartments: number[] = event.map( (dp: any) => dp.value);
        
        setDepartments(updatedDepartments);

    }
    
    function idGenerator(){
       const ids = nonConformities.map( element => element.id );
       const max = ids.reduce( (a,b) => Math.max(a,b));
       const nextId = max+1

       return nextId;

    }


    async function handleCreateNewNonConformity( event: FormEvent) {
        event.preventDefault();

        await createNonConformity({
            id: idGenerator(),
            title,
            description,
            departments, 
            ocurrenceDate
        })

        onRequestClose();
        setTitle('');
        setDescription('');
        setDepartments([]);
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
                    <Select 
                        options={options}
                        isMulti
                        onChange={handleSelect}
                        placeholder="Selecione o(s) departamento(s)"
                        />
                    </div>
                    <div>
                        <label>Data da ocorrência</label>
                        <DatePicker
                            value={ocurrenceDate}
                            onChange={setOcurrenceDate}
                        />
                    </div>
                </SectionContainer>
                <button type="submit">Cadastrar</button>
            </FormContainer>

        </Modal>
    );
}