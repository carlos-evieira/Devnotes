import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 6rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 6.4rem;

`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  

  > img{
    width: 4rem ;
    height: 4rem ;
    border-radius:50%;
  }

  > div{
    display: flex;
    flex-direction: column;
    margin-left:  1.5rem;
    line-height: 1.8rem;

    span {
      font-size: 1.3rem;
      color: ${({theme}) => theme.COLORS.GRAY_100}
    }

    strong{
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE}
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    transition: filter 0.2s;
  }

  > svg:hover  {
    filter: brightness(0.7);
  }
`
