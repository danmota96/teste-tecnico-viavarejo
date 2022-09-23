import React from 'react'
import { StyledBar } from "../constants/globalStyle"
import {
  StyledHeader,
  StyledContainer,
  StyledProduct,
  StyledTotal,
} from "./style";

const Extract = () => {
  return (
    <StyledContainer>
      <h1>Extrato de transações</h1>
      <StyledHeader>
      <h2>Mercadoria</h2>
      <h2>Valor</h2>
     </StyledHeader>
     <StyledBar />
     <StyledProduct>
      <div>
      <h1>+</h1>
      <h2>Product name</h2>
      </div>
      <h2>R$ 9999,99</h2>
     </StyledProduct>
     <StyledBar />
     <StyledBar />
     <StyledTotal>
      <h2>Total</h2>
      <div>
      <h2>R$ 9999,99</h2>
      <h3>[LUCRO]</h3>
      </div>
     
     </StyledTotal>
     </StyledContainer>
  )
}

export default Extract