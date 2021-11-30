import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  @media (max-width: 800px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`