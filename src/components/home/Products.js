import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategoryProducts, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import Pagination from "./Pagination";

function Products({ category }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector(state => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  // sayfa yüklendiğinde tüm verileri useEffect'le alıyorum
  // artık gelen category değerine göre almak istiyorum
  // useEffect'im kategoriye göre de çalışsın
  // kategoride her değer değiştiğinde veri çekme işlemini useEffect tekrar yapsın
  // hem tüm ürünleri getirebilsin hem de kategoriye göre ürün getirebilsin
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category))
    } else {
      dispatch(getProducts())
    }
    dispatch(getProducts())
  }, [dispatch, category]);

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