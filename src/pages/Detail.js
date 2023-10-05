import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProducts } from '../redux/productSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products);

    // dispatch üzerinden veri çağırmam gerek
    // getDetailProducts dışarıdan id alır
    // detaylar sayfasına her gittiğimde id'ye göre veriler değiştiği için id parametresinin mutlaka [] içine de yazılması gerekir
    useEffect(() => {
        dispatch(getDetailProducts(id))
    }, [dispatch, id]);

    return (
        <div>
            {
                productDetailStatus === "LOADING" ? <Loading /> : <DetailComp productDetail={productDetail} /> 
            }
        </div>
    )
}

export default Detail;