import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFakeAuth } from '../../hooks/useFakeAuth';
import { IoIosFingerPrint } from 'react-icons/io';

import { Container } from './styles';

const Login = () => {

    const [ name, setName ] = useState('');
    const [ position, setPosition ] = useState('');

    const history = useHistory();

    const { setUser }  = useFakeAuth()


    function handleSubmit(event: FormEvent) {

        event.preventDefault();

        setUser(name, position);

        history.push('/nonconformity');
        
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div>
                    <IoIosFingerPrint size="7rem" color="var(--blue)"/> 
                </div>
                <input 
                    type="text" 
                    value={name}
                    placeholder="Nome" 
                    onChange={({target}) => setName(target.value)}
                    required />
                <input 
                    type="text" 
                    name="position" 
                    value={position}
                    placeholder="Cargo" 
                    onChange={({target}) => setPosition(target.value)}
                    required />

                <input type="submit" value="Entrar" />
            </form>
        </Container>
    );
}

export default Login;