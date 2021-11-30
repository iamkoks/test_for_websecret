import styled from "styled-components";

export const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100vw - 240px);
  padding: 0px 20px;
  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: column;
  }
`