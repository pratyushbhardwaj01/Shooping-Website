import { List } from "../../components/List/List";
import useProduct from "../../hooks/useProduct";
import { ProductType } from "../../types/types";

export const Cart = () => {
  const { cartItems, productsInfo, deleteFromCart } = useProduct();
  const selectedProducts = productsInfo.filter((product) => {
    return cartItems[product.id];
  });

  const isSelectedItems = Object.keys(cartItems).length !== 0;

  const selectedProductsInfo: ProductType[] = productsInfo.filter((item) => {
    return !!cartItems[item.id];
  });

  const totalCost = selectedProductsInfo.reduce((accum, currentItem) => {
    return accum + currentItem.price * cartItems[currentItem.id];
  }, 0);

  return (
    <div className="md:p-[20px] p-[10px] ">
      <p className="text-xl text-slate-700 font-bold mb-4">Shoopping Cart</p>
      <div className="flex max-w-6xl mx-auto  md:flex-row flex-col md:justify-start gap-3 ">
        <div className="grow-[.3] space-y-2">
          {selectedProducts.map((item) => {
            return (
              <List
                productInfo={item}
                cnt={cartItems[item.id]}
                onDelete={(id: number) => deleteFromCart(id)}
              />
            );
          })}
        </div>

        {isSelectedItems && (
          <div>
            <table className="grow-[.7] table table-fixed border-spacing-1 border-collapse text-left h-fit">
              <thead>
                <tr className="border">
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Cost</th>
                </tr>
              </thead>
              <tbody className="p-4">
                {selectedProductsInfo.map((item) => {
                  return (
                    <tr className="border">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.price}</td>
                      <td className="px-4 py-2">{`Quantity:${
                        cartItems[item.id]
                      }`}</td>
                      <td className="px-4 py-2">{`Rs. ${
                        item.price * cartItems[item.id]
                      }`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex items-center justify-between px-4 py-2">
              <p className="">Total</p>
              <p>{totalCost}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
