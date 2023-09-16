import { ProductType } from "../../types/types";

interface ListPropsType {
  productInfo: ProductType;
  cnt: number;
}
export const List: React.FC<ListPropsType> = ({ productInfo, cnt }) => {
  return (
    <div className="flex items-center gap-5 bg-slate-200 p-[10px] justify-between ">
      <div>
        <img
          src={productInfo.imageURL}
          className="max-w-[100px] w-full rounded-md"
        />
      </div>
      <div>
        <p>{productInfo.name}</p>
        <p>{`${productInfo.currency} ${productInfo.price}`}</p>
      </div>
      <div className="flex items-center gap-5 ">
        <button className="bg-white   text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Qnt:{cnt}
        </button>
        <button className="bg-rose-500 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};
