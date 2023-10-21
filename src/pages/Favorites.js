import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../redux/favoriteSlice';
import { CgClose } from 'react-icons/cg';
import Empty from '../components/Empty';

function Favorites() {
  const favoriteProducts = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      {
        favoriteProducts?.length > 0 ? <div>
          {
            favoriteProducts?.map((product) => (
              <div
                className="font-nunito mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0 rounded-lg"
                key={product?.id}
              >
                <div className="w-90 md:w-[950px] bg-white border border-gray-200 rounded-lg shadow mb-7 p-5">
                  <div className="justify-between sm:flex sm:justify-start">
                    <img src={product?.image} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="" />
                    <div className="sm:ml-4 sm:flex-cols sm:w-full sm:justify-between mt-10 sm:mt-7">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">{product?.title}</h5>
                      <p className="mb-3 font-normal text-gray-700 line-clamp-2">{product?.description}</p>
                      <a href="#\" className="font-semibold text-thirdColor hover:underline ml-1">Learn more..</a>
                    </div>
                    <CgClose onClick={()=> dispatch(removeFromFavorites(product?.id))} className="h-10 w-10 cursor-pointer duration-150 hover:text-red-700" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
          :
          <Empty />
      }
    </div>
  )
}

export default Favorites;