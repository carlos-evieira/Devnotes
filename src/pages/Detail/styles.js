import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;  
  display: grid;
  grid-template-rows: 5.5rem auto ;
  grid-template-areas:
    "header"
    "content";
  
    >main {
      grid-area: content;
      overflow-y: auto;
      padding: 3rem 0;
    }
  
`

export const Links = styled.ul`
list-style: none;

  >li {

    a {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
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

  >h1 {
    font-size: 2.5rem;
    font-weight: 500;
  }
 
  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    margin-top: .9rem;
  };
  
`
