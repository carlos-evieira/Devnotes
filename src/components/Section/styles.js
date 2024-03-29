import styled from "styled-components";

export const Container = styled.section`
  margin: 2.8rem 0 0;

  >h2{
    border-bottom: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};
    padding-bottom: 1rem;
    margin-bottom: 2rem;

    color:${({theme})=> theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
  }
`