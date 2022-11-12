 import styled from "styled-components";

 export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    height: 3.5rem;
    border: 0;
    border-radius: 0.3rem;
    padding: 0 1rem;
    margin-top: .8rem;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
 `