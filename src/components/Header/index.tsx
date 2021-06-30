import React, { useState } from "react";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { HeaderContainer, HeaderSection, Nav, InfoContainer, SubHeaderSection } from "./styles";

import { MdAddCircleOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

interface HeaderProps {
    onOpenNewNonConformityModal: () => void;
}

export function Header ( {onOpenNewNonConformityModal}: HeaderProps ) {

    const [ search, setSearch ] = useState('');

    return (
        <>
        <HeaderSection>
            <BrowserRouter>
            <HeaderContainer>
                <Nav>
                    {/* <img src="" alt="Qualyteam" /> */}
                    <ul>
                        <li><Link to="">Início</Link></li>
                        <li><Link to="">Consultas</Link></li>
                        <li><Link to="">Visão Geral</Link></li> 
                    </ul>
                </Nav>

                <InfoContainer>
                        <span>Empresa</span>
                        <div>
                            <strong>Olá, Kael</strong>
                            <span>Administrador</span>
                        </div>
                        <Link to="/">
                            <FiLogOut size="1.5rem" color="var(--red-500)"/>
                        </Link>
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