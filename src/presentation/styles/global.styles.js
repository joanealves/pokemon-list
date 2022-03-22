import  { createGlobalStyle } from 'styled-components'

import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --green:#33CC95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969CB3;
        --card: #d2d6e6;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5% ;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    button {
        cursor: pointer;
    }

    [disabled] {
        transition: all 0.2 ease;
        opacity: 0.6;
        cursor: not-allowed;        
    }    
`

const buildTextCss = props => {
    let css = `color: ${setTextColor(props)};`
  
    css += setMargins(props)
  
    return css
  }
  
  const setTextColor = options => {
    if (options.textTtitle) return ` var(--text-title)`    
    else return `var(--text-title)`
  }
  
  const setMargins = ({
    mb = null,
    mt = null,
    ml = null,
    mr = null,
    mUnit = 'px',
  }) => {
    const units = { px: 'px', percentage: '%' }
    const sizeUnit = units[mUnit]
    let css = ''
  
    if (mb) css += `margin-bottom: ${mb}${sizeUnit};`
    if (mt) css += `margin-top: ${mt}${sizeUnit};`
    if (ml) css += `margin-left: ${ml}${sizeUnit};`
    if (mr) css += `margin-right: ${mr}${sizeUnit};`
  
    return css
  }
  
  export const Text = styled.p`
    ${props => props.fontSize && `font-size: ${props.fontSize}`};
    ${props => props.fontBold && `font-weight: bold;`};
    ${props => buildTextCss(props)};
  `
  
  export const Button = styled.button`
    background: var(--blue-light);    
    color: var(--shape);
    border-radius: 4px;
    font-weight: bold;
    height: 32px;
    cursor: pointer;
    padding: 0 20px;
    transition: all 0.2 ease;
    :hover {
      background: var(--blue);
    }
  `
  
  export const FlexWrapper = styled.div`
   display: flex;
   ${props => props.gap && `gap: ${props.gap}`};
   ${props => props.wrap && `flex-wrap: wrap`};
   ${props => props && setMargins(props)};
  `
