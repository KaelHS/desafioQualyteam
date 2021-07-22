import styled from 'styled-components';

export const SubHeaderSection = styled.section`
    background: var(--section-background);
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 2rem 3rem;
    align-items: center;
    margin-bottom: 3rem;

    border-bottom: 1px dashed #2cb;

    h1 {
        line-height:3.5rem;
        font-size: 4rem;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 700;

        span {
            display: block;
        }
    
    }

    button {
        display: flex;
        align-items: center;
        background: #2cb;
        border-radius: 0.25rem;
        border: 2px solid #2cb;
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--text-blue);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.95);
            color: #fff;
        }
    }
    
`;