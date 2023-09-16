import React from "react";
import { ProductType } from "../../types/types";

interface CardProps {
  itemInfo: ProductType;
  isAdded: boolean;
  cnt: number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
}
type EntryType = "Inc" | "Dec";
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
    <div className="max-w-[300px] w-full p-[10px] bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg lg:h-[200px] lg:w-[200px]   m-auto  object-cover "
        src={itemInfo.imageURL}
        alt=""
      />
      <div className="m-[10px]">
        <h5 className="mb-2 md:text-xl text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {itemInfo.name}
        </h5>
        <div className="mb-3  flex items-center justify-between  font-normal text-gray-700 dark:text-gray-400">
          <p className="md:text-xl text-sm text-left">{`${itemInfo.currency} ${itemInfo.price}`}</p>
          <div className="flex w-[120px] h-[50px]   border-2 border-white">
            {isAdded && (
              <div className=" flex  h-full items-center">
                <button
                  onClick={() => handleClick(itemInfo.id, "Dec")}
                  className="min-w-[40px]"
                >
                  -
                </button>
                <p className="min-w-[20px] text-center">{cnt}</p>
                <button
                  onClick={() => handleClick(itemInfo.id, "Inc")}
                  className="min-w-[40px]"
                >
                  +
                </button>
              </div>
            )}
            {!isAdded && (
              <button
                onClick={() => handleClick(itemInfo.id, "Inc")}
                className="bg-transparent w-full  hover:bg-blue-500 text-blue-700 font-sm hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
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
