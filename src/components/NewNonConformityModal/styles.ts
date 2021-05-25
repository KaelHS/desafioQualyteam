import styled from 'styled-components';

export const FormContainer = styled.form`

    display: flex;
    flex-direction: column;
    overflow-y: scroll;

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
        width: 70%;
        padding: 0 0.5rem;
        height: 2.5rem;

    }
    textarea {
        width: 100%;
        padding: 0.25rem;
    }

    input[type="checkbox"] {
        margin: 0;
        height: 1rem;
        display: inline-block;
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

export const SectionContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .multiselect {
        max-width: 300px;
        padding: 0 0.5rem;

    }

    .selectBox {
        position: relative;
        }

    .selectBox select {
        width: 100%;
        font-weight: bold;
    }

    .overSelect {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    #checkboxes {
        display: none;
        border: 1px #dadada solid;
    }

    #checkboxes label {
        display: block;
    }

    #checkboxes label:hover {
        background-color: #1e90ff;
    }
`;

export const ActionContainer = styled.div`

    margin-top: 5rem;
    display: flex;
    align-items: center;

    button[type="button"] {
            padding: 0 1.5rem;
            height: 2rem;
            border: 0;
            background: transparent;



            img {
                width: 2.5rem;
                height: 2.5rem;
            }
        }
`;