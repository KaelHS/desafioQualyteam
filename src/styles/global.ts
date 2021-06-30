import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #fffafa;
        --section-background: #f9f9f9;

        --blue: #078;
        --blue-dark: #14687a;
        --blue-ligth: #2cb;

        --text-blue: #1468a3;

        --red-500: #E62E4D;
        --yellow-500: #eba417;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background)
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration:none;
        color: inherit;
    }

    .react-modal-overlay {
        background: rgb(0,0,0,0.4);

        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;

        display:flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-height: 1200px;
        max-width: 1000px;
        background: var(--section-background);
        padding: 3rem;
        position: relative;
        border-radius:0.25rem;
    } 

    .react-modal-close {
    position:absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter:brightness(0.8)
    }
    }
`;