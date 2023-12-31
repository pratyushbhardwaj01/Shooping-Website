import { useMemo, useState } from "react";
import { Filters, SearchBar } from "../../components";
import Card from "../../components/Card/Card";
import useProduct from "../../hooks/useProduct";
import { FilterKeyType, FilterType, ProductType } from "../../types/types";
import {
  getListOnSearch,
  rangeFilter,
  splitValues,
  stringFilter,
  updateFilter,
} from "../../utils/ProductFilter";
import { FilterIcon } from "../../assests";

const defaultFiltersValue: FilterType = {
  color: [],
  type: [],
  gender: [],
  price: [],
};

export const ProductPage = () => {
  const { productsInfo, cartItems, addItems, removeItems, error } =
    useProduct();
  const [filterOpen, setfilterOpen] = useState(false);
  const [searchkeyword, setSearchKeyword] = useState<string[]>([]);
  const [filters, setSelectedFilters] =
    useState<FilterType>(defaultFiltersValue);

  function handleFilterClick(filterType: string, value: string) {
    const filterStateCopy = { ...filters };
    filterStateCopy[filterType as FilterKeyType] = updateFilter(
      filterStateCopy[filterType as FilterKeyType],
      value
    );
    setSelectedFilters(filterStateCopy);
  }

  const isFiltersSelected = Object.keys(filters).some(
    (key) => filters[key as FilterKeyType].length !== 0
  );

  function getUpdatedProductList(
    filters: FilterType,
    productsInfo: ProductType[]
  ) {
    let productsList: ProductType[] = productsInfo;
    Object.keys(filters).forEach((key: string) => {
      if (key === "price") {
        return productsList;
      }
      productsList = stringFilter(
        productsList,
        filters[key as FilterKeyType],
        key as FilterKeyType
      );
    });

    const splitRange = splitValues(filters.price);
    productsList = rangeFilter(productsList, splitRange);

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

  function handleChange(text: string) {
    const splitText = text.split(" ");
    setSearchKeyword(splitText);
  }

  return (
    <div className="p-2 flex gap-5 m-2">
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

      <div className="grow relative">
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
                  key={item.id}
                  isAdded={!!cartItems[item.id]}
                  cnt={cartItems[item.id]}
                  addItem={(id: number) => {
                    addItems(id);
                  }}
                  removeItem={(id: number) => {
                    removeItems(id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <p
        className={`text-white bg-red-500 text-1xl px-10 py-2  w-fit rounded-md transition-all ease-in-out fixed left-full whitespace-nowrap   ${
          error ? "-translate-x-[300px]" : "translate-x-0"
        }`}
      >
        Can not add more item
      </p>
    </div>
  );
};
