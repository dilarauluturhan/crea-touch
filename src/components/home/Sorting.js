function Sorting() {
  return (
    <div className='container mx-auto bg-secondColor my-5 text-firstColor p-5 rounded-lg flex items-center justify-end font-nunito'>
      <select id='' className='bg-firstColor text-secondColor text-sm rounded-lg focus:ring-thirdColor focus:border-thirdColor block w-64 p-2.5'>
        <option selected disabled>Sort by</option>
        <option value='high'>Highest price</option>
        <option value='low'>Lowest price</option>
      </select>
    </div>
  )
}

export default Sorting;