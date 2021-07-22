import React from "react";
import { BrowserRouter , Link, useHistory } from 'react-router-dom';
import { HeaderContainer, HeaderSection, Nav, InfoContainer } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { useFakeAuth } from "../../hooks/useFakeAuth";

interface HeaderProps {
    onOpenNewNonConformityModal: () => void;
}

export function Header ( ) {

    const history = useHistory();

    const { removeUser } = useFakeAuth();

    function handleLogout(){

        removeUser();
        
        history.push('/');
    }

    return (
        <>
        <HeaderSection>
            <BrowserRouter>
            <HeaderContainer>
                <Nav>
                    <ul>
                        <li><Link to="">Início</Link></li>
                        <li><Link to="/query">Consultas</Link></li>
                    </ul>
                </Nav>

                <InfoContainer>
                        <span>FakeCompany</span>
                        <div>
                            <strong>Olá, {localStorage.getItem('name')}</strong>
                            <span>{localStorage.getItem('position')}</span>
                        </div>
                        <button
                            onClick={handleLogout}>
                            <FiLogOut size="1.5rem" color="var(--red-500)"/>
                        </button>

                </InfoContainer>
            </HeaderContainer>
            </BrowserRouter>
        </HeaderSection>
        </>
    );
}