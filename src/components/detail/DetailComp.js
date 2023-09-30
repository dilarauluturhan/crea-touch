import { CiHeart } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";

const DetailComp = ({ productDetail }) => {
    return (
        <section class="text-gray-600 font-nunito overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={productDetail?.image} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{productDetail?.title}</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-thirdColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-thirdColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-thirdColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-thirdColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-thirdColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span class="text-gray-600 ml-3">{productDetail?.rating?.rate}</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a href='#\' class="text-gray-500">
                                    <CiFacebook size={28}/>
                                </a>
                                <a href='#\' class="text-gray-500 mx-0.5">
                                    <CiTwitter size={28}/>
                                </a>
                                <a href='#\' class="text-gray-500">
                                    <CiChat1 size={28}/>
                                </a>
                            </span>
                        </div>
                        <p class="leading-relaxed">{productDetail?.description}</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div class="flex">
                                <span class="mr-3">Color</span>
                                <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button class="border-2 border-gray-300 ml-1 bg-thirdColor rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div class="flex ml-6 items-center">
                                <span class="mr-3">Size</span>
                                <div class="relative">
                                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-thirdColor text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">${productDetail?.price}</span>
                            <button class="flex ml-auto text-white bg-thirdColor border-0 py-2 px-6 focus:outline-none hover:bg-thirdColor rounded">Add to cart</button>
                            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <CiHeart size={32}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailComp;