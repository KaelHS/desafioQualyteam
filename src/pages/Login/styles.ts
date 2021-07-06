import styled from 'styled-components';

export const Form = styled.form`
    padding: 20px;
    width: 400px;
    margin: auto;
`;

export const Input = styled.input`
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

export const LogoContainer = styled.div`
    padding: 0 100px;
    margin-bottom: 40px;

    & img {
        margin-bottom: 15px;
        margin-left: 50px;
    }
`;