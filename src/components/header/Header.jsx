import React from 'react';

import { HeaderContainer, LinkTitle } from './Header.styles';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <HeaderContainer>
            <LinkTitle to="/pokemons/list">
                Pokemon list
                <img src={logo} alt='Logo desenho Pokemon' />
            </LinkTitle>
        </HeaderContainer>
    );
}

export default Header;
