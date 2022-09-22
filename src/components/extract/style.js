import styled from "styled-components";

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1{
    font-weight: 500;
  }
  h2 {
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30rem;
  }
`;

export const StyledHeader = styled.div`
  margin-top: 1rem;
  h2 {
    font-weight: 500;
  }
`;

export const StyledProductDetails = styled.section`
  display: flex;
  flex-direction: row;
  gap: .5rem;
`;

export const StyledProduct = styled.div`

`;

export const StyledBar = styled.div`
  width: 50%;
  height: 0.1rem;
  background-color: black;
  justify-content: center;
`;
