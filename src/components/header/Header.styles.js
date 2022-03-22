import styled from "styled-components";

import { Link } from 'react-router-dom';


export const HeaderContainer = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: var(--red);
    padding: 20px;
`
export const LinkTitle = styled(Link)`
    color: var(--h1);
    cursor: pointer;
    text-decoration: none;

    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: space-between;
    
    img {
        width: 130px;
    }
`