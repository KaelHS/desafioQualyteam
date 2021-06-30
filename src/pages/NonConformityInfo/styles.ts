import styled from 'styled-components';

export const Container = styled.div`
    margin: 7rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    h1 {
        font-size: 2rem;
        padding: 0.5rem 0;
        font-weight: 700;
        font-family: 'Titillium Web', sans-serif;
        color: var(--text-blue);
        margin: 1rem auto;
    }


    span {
            margin: 0 0 3rem 0;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--blue-ligth);
            font-family: 'Titillium Web', sans-serif;
    }

    p {
        line-height: 1.25rem;
        font-size: 1.2rem;
        font-family: 'Titillium Web', sans-serif;
        font-weight:300;
        margin-bottom:3rem;
    }

    button {
        margin: 0;
        margin-top: 3rem;
        border: 1px solid #078;
        border-radius: 0.4rem;
        width: 20rem;
        height: 3rem;
        padding: 0.5rem 0;
        font-size: 1.2rem;
        /* font-family: 'Titillium Web', sans-serif; */
        color: white;
        background: var(--blue);
        align-items: center;
        justify-content: center;

        &:hover {
            background: var(--blue-ligth);
            font-weight: 600;
        }
    }
`;