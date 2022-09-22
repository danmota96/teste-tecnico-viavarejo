import React from "react";
import {StyledProductDetails, StyledHeader, StyledContainer, StyledProduct, StyledBar } from "./style";

const Extract = () => {
  return (
    <StyledContainer>
      <h1>Extrato de Transações</h1>
      <StyledHeader>
        <h2>Mercadoria</h2>
        <h2>Valor</h2>
      </StyledHeader>
      <StyledBar />

      <StyledProduct>
        <StyledProductDetails>
          <h2>+</h2>
          <h2>Lorem ipsum </h2>
        </StyledProductDetails>
        <h2>R$99,99</h2>
      </StyledProduct>

      <StyledBar />

      <StyledBar />

      <div>
        <h1>Total</h1>
        <section>
          <h1>R$99,99</h1>
          <h2>[LUCRO]</h2>
        </section>
      </div>
    </StyledContainer>
  );
};

export default Extract;
