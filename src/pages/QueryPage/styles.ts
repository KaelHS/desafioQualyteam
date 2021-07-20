import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .querySection {
        display: flex;
        width: 100%;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin: 4rem ;
        
        div{
            margin: 2rem 0 2rem;
            display:flex;

            input {
                padding: 0.5rem;
            }
            
            button {
                margin-left: 0.25rem;
                border: none;
                border-radius: 0.25rem;
                padding: 0.25rem;

                transition: filter 0.2s;

                :hover{ 
                    filter: brightness(0.9);
                }

            }
        }
    }
`;