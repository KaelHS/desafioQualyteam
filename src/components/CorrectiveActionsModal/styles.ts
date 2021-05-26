import styled from 'styled-components';

export const FormContainer = styled.form`

    display: flex;
    flex-direction: column;


    h3 {
        font-size: 2rem;
        padding: 0.5rem 0;
        font-weight: 700;
        font-family: 'Titillium Web', sans-serif;
        color: var(--text-blue);
        margin: 1rem auto;
    }

    h4 {
        padding: 0.5rem 0;
        line-height: 2.2rem;
        font-size: 1.25rem;
        font-weight: 600;
        font-family: 'Titillium Web', sans-serif;
        color: var(--text-blue);

    }


    label {
        display: block;
        font-size: 1.25rem;
        line-height: 2.2rem;
        padding: 0.5rem 0;
        font-weight: 600;
        font-family: 'Titillium Web', sans-serif;
        color: var(--text-blue);
    }

    input {
        width: 100%;
        padding: 0 0.5rem;
        height: 2.5rem;

    }
    textarea {
        width: 100%;
        padding: 0.25rem;
    }

    button[type="submit"] {
        width:100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--blue-dark);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

`;