import React from 'react'
import { StyledBar, Styledbutton, StyledInput, StyledOrderContainer, StyledSelect } from './style'

const Order = () => {
  return (
    <StyledOrderContainer>
       <h3> Tipo de Transação </h3>
       <StyledSelect ></StyledSelect>
       <h3>Nome da Mercadoria</h3>
       <StyledInput type="input" />
       <h3>Valor</h3>
       <StyledInput type="string" placeholder='R$ 0,00' />
       <Styledbutton> Adicionar Transação </Styledbutton>
       <StyledBar/>
    </StyledOrderContainer>
  )
}

export default Order;