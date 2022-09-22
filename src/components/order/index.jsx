import { React, useEffect, useState } from "react";
import {
  StyledBar,
  Styledbutton,
  StyledInput,
  StyledOrderContainer,
  StyledSelect,
} from "./style";

const Order = () => {
  const [transaction, setTransaction] = useState();
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();

  const handleOrder = () => {
    var orders = JSON.parse(localStorage.getItem("orders") || []);
    var order = {
      transaction: transaction,
      product: product,
      price: price,
    };
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  };

  return (
    <StyledOrderContainer onSubmit={handleOrder}>
      <label htmlFor="type">Tipo de Transação</label>
      <StyledSelect
        id="transaction"
        name="transaction"
        onChange={(e) => setTransaction(e.target.value)}
      >
        <option value="default">Selecione o tipo</option>
        <option value="Compra">Compra</option>
        <option value="Venda">Venda</option>
      </StyledSelect>

      <label htmlFor="text">Nome da Mercadoria</label>
      <StyledInput
        id="productName"
        name="productName"
        type="input"
        placeholder="Produto"
        onChange={(e) => setProduct(e.target.value)}
      />

      <label htmlFor="text">Valor</label>
      <StyledInput
        id="productPrice"
        name="productPrice"
        type="input"
        placeholder="R$ 0,00"
        onChange={(e) => setPrice(e.target.value)}
      />
      <Styledbutton> Adicionar Transação </Styledbutton>

      <StyledBar />
    </StyledOrderContainer>
  );
};

export default Order;
