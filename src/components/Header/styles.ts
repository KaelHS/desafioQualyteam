import styled from 'styled-components';

export const HeaderSection = styled.header`

    background: var(--blue-dark);
    padding: 2rem 6rem;


    border-bottom: 1px solid var(--section-background);

`;

export const HeaderContainer = styled.div`

    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Nav = styled.div`
    float: left;


    li {
        display: inline;
        list-style: none;
        padding: 0.5rem 1rem;


        a {
            position: relative;
            text-decoration: none;
            font-family: 'Titillium Web', sans-serif;
            font-weight: 400;
            font-size: 1.25rem;
            color: var(--section-background);
            padding: 0.2rem 0.2rem;

            &:before {
            content: "";
            position: absolute;
            visibility: hidden;
            width: 100%;
            height: 0.1rem;
            bottom: 0;
            left: 0;
            background: var(--blue-ligth);
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
            }

            &:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            }
        }
    }
`;

export const InfoContainer = styled.div`

    display: flex;
    align-items: center;

    span {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--section-background);
    }

    div {
        display: block;
        align-items: center;
        margin-left: 4rem;

        strong {
        display: block;
        margin: 0 auto;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 600;
        font-size: 1.25rem;
        color: var(--section-background);
        }

        span {
            filter: brightness(0.8)
        }
    }


`;