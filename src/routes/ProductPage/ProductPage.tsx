import { useMemo, useState } from "react";
import { Filters, SearchBar } from "../../components";
import Card from "../../components/Card/Card";
import useProduct from "../../hooks/useProduct";
import { FilterType, KeyType, ProductType } from "../../types/types";
import {
  getListOnSearch,
  rangeFilter,
  splitValues,
  stringFilter,
} from "../../utils/ProductFilter";
import { FilterIcon } from "../../assests";

const defaultFiltersValue: FilterType = {
  color: [],
  type: [],
  gender: [],
  price: [],
};

export const ProductPage = () => {
  const { productsInfo, cartItems, addToCart, deleteFromCart } = useProduct();
  const [searchkeyword, setSearchKeyword] = useState<string[]>([]);
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

    console.log("filterUpdated", filterStateCopy);

    setSelectedFilters(filterStateCopy);
  }

  function clearFilter(filterType: KeyType) {
    const filterStateCopy = { ...filters };
    filterStateCopy[filterType] = [];
    setSelectedFilters(filterStateCopy);
  }
  const isFiltersSelected = Object.keys(filters).some(
    (key: string) => filters[key as KeyType].length !== 0
  );

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
    const list1 = getUpdatedProductList(filters, productsInfo);
    if (searchkeyword.length > 0) {
      const list2 = isFiltersSelected ? list1 : productsInfo;
      return getListOnSearch(list2, searchkeyword);
    }
    return list1;
  }, [filters, productsInfo, searchkeyword]);

  const productsList =
    isFiltersSelected || searchkeyword.length !== 0
      ? filteredProductsList
      : productsInfo;

  const [filterOpen, setfilterOpen] = useState(false);

  function handleChange(text: string) {
    console.log("text", text);
    const splitText = text.split(" ");
    setSearchKeyword(splitText);
  }

  return (
    <div className="p-2 flex gap-5">
      <div
        className={
          "absolute transition-all md:static top-0 bottom-0 bg-white z-50 md:block min-w-[200px] border p-4 rounded-md shadow-md md:h-[90vh]" +
          " " +
          (filterOpen ? " left-0" : "-left-full")
        }
      >
        <Filters
          onClose={() => setfilterOpen(false)}
          onFilterClick={handleFilterClick}
          // onClear=(())
          appliedFilters={filters}
          onRemove={(key: string) => {
            setSelectedFilters((prevValue) => ({
              ...prevValue,
              [key]: [],
            }));
          }}
          onClear={() =>
            setSelectedFilters({
              color: [],
              price: [],
              type: [],
              gender: [],
            })
          }
        />
      </div>

      <div className="grow">
        <div className="mb-4">
          <SearchBar onChange={handleChange} />
          <FilterIcon
            className="mt-2 md:hidden"
            onClick={() => setfilterOpen(true)}
          />
        </div>
        <div className="h-[calc(100vh-120px)] overflow-scroll scroll-smooth">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[10px] 
        "
          >
            {productsList?.map((item) => {
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
      </div>
    </div>
  );
};
