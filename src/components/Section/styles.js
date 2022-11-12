import styled from "styled-components";

export const Container = styled.section`
  margin: 2rem 0 1rem;

  >h2{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: .3rem;
    margin-bottom: .5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.7rem;
    font-weight: 500;
    font-style: none;
  }

`

