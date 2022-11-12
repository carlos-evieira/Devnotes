import styled from "styled-components";
import { Tag} from '../Tag'

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 0.3rem;

  padding: 1.6rem;
  margin-bottom: 1rem;

  >h1{
    flex: 1;
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  >footer {
    width:100%;
    display: flex;
    margin-top: .5rem;
  }
`