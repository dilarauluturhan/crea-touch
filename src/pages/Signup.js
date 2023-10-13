import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="customBg bg-local bg-no-repeat bg-cover h-full">
      <div className="py-6 flex flex-col justify-center sm:py-32 sm:max-w-sm sm:mx-auto">
        <div className="relative px-4 py-10 bg-white text-secondColor font-nunito shadow-lg sm:rounded-lg sm:p-20 w-[450px] h-[580px]">
          <div className="-mt-7">
            <h1 className="text-2xl text-center font-bold">Create your account</h1>
          </div>
          <div>
            <button className="group h-12 px-10 mt-5 border-2 border-secondColor rounded-lg transition duration-300 hover:border-thirdColor">
              <div className="relative flex items-center space-x-10 justify-center">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                <span className="block w-max font-semibold tracking-wide text-secondColor text-sm transition duration-300 group-hover:text-thirdColor sm:text-base">Sign up with Google</span>
              </div>
            </button>
          </div>
          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              className="mx-4 mb-0 text-center font-semibold">
              or
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-4 -mt-6 text-base leading-6 space-y-6 sm:text-lg sm:leading-7">
              <div className="relative">
                <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600" placeholder="Your email" />
                <label for="email" className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your email</label>
              </div>
              <div className="relative">
                <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                <label for="password" className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div className="relative">
                <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600" placeholder="Confirm password" />
                <label for="password" className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm password</label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 focus:ring-3 focus:ring-gray-400" required="" />
                  </div>
                  <div className="ml-2 text-sm">
                    <label for="remember" className="text-gray-700">I accept the <a href="#\" className="font-bold text-thirdColor hover:underline">Terms and Conditions</a></label>
                  </div>
                </div>
              </div>
              <div className="relative">
                <button className="bg-secondColor text-white rounded-md px-2 py-1 w-[290px]">Create an account</button>
              </div>
              <div>
                <p className="text-sm font-semibold text-secondColor text-center">
                Already have an account? <Link to="/login" className="font-bold text-thirdColor hover:underline ml-1">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup