import styled from 'styled-components';

export const TableContent = styled.div`
    margin: 0 auto;

    table {
        width: 100%;
    }

    th, td {
            padding: 0.75rem 0.5rem;
            border-bottom: 1px solid var(--ligh-blue);
        }
    
        th {
            background: var(--blue);
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Titillium Web', sans-serif;
            font-size: 1rem;
            text-align: left;
            color: var(--section-background);
            margin-bottom: 0.825rem;
        }

        td {
            font-size: 0.875rem;
            font-family: 'Titillium Web', sans-serif;
            font-weight: 600;
            background: var(--section-background);

            button {
                display: inline-block;
                width: 1rem;
                height: 2rem;
                border: none;
                margin: 0 0.4rem;

                
                img {
                width: 1.1rem;
                height: 1.3rem;

                }
            }



        }

        .descriptionData {
                max-width: 500px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis; //reticencias 
        }
`;