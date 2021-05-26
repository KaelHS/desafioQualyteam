import React, { useState } from "react";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { HeaderContainer, HeaderSection, Nav, InfoContainer, SubHeaderSection } from "./styles";

import { MdAddCircleOutline } from "react-icons/md";

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
                        <ul>
                            <li>
                                <strong>Olá, Kael</strong>
                                <span>Administrador</span>
                                <ul className="sub-menu-login">
                                    <li><Link to="">Configurações</Link></li>
                                    <li><Link to="">Sair</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
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
                <MdAddCircleOutline />
                Nova Ocorrência</button>
                <input 
                    type="text"
                    placeholder="Pesquisar" />
                <button type="button">Pesquisar</button>

        </SubHeaderSection>

        </>
    );
}