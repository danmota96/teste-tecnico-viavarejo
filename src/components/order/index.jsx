import { React, useEffect, useState } from "react";

import { StyledBar } from "../constants/globalStyle";
import {
  Styledbutton,
  StyledInput,
  StyledOrderContainer,
  StyledSelect,
  StyledProduct,
  StyledHeader,
  StyledTotal,
} from "./style";

const getLocalItems = () => {
  let order = localStorage.getItem("orders");
  console.log(order);

  if (order) {
    return JSON.parse(localStorage.getItem("orders"));
  } else {
    return [];
  }
};

const Order = ({orders, order}) => {
  const [transaction, setTransaction] = useState();
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [items, setItems] = useState(getLocalItems());

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

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(items));
  }, [items]);

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

      <h1>Extrato de transações</h1>
      <StyledHeader>
        <h2>Mercadoria</h2>
        <h2>Valor</h2>
      </StyledHeader>
      <StyledBar />
      {orders.map((order) => {
        return (
          <StyledProduct>
        <div>
          <h2>{order.transaction}</h2>
          <h2>{order.product}</h2>
        </div>
        <h2>{order.price}</h2>
      </StyledProduct>
        )
      })}
      
      <StyledBar />
      <StyledBar />
      <StyledTotal>
        <h2>Total</h2>
        <div>
          <h2>R$ 9999,99</h2>
          <h3>[LUCRO]</h3>
        </div>
      </StyledTotal>
      <div>
          <h2>+</h2>
          <h2>Product name</h2>
        </div>
        <h2>R$ 9999,99</h2>
    </StyledOrderContainer>
  );
};

export default Order;
