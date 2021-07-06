import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFakeAuth } from '../../hooks/useFakeAuth'

import { LogoContainer, Form, Input } from './styles';

const Login = () => {

    const [ name, setName ] = useState('');
    const [ position, setPosition ] = useState('');

    const history = useHistory();

    const { getUser }  = useFakeAuth()


    function handleSubmit(event: FormEvent) {

        event.preventDefault();

        getUser(name, position)

        history.push('/');
        
    }

    return (
            <Form onSubmit={handleSubmit}>
                <LogoContainer>
                    <img src="" alt="" />
                </LogoContainer>
                <Input 
                    type="text" 
                    value={name}
                    placeholder="Nome" 
                    onChange={({target}) => setName(target.value)}
                    required />
                <Input 
                    type="text" 
                    name="position" 
                    value={position}
                    placeholder="Cargo" 
                    onChange={({target}) => setPosition(target.value)}
                    required />

                <Input type="submit" value="Entrar" />
            </Form>
    );
}

export default Login;