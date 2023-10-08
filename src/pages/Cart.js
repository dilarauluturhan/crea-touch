import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])


  return (
    <div>
      {
        carts?.length > 0 ? <div>
          {
            carts?.map((cart, i) => (
              <CartComp key={i} cart={cart} />
            ))
          }
          <div className="font-nunito w-[400px] p-6 mt-6 md:mt-0 ml-3 md:ml-[65rem] h-screen">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${totalAmount}</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-thirdColor py-1.5 font-medium text-blue-50 hover:bg-fourthColor">Check out</button>
            <Link to="/" className="flex font-semibold text-thirdColor text-md mt-10">
              <svg className="fill-current mr-2 text-thirdColor w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>
          </div>
        </div>
          :
          <div className="h-screen bg-firstColor pt-20 font-nunito flex flex-col items-center">
            <iframe src="https://giphy.com/embed/DZgUVLxzMoAwg" className="w-96 md:w-[480px] h-[310px] rounded-lg" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/shopping-DZgUVLxzMoAwg"></a></p>
            <p className="text-2xl md:text-4xl mt-5">You don’t have any items in your cart.</p>
            <Link to="/" className="text-xl md:text-3xl text-thirdColor hover:text-fourthColor mt-5">Explore CreaTouch</Link>
          </div>
      }
    </div>
  )
}

export default Cart;