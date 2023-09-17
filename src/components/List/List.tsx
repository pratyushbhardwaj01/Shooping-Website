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
    <div className="border rounded-md p-3">
      <div className="flex gap-2 text-sm mb-2 ">
        <p className="text-slate-700">{productInfo.name}</p>
        <p className="text-slate-700">{`${productInfo.currency} ${productInfo.price}`}</p>
      </div>
      <div className="flex rounded-md items-center gap-5  justify-between ">
        <div className="p-[5px]">
          <img src={productInfo.imageURL} className=" h-[100px] rounded-md" />
        </div>
        <div className="flex items-center gap-5 ">
          <p className="bg-white text-slate-700  font-semibold py-2 px-4 border border-gray-400 rounded shadow pointer-events-none">
            Qnt:{cnt}
          </p>
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
