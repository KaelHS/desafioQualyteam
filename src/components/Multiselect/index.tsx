import Select from 'react-select';
import { useState } from 'react';

const options = [
    { value: 1, label: "Qualidade" },
    { value: 2, label: "Gerência" },
    { value: 3, label: "Vendas" }
  ]

export function Multiselect() {

    const [ departments, setDepartments ] = useState<number[]>([]);

    function handleSelect(event: any) {
        
        // const isArray = Array.isArray(event);

        const updatedDepartments: number[] = event.map( (dp: any) => dp.value);
        
        setDepartments(updatedDepartments);

    }

    return (
        <>
        <Select 
            options={options}
            isMulti
            onChange={handleSelect}
            placeholder="Selecione o(s) departamento(s)"
            />

        <p>{departments}</p>

        </>
    );
}