import React from 'react';

import { Link } from 'react-router-dom';

import { HeaderContainer } from './Header.styles';

const Header = () => {
    return (
        <HeaderContainer>
             <Link to="/pokemons/list">Pokemon list</Link>
        </HeaderContainer>
    );
}

export default Header;
