import React, { useState } from "react";
import { BrowserRouter , Link, useHistory } from 'react-router-dom';
import { HeaderContainer, HeaderSection, Nav, InfoContainer, SubHeaderSection } from "./styles";

import { MdAddCircleOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useFakeAuth } from "../../hooks/useFakeAuth";

interface HeaderProps {
    onOpenNewNonConformityModal: () => void;
}

export function Header ( {onOpenNewNonConformityModal}: HeaderProps ) {

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
                        <li><Link to="">Consultas</Link></li>
                        <li><Link to="">Visão Geral</Link></li> 
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
        <SubHeaderSection>
                <h1> <span>Não </span>Conformidades </h1>
                <button 
                    type="button"
                    onClick={onOpenNewNonConformityModal}
                >
                <MdAddCircleOutline size="2rem" color="#fff"/>
                Nova Ocorrência</button>

        </SubHeaderSection>

        </>
    );
}