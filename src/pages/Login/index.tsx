import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding: 20px;
    width: 400px;
    margin: auto;
`;

const Input = styled.input`
    width: 100%;
    padding: 15px;
    box-sizing:border-box;

    &[type="password"], input[type="text"] {

        border: 2px solid #dddddd;
        margin-bottom: 15px;
        
    }

    &[type="submit"] {
        
        background: #e54;
        border: 0;
        cursor: pointer;
        font-weight: bold;
        color: #ffffff;
    }

`;

const LogoContainer = styled.div`
    padding: 0 100px;
    margin-bottom: 40px;

    & img {
        margin-bottom: 15px;
        margin-left: 50px;
    }
`;

const LoginForm = () => {
    return (
            <Form>
                <LogoContainer>
                    <img src="" alt="" />
                </LogoContainer>
                <Input type="text" name="username" placeholder="Usuario" required />
                <Input type="password" name="password" placeholder="Senha" required />
                <Input type="submit" value="Entrar" />
            </Form>
    );
}

export default LoginForm;