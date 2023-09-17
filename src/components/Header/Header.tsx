import { NavLink } from "react-router-dom";
import { CartIcon } from "../../assests";
import useProduct from "../../hooks/useProduct";

const Header = () => {
  const { cartItems } = useProduct();
  const itemsSelected = Object.keys(cartItems).length || "";

  return (
    <section className="flex items-center justify-between px-4 py-4 md:px-[50px] absolute  bg-gray-100 w-[100%] z-50">
      <div className="text-sm md:text-3xl text-black cursor-pointer">
        <NavLink to="/">
          {/* <img className="h-full w-[30px]" src={FlipkartIcon} /> */}
          My Shop
        </NavLink>
      </div>
      <div className="flex items-center gap-4 text-black">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-slate-700" : ""
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-slate-700" : ""
          }
        >
          <div className="relative">
            <p className="absolute text-red-400 top-0 right-[-10px] font-bold">
              {itemsSelected}
            </p>
            <CartIcon className="text-black md:text-5xl cursor-pointer w-[30px] text-3xl " />
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default Header;
