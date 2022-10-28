import React, { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import CartItem from "./CartItem";
import storeItems from "../data/data.json";
import { formatCurrency } from "../Utilities/formatCurrency";

export const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Container className='p-5'>
      <Stack gap={3} >
        {cartItems.map((item) => {
          return <Container className='border'>
            <CartItem key={item.id} {...item} />
          </Container>;
        })}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Stack>
    </Container>
  );
};
