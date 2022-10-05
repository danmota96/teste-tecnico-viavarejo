import styled from "styled-components";

export const StyledOrderContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  label { 
    font-weight: 400;
    font-size: 20px;
    margin: .8rem 0 .5rem 0;
  }
  h1 { 
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.8rem;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  width: 30rem;
  height: 1.5rem;
  @media (max-width: 1900px) {
    width: 89%;
  }
  
  @media (min-width: 1024px) {
    width: 89%;
  }
`;

export const StyledSelect = styled.select`
  width: 30rem;
  height: 1.5rem;
  @media (max-width: 1900px) {
    width: 89%;
  }
  
  @media (min-width: 1024px) {
    width: 89%;
  }
`;

export const Styledbutton = styled.button`
  margin-top: 1rem;
  background-color: #351e1e;
  border-radius: 5px;
  color: #ffff;
  width: 30rem;
  height: 2em;
  cursor: pointer;

  @media (max-width: 1900px) {
    width: 89%;
  }
  
  @media (min-width: 1024px) {
    width: 89%;
  }
`;

export const StyledHeader = styled.div`
  margin-top: 1rem;
 width: 100%;
  display: flex;
  gap: 10rem;
 flex-direction: row;
 justify-content: space-evenly;
 @media (max-width: 1900px) {
    width: 89%;
  }
  
  @media (min-width: 1024px) {
    width: 89%;
  }
`;

export const StyledProduct = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-evenly;
  gap: 8rem;
  h2 { 
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: .7rem;
    align-items: baseline;
  }
  @media (max-width: 1900px) {
    width: 89%;
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    width: 89%;
    font-size: 15px;
  }
`;

export const StyledTotal = styled.div`
  align-items: baseline;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 1900px) {
    width: 89%;
    gap: 9rem;
    font-size: 15px;
  }
  
  @media (min-width: 1024px) {
    width: 89%;
    font-size: 15px;
  }
`;
