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
`;

export const StyledInput = styled.input`
  width: 30rem;
  height: 1.5rem;
`;

export const StyledSelect = styled.select`
  width: 30rem;
  height: 1.5rem;
`;

export const Styledbutton = styled.button`
  margin-top: 1rem;
  background-color: #351e1e;
  border-radius: 5px;
  color: #ffff;
  width: 30rem;
  height: 2em;
  cursor: pointer;
`;

export const StyledBar = styled.div`
  margin-top: 1rem;
  width: 50%;
  height: 0.1rem;
  background-color: black;
`;
