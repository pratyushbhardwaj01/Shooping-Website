import { FilterType } from "../../types/types";

export const FiltersData: { key: keyof FilterType; value: string[] }[] = [
  { key: "color", value: ["red", "blue", "green"] },
  { key: "gender", value: ["men", "women"] },
  { key: "price", value: ["0-250", "251-450", "450"] },
  { key: "type", value: ["polo", "hoodie", "basic"] },
];
