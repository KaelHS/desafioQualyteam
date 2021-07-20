import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;


    div {
        margin: 2rem;
        padding: 2rem;
        height: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 1.25rem;
    }
`;