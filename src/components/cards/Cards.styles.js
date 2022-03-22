import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 140px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--card);
    border-radius: 6px;
    padding: 10px;
    margin-left:50px ;
    transition: 0.2 ease;

    :hover{
        background: var(--green2);
        border: solid 2px var(--#e1e1e1);
        cursor: pointer;
    }

`
