import styled from 'styled-components';

export const Container = styled.div`

    margin: 5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;


    div {
        display: flex;
        justify-content:center;
        align-items: center;
        margin-bottom: 40px;
    }

    form {
        padding: 20px;
        width: 400px;

        input {
            width: 100%;
            padding: 15px;
            margin: 0.5rem 0;

            &[type="text"] {

                border: 2px solid var(--gray-300);
                border-radius: 0.25rem;
                outline-color: var(--blue);
                margin-bottom: 1rem;
                
            }

            &[type="submit"] {
                
                background: var(--blue);
                border: 0;
                border-radius: 0.25rem;
                cursor: pointer;
                font-weight: bold;
                color: #ffffff;
                transition: filter 0.2s;

                :hover {
                    filter: brightness(0.8);
                }
            }
        }
                
    }
`;

