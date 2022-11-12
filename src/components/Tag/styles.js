import styled from "styled-components";

export const Container = styled.span`
  font-size: 1rem;
  padding: .2rem .5rem;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  `