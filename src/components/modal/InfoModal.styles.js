import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
export const StatusContainer = styled.div`   
    margin: 0 auto;
    width: 90% ;
    margin-top: 10px ;
    
    @media (min-width: 400px ) {
        width: 40%;

    }
`
export const Status = styled.div`   
    display: flex;
    justify-content: space-between;
    gap: 16px;
`
export const Title = styled.h3` 
    background: var(--text-title);
    height: 30px ;
    padding: 5px ;
`
export const ButtonContainer = styled.div`
    text-align: end;
`