import { createContext, useState } from "react";

import { useLocalStorage } from "../local storage/useLocalStorage";

const CartContext = createContext({});

export function CartProvider({ children }) {

  const [open, setOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const cartQuantity = cartItems.reduce((quantity, item)=>
    item.quantity +quantity, 0
  )

  const getItemQuantity = (id) => {
    return cartItems.find((items) => items.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  };

  const openCart = () =>{
    setOpen(true)
  }
  const closeCart = () =>{
    setOpen(false)
  }
  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      {children}

    </CartContext.Provider>
  );
}

export default CartContext;
