import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import Pagination from "./Pagination";

function Products() {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector(state => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const productPerPage = 9;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {
        productsStatus === "LOADING" ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-wrap">
              {currentProducts.map((product, i) => (
                <Product key={i} product={product} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
    </div>
  )
}

export default Products