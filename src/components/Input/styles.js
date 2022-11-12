import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  margin-bottom: 0.5rem;
  border-radius: 0.3rem;

> input {
  width:100%;
  height: 4rem;

  
  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  border: none;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
}

>svg {
  margin: 0 1.5rem ;
}
`