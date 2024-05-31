"use client";
import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.id !== product.id);
        }
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
