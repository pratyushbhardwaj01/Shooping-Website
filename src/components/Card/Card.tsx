import React from "react";
import { ItemInfoType } from "../Types/types";

interface CardProps {
  itemInfo: ItemInfoType;
}

const Card: React.FC<CardProps> = ({ itemInfo }) => {
  return (
    <div className="max-w-sm p-[10px] bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg   m-auto  object-cover"
        src={itemInfo.imageURL}
        alt=""
      />
      <div className="m-[10px]">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {itemInfo.name}
        </h5>

        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <p className="text-xl text-left">{`${itemInfo.currency} ${itemInfo.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
