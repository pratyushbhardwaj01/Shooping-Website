import { useMemo, useState } from "react";
import { Filters } from "../../components";
import Card from "../../components/Card/Card";
import useProduct from "../../hooks/useProduct";
import { FilterType, KeyType, ProductType } from "../../types/types";
import {
  rangeFilter,
  splitValues,
  stringFilter,
} from "../../utils/ProductFilter";

const defaultFiltersValue: FilterType = {
  color: [],
  type: [],
  gender: [],
  price: [],
};

export const ProductPage = () => {
  const { productsInfo, cartItems, addToCart, deleteFromCart } = useProduct();
  const [filters, setSelectedFilters] =
    useState<FilterType>(defaultFiltersValue);

  function updateFilter(filterArray: string[], value: string) {
    const isFound = filterArray.find((item) => item === value);
    if (isFound) {
      return filterArray.filter((item) => item !== value);
    }
    return [...filterArray, value];
  }

  function handleFilterClick(filterType: string, value: string) {
    const filterStateCopy = { ...filters };
    const { color, type, gender, price } = filterStateCopy;
    if (filterType === "color") {
      filterStateCopy.color = updateFilter(color, value);
    } else if (filterType === "type") {
      filterStateCopy.type = updateFilter(type, value);
    } else if (filterType === "gender") {
      filterStateCopy.gender = updateFilter(gender, value);
    } else {
      filterStateCopy.price = updateFilter(price, value);
    }
    setSelectedFilters(filterStateCopy);
  }

  function getUpdatedProductList(
    filters: FilterType,
    productsInfo: ProductType[]
  ) {
    let productsList: ProductType[] = [];
    if (filters.color.length !== 0) {
      productsList = stringFilter(productsInfo, filters.color, "color");
    }
    if (filters.gender.length !== 0) {
      productsList = productsList.length === 0 ? productsInfo : productsList;
      productsList = stringFilter(productsList, filters.gender, "gender");
    }
    if (filters.type.length !== 0) {
      productsList = productsList.length === 0 ? productsInfo : productsList;

      productsList = stringFilter(productsList, filters.type, "type");
    }
    if (filters.price.length !== 0) {
      productsList = productsList.length === 0 ? productsInfo : productsList;
      const splitRange = splitValues(filters.price);
      productsList = rangeFilter(productsList, splitRange);
    }
    return productsList;
  }

  const filteredProductsList = useMemo(() => {
    return getUpdatedProductList(filters, productsInfo);
  }, [filters, productsInfo]);

  const isFiltersSelected = Object.keys(filters).some(
    (key: string) => filters[key as KeyType].length !== 0
  );

  const productsList = isFiltersSelected ? filteredProductsList : productsInfo;

  return (
    <div className="p-[15px] flex md:gap-10 gap-3  ">
      <div className="md:flex-[1_1_10%]  bg-slate-300 md:p-[15px] ">
        <Filters onFilterClick={handleFilterClick} />
      </div>

      <div
        className=" md:flex-[1_1_90%]  h-[calc(100vh-120px)] overflow-scroll scroll-smooth grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[10px] 
      "
      >
        {productsList.map((item) => {
          return (
            <Card
              itemInfo={item}
              isAdded={!!cartItems[item.id]}
              cnt={cartItems[item.id]}
              addItem={(id: number) => {
                addToCart(id);
              }}
              removeItem={(id: number) => {
                deleteFromCart(id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
