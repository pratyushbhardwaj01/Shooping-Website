import { useNavigate } from "react-router-dom";
import { CartIcon, FlipkartIcon } from "../../assests";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between p-[10px] md:px-[20px] absolute  bg-blue w-[100%] z-50">
      <div className="text-sm md:text-3xl text-slate-50 cursor-pointer">
        <img
          className="h-full w-[30px]"
          src={FlipkartIcon}
          onClick={() => navigate("/")}
        />
      </div>
      <CartIcon
        className="text-white md:text-5xl cursor-pointer  text-3xl "
        onClick={() => navigate("/cart")}
      />
    </section>
  );
};

export default Header;
