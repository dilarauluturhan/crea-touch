import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';

function User() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const loginPage = () => {
        navigate('/login');
        setIsDropdownOpen(false);
    };

    const signupPage = () => {
        navigate('/signup');
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <CiUser
                onClick={toggleDropdown}
                className="w-9 h-9 cursor-pointer hover:text-thirdColor"
            />

            {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 origin-top-right rounded-lg bg-white shadow-lg w-32 font-nunito font-semibold text-lg">
                    <button
                        onClick={loginPage}
                        className="block text-secondColor hover:text-thirdColor px-4 py-2"
                    >
                        Login
                    </button>
                    <hr />
                    <button
                        onClick={signupPage}
                        className="block text-secondColor hover:text-thirdColor px-4 py-2"
                    >
                        Signup
                    </button>
                </div>
            )}
        </div>
    )
}

export default User;