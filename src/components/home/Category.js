import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <div className='w-1/6 font-nunito'>
      <div className="text-xl font-bold mb-2">Category</div>
      {categories?.map((category, i) => (
        <div
          className="flex items-center cursor-pointer p-2 ml-1 text-lg hover:bg-secondColor hover:text-firstColor hover:rounded-lg hover:duration-150"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  )
}

export default Category;