import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/crea-touch-3.png";
import User from "../user/User";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoritePage = () => {
    navigate('/favorites');
  };

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch]);

  return (
    <navbar className="flex flex-wrap flex-col md:flex-row items-center justify-between px-20 py-7">
      <Link to="/">
        <img className="w-[270px]" src={logo} alt="logo" />
      </Link>
      <div className="relative font-nunito mb-1 mr-7">
        <input type="search" className="block w-96 p-4 pl-6 text-md text-secondColor border border-gray-300 rounded-lg bg-gray-50 focus:ring-thirdColor focus:border-thirdColor" placeholder="Search..." required />
        <button type="submit" className="text-white absolute right-3 bottom-3 bg-secondColor rounded-lg mr-1 px-4 py-2">
          <CiSearch className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex items-center">
        <User />
        <CiHeart
          onClick={favoritePage}
          className="w-9 h-9 ml-3 cursor-pointer hover:text-thirdColor" />
        <CiShoppingCart
          onClick={() => navigate("cart")}
          className="w-9 h-9 ml-3 cursor-pointer hover:text-thirdColor" />
      </div>
    </navbar>
  )
}

export default Navbar;