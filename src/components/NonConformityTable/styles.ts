import styled from 'styled-components';

export const TableContent = styled.div`
    margin: 0 auto;

    table {
        width: 100%;
    }

    th, td {
            padding: 0.75rem 0.5rem;
            border-bottom: 1px solid var(--gray-100);
        }
    
        th {
            /* color: var(--gray-200); */
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Titillium Web', sans-serif;
            font-size: 1rem;
            text-align: left;
        }

        td {
            font-size: 0.875rem;
        }

        .descriptionData {
                max-width: 500px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis; //reticencias 
        }
`;