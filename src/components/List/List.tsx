import { ProductType } from "../../types/types";

interface ListPropsType {
  productInfo: ProductType;
  cnt: number;
  onDelete: (id: number) => void;
}
export const List: React.FC<ListPropsType> = ({
  productInfo,
  cnt,
  onDelete,
}) => {
  return (
    <div className="bg-slate-200 shadow-lg p-[10px]  ">
      <div className="flex gap-2 text-sm mb-2">
        <p>{productInfo.name}</p>
        <p>{`${productInfo.currency} ${productInfo.price}`}</p>
      </div>
      <div className="flex rounded-md items-center gap-5  justify-between ">
        <div className="p-[5px]">
          <img src={productInfo.imageURL} className=" h-[100px] rounded-md" />
        </div>
        <div className="flex items-center gap-5 ">
          <button className="bg-white   text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow pointer-events-none">
            Qnt:{cnt}
          </button>
          <button
            onClick={() => onDelete(productInfo.id)}
            className="bg-rose-500 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
