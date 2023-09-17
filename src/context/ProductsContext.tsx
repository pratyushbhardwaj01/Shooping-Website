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
  const [error, setError] = useState(false);

  function addItems(id: number) {
    const copyState = { ...cartItems };
    setError(false);
    const productInfo = productsInfo.find((item) => item.id === id);
    if (productInfo && copyState[id] + 1 > productInfo?.quantity) {
      setError(true);
      return;
    }

    if (copyState[id] === undefined) {
      copyState[id] = 1;
    } else {
      copyState[id] = copyState[id] + 1;
    }

    setCardItems(copyState);
  }

  function removeItems(id: number) {
    setError(false);
    const copyState = { ...cartItems };
    if (copyState[id] === 0) {
      delete copyState[id];
    } else {
      copyState[id] = copyState[id] - 1;
    }
    setCardItems(copyState);
  }

  function deleteFromCart(id: number) {
    const copyState = { ...cartItems };
    delete copyState[id];
    setCardItems(copyState);
  }

  useEffect(() => {
    setProductsInfo(productsData);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsInfo,
        addItems,
        removeItems,
        deleteFromCart,
        cartItems,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
