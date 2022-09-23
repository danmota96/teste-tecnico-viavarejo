import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
 h1 { 
    font-weight: 500;
    font-size: 2rem;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  
`;

export const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  margin-top: 1rem;
`;

export const StyledProduct = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  h2 { 
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;
  }
`;



export const StyledTotal = styled.div`
  align-items: baseline;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
`;