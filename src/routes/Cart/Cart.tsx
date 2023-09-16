import { List } from "../../components/List/List";
import useProduct from "../../hooks/useProduct";

export const Cart = () => {
  const { cartItems, productsInfo } = useProduct();
  const selectedProducts = productsInfo.filter((product) => {
    return cartItems[product.id];
  });

  return (
    <div className="p-[20px]">
      <div>Shoopping Cart</div>
      <div className="flex flex-col gap-5">
        {selectedProducts.map((item) => {
          return <List productInfo={item} cnt={cartItems[item.id]} />;
        })}
      </div>
    </div>
  );
};
