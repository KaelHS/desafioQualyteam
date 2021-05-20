import React from "react";
import { HeaderContainer, HeaderSection, Nav, InfoContainer } from "./styles";

export function Header () {
    return (
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
    );
}