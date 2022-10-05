import React from 'react'
import icon from "../../assets/img/icon-via.svg"
import menu from "../../assets/img/hamb-icon.svg"
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
       <img src={icon} alt="icon-header" />
        Controle Financeiro
        <img src={menu} alt="icon-hamburger-menu" />
    </StyledHeader>
  )
}

export default Header;