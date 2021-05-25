import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #ccc;
    padding:0.25rem;
    border-radius: 0.25rem;

    label {
        font-size: 1rem;
        display: block;

        input {
            align-items: left;
        }
    }

    .up-arrow:after {
        display: inline-block;
        content: " ";
        margin-left: 4px;
        margin-bottom: 4px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
    }

    .down-arrow:after {
        display: inline-block;
        content: " ";
        margin-left: 4px;
        margin-bottom: 4px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid black;
    }
`;