import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({theme})=>theme.COLORS.GRAY_100};
  border: none; 
  font-size:1.6rem;
  color: ${({theme, isActive})=> isActive ? theme. COLORS.ORANGE : theme. COLORS.GRAY_100}


`