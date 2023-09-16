import { ProductType } from "../types/types";

function rangeFilter(
  data: ProductType[],
  filterValues: { min: number; max: number }[]
) {
  return data.filter((item) => {
    return filterValues.some(
      (filterValue) =>
        item.price >= filterValue.min && item.price <= filterValue.max
    );
  });
}

function splitValues(data: string[]) {
  return data.map((item) => {
    const arr = item.split("-");
    if (arr.length == 2) {
      return {
        min: Number(arr[0]),
        max: Number(arr[1]),
      };
    }
    return {
      min: Number(arr[0]),
      max: Number.MAX_VALUE,
    };
  });
}

function stringFilter(
  data: ProductType[],
  filterValues: string[],
  key: KeyType
) {
  return data.filter((item) => {
    return filterValues.some((filterValue) => {
      return filterValue.toLowerCase() === item[key].toString().toLowerCase();
    });
  });
}

export { rangeFilter, splitValues, stringFilter };
