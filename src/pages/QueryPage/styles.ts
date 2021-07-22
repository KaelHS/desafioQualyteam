import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .navigationButton {
        position: absolute;
        top: 1rem;
        left:1rem;
        border: none;
        background: transparent;
    }

    .querySection {
        display: flex;
        width: 100%;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin: 4rem ;
        
        div{
            margin: 2rem 0 1rem;
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

        form {
            margin-bottom: 2rem;

            input {
                margin-right: 0.25rem;

            }

            label{
                margin-right: 0.75rem;
            }




        }
    }
`;