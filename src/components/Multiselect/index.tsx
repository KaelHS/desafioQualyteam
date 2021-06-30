import Select from 'react-select';
import { useState } from 'react';

const options = [
    { value: 1, label: "Qualidade" },
    { value: 2, label: "Gerência" },
    { value: 3, label: "Vendas" }
  ]

export function CustomSelect() {

    const [ departments, setDepartments ] = useState([]);



    return (
        <Select 
            options={options}
            isMulti
            onChange={ () => setDepartments}
            // displayValue="name"
            placeholder="Selecione o(s) departamento(s)"
            />
    );
}