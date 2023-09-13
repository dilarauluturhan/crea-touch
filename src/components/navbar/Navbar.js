import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div className='bg-firstColor flex items-center justify-evenly p-5'>
      <div className='font-adlam text-5xl text-secondColor'>CreaTouch</div>
      <div className="relative font-nunito">
        <input type="search" className="block w-96 p-4 pl-5 text-md text-secondColor border border-gray-300 rounded-lg bg-gray-50 focus:ring-thirdColor focus:border-thirdColor" placeholder="Search..." required />
        <button type="submit" className="text-white absolute right-3 bottom-3 bg-thirdColor hover:bg-fourthColor rounded-lg px-4 py-2">
          <CiSearch className='w-5 h-5 text-white' />
        </button>
      </div>
      <div className='flex items-center'>
        <CiUser className='w-8 h-8 cursor-pointer hover:text-thirdColor' />
        <CiHeart className='w-8 h-8 cursor-pointer ml-2 mr-2 hover:text-thirdColor' />
        <CiShoppingCart className='w-8 h-8 cursor-pointer hover:text-thirdColor' />
      </div>
    </div>
  )
}

export default Navbar;