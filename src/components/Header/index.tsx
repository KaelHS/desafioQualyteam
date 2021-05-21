import React, { useState } from "react";
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
            <HeaderContainer>
                <Nav>
                    {/* <img src="" alt="Qualyteam" /> */}
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Consultas</a></li>
                        <li><a href="#">Visão Geral</a></li>
                    </ul>
                </Nav>

                <InfoContainer>
                    <span>Empresa</span>
                    <div>
                        <strong>Olá, Kael</strong>
                        <span>Administrador</span>
                    </div>
                </InfoContainer>
            </HeaderContainer>
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