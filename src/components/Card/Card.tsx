import React from "react";
import { EntryType, ProductType } from "../../types/types";

interface CardProps {
  itemInfo: ProductType;
  isAdded: boolean;
  cnt: number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  itemInfo,
  isAdded,
  cnt,
  addItem,
  removeItem,
}) => {
  function handleClick(id: number, entryType: EntryType) {
    if (entryType === "Inc") {
      addItem(id);
    } else {
      removeItem(id);
    }
  }
  return (
    <div className="p-[10px] bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="p-2 md:p-4 flex justify-center items-center">
        <img
          className="rounded-t-lg h-[100px] md:h-[200px] object-contain"
          src={itemInfo.imageURL}
          alt=""
        />
      </div>
      <div className="m-[10px]">
        <h5 className="mb-2 md:text-xl text-sm font-bold tracking-tight text-gray-900">
          {itemInfo.name}
        </h5>
        <div className="mb-3 font-normal text-gray-700 ">
          <p className="md:text-xl text-sm text-left mb-2">{`${itemInfo.currency} ${itemInfo.price}`}</p>
          <div className="flex h-[40px] w-fit border-2 border-black rounded-md">
            {isAdded && (
              <div className="flex items-center">
                <button
                  onClick={() => handleClick(itemInfo.id, "Dec")}
                  className="min-w-[40px] font-bold border-r"
                >
                  -
                </button>
                <p className="min-w-[40px] text-center px-2">{cnt}</p>
                <button
                  onClick={() => handleClick(itemInfo.id, "Inc")}
                  className="min-w-[40px] font-bold border-l"
                >
                  +
                </button>
              </div>
            )}
            {!isAdded && (
              <button
                onClick={() => handleClick(itemInfo.id, "Inc")}
                className="border-none hover:bg-blue-500 text-blue-700 font-sm py-1 px-4 border border-blue-500 hover:border-transparent rounded-md"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
