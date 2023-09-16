/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { ProductContextType, ProductType } from "../types/types";
import productsData from "../data/data";

export const ProductContext = createContext<ProductContextType | null>(null);

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [productsInfo, setProductsInfo] = useState<ProductType[]>([]);
  const [cartItems, setCardItems] = useState<Record<number, number>>({});

  function addToCart(id: number) {
    const copyState = { ...cartItems };
    copyState[id] =
      copyState[id] === undefined ? 1 : (copyState[id] = copyState[id] + 1);
    setCardItems(copyState);
  }

  function deleteFromCart(id: number) {
    const copyState = { ...cartItems };
    if (copyState[id] === 0) {
      delete copyState[id];
    } else {
      copyState[id] = copyState[id] - 1;
    }
    setCardItems(copyState);
  }

  useEffect(() => {
    setProductsInfo(productsData);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsInfo,
        addToCart,
        deleteFromCart,
        cartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
