import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #E0E0E0;
  display: flex;
  justify-content: space-around;
  padding-right: 3vw;
  align-items: center;
  box-sizing: border-box;
  font-size: 3rem;
  
  img {
    width: 2rem;
  }

  @media (max-width: 1900px) {
    font-size: 1.5rem;
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

