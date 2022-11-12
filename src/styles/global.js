import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  font-size: 62.5%;
  font-family: 'Open Sans', sans-serif;
  
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    outline: none;
    font-size: 1.5rem;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }
 
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`;