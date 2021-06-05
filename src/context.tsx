import React, { ReactNode } from "react";
import { Product, CartProduct } from "./components/ProductCard";
export const defaultState = {
  cart: [],
  updateCart: () => {},
};

interface State {
  cart: CartProduct[];
  updateCart: (product: CartProduct) => void;
}

export const CartContext = React.createContext<State>(defaultState);

const ContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = React.useState<CartProduct[]>(defaultState.cart);

  const updateCart = (product: CartProduct) =>
    setCart((products: CartProduct[]) => [...products, product]);

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
