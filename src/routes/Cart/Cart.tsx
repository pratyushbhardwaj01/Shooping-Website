import { List } from "../../components/List/List";
import useProduct from "../../hooks/useProduct";

export const Cart = () => {
  const { cartItems, productsInfo, deleteFromCart } = useProduct();
  const selectedProducts = productsInfo.filter((product) => {
    return cartItems[product.id];
  });

  function handleDelete(id: number) {
    deleteFromCart(id);
  }

  return (
    <div className="md:p-[20px] p-[10px]">
      <div>Shoopping Cart</div>
      <div className="flex flex-col gap-5 max-w-md mx-auto h-[calc(100vh-120px)] overflow-scroll scroll-smooth ">
        {selectedProducts.map((item) => {
          return (
            <List
              productInfo={item}
              cnt={cartItems[item.id]}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
