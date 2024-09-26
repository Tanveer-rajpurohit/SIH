import { IoIosArrowDown } from 'react-icons/io'; // Dropdown arrow icon
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='w-full py-3 flex items-center justify-between bg-[#FDFDFD] border-b shadow-sm'>
            {/* Left side (Logo and Links) */}
            <div className="left flex items-center gap-8"> {/* Adjusted gap here */}
                <div className="logo pl-8">
                    <h4 className='text-2xl font-bold text-blue-600'>logo</h4>
                </div>

                {/* Navigation links with decreased spacing */}
                <div className="item flex items-center gap-6"> {/* Reduced gap between items */}
                    <Link href="/" className='hover:bg-gray-100 rounded-md p-2 px-4 text-base font-medium flex items-center gap-2'>
                        Home
                        <IoIosArrowDown className='mt-1 text-gray-500' />
                    </Link>
                    <Link href="/" className='hover:bg-gray-100 rounded-md p-2 px-4 text-base font-medium flex items-center gap-2'>
                        About
                        <IoIosArrowDown className='mt-1 text-gray-500' />
                    </Link>
                    <Link href="/" className='hover:bg-gray-100 rounded-md p-2 px-4 text-base font-medium flex items-center gap-2'>
                        Post
                        <IoIosArrowDown className='mt-1 text-gray-500' />
                    </Link>
                    <Link href="/" className='hover:bg-gray-100 rounded-md p-2 px-4 text-base font-medium flex items-center gap-2'>
                        Research
                        <IoIosArrowDown className='mt-1 text-gray-500' />
                    </Link>
                </div>
            </div>

            {/* Right side (Auth Buttons) */}
            <div className="right flex items-center space-x-4 pr-8">
                <button className="text-gray-600 hover:text-blue-500 border border-gray-300 px-4 py-2 rounded-lg">
                    <Link href="/LogIn">
                        Log in
                    </Link>
                </button>
                <button className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg">
                    <Link href="/SignUp">

                        Sign up
                    </Link>
                </button>
            </div>
        </nav>
    );
}
