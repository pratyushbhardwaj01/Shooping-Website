export interface ProductType {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
}

export type KeyType = "color" | "price" | "gender" | "type";

export interface ProductContextType {
  productsInfo: ProductType[];
  cartItems: Record<number, number>;
  addToCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
}

export interface FilterType {
  color: string[];
  gender: string[];
  price: string[];
  type: string[];
}

export type EntryType = "Inc" | "Dec";
