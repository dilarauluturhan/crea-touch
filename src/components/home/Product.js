const Product = ({ product }) => {
  return (
    <div className="font-nunito w-[440px] p-3 mb-5 mx-2 border border-secondColor rounded-md relative cursor-pointer">
      <div className="text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">{product?.price}$</div>
      <img className="w-[200px] h-[200px] object-cover m-auto" src={product?.image} alt="" />
      <div className="text-center px-3 mt-2 text-xl font-bold">{product.title}</div>
    </div>
  )
}

export default Product;