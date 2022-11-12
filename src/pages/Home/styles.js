import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
 
  /* mexi aqui */
  grid-template-rows: 6rem 9rem auto 5rem;
  
  
  
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content"  ;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center ;
  align-items: center;

  border-bottom-width: 1px ;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  > h1 {
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.ORANGE}
  }
`;

export const Menu = styled.div`
  grid-area: menu;

  
  padding-top: 3rem ;
  text-align:center;

  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  >li{
    margin-bottom: 1rem;
  }
`;

export const Search = styled.ul`
  grid-area: search;
  padding: 5rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 2rem 6.4rem;
  overflow-y: auto;

`;

export const NewNote= styled.button`
  grid-area: newnote;

  background-color: ${({theme}) => theme.COLORS.ORANGE};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  >svg {
    margin-right: 8px;
  }

`;
