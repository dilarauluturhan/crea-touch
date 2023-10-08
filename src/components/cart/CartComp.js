import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartComp = ({ cart }) => {
    const dispatch = useDispatch();

    return (
        <div className="font-nunito mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg">
                <div className="w-90 md:w-[950px] bg-white border border-gray-200 rounded-lg shadow mb-7 p-5">
                    <div className="justify-between sm:flex sm:justify-start">
                        <img src={cart?.image} alt="product" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between mt-10 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">{cart?.title}</h2>
                        </div>
                        <div className="mt-5 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100 text-sm ml-6">
                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-thirdColor hover:text-blue-50"> - </span>
                                <input className="h-7 w-10 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" />
                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-thirdColor hover:text-blue-50"> + </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <p className="text-lg">${cart?.price}</p>
                                <svg onClick={() => dispatch(removeFromCart(cart?.id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 cursor-pointer duration-150 hover:text-red-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComp;