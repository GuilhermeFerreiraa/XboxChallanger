import React from "react";
import logoXbox from '../../assets/logo-xbox.svg'
import * as C from './styles'

export default function Header() {
  return (
    <header>
      <C.NavigationBar>
        <img src={logoXbox} className="logo__icon" alt="icon_xbox" />
        <C.TextButton>
          <span>Visão Geral</span>
          <span>Jogos</span>
          <span>Galeria</span>
          <span>Unbox</span>
        </C.TextButton>
        <C.Button>Ver Disponibilidade</C.Button>
      </C.NavigationBar>
    </header>
  )
}