import { SearchBar } from "..";
import { CartIcon } from "../../assests";

const Header = () => {
  return (
    <div className="flex items-center justify-around p-[10px]  bg-blue">
      <div className="text-sm md:text-3xl text-slate-50">Tee Rex Store</div>
      <SearchBar />
      <CartIcon className="text-white md:text-5xl  text-3xl" />
    </div>
  );
};

export default Header;
