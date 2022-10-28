import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { formatCurrency } from "../Utilities/formatCurrency";

const StoreItems = ({ id, name, price, imgUrl}) => {

  

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />{" "}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={()=>increaseCartQuantity(id)}className="w-100">Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items=center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex align-items-center justify-content-evenly">
                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in Cart
                </div>
                <Button onClick={()=>{increaseCartQuantity(id)}}>+</Button>
              </div>
              <div className="text-center">
                <Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>
                  REMOVE
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItems;
