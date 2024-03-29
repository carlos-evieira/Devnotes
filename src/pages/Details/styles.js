import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 8.5rem auto;
  grid-template-areas:
   "header"
   "content";

   > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 0;
   };
`

export const Links = styled.ul`
  list-style: none;

  >li{
    margin-top: 1.2rem;

   a {
    color: ${({theme})=>theme.COLORS.WHITE}
   }
  
  }
`

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child{
    align-self: end;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight:500;
    padding-top: 4rem;
  }

  > p {
    font-size: 1.6rem;
    margin-top: 1.6rem;
    text-align: justify;
  }
`
