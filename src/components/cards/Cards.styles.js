import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--card);
    border-radius: 6px;
    padding: 10px;
    transition: 0.2 ease;

    :hover{
        background: var(--text-body);
        border: solid 2px var(--card);
        cursor: pointer;
    }

`