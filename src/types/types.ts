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

export type FilterKeyType = "color" | "price" | "gender" | "type";

export interface ProductContextType {
  productsInfo: ProductType[];
  cartItems: Record<number, number>;
  addItems: (id: number) => void;
  removeItems: (id: number) => void;
  deleteFromCart: (id: number) => void;
  error: boolean;
}

export interface FilterType {
  color: string[];
  gender: string[];
  price: string[];
  type: string[];
}

export type EntryType = "Inc" | "Dec";
