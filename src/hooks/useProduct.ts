import { useContext } from "react";
import { ProductContextType } from "../types/types";
import { ProductContext } from "../context/ProductsContext";

const useProduct = () => {
  return useContext(ProductContext) as ProductContextType;
};
export default useProduct;
