import Image from 'next/image';
import Link from 'next/link';
import { IoHeartOutline } from "react-icons/io5"; 
import { HiOutlineShoppingCart } from "react-icons/hi"; 
import { FiUser } from "react-icons/fi"; 
import { BiSearch } from "react-icons/bi"; 

function Header() {
    return (
        <div className="w-full bg-white flex justify-between items-center border-b p-4">
            
            <div className="flex items-center p-2 gap-9">
                <div className="p-1">
                    <Image
                        src="/Logo.png"
                        alt="Logo"
                        width={65}
                        height={45}
                    />
                </div>
            </div>

            
            <div className="flex-grow mx-4 relative"> 
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white p-2 pl-10 rounded-lg w-[372px] h-[56px] shadow-2xl outline-none focus:ring-2 focus:ring-blue-500"
                />
                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> 
            </div>

        
            <div className="flex items-center gap-4">
                <ul className="flex gap-10 text-[16px] font-medium">
                    <li>
                        <Link href="/" className="hover:text-blue-500 transition duration-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-500 transition duration-300">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
                    </li>
                    <li>
                        <Link href="/product" className="hover:text-blue-500 transition duration-300">Product</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-blue-500 transition duration-300">Blog</Link>
                    </li>
                </ul>
                
                
                <div className="flex gap-6">
                    <HiOutlineShoppingCart className="w-[32px] h-[32px] text-blue-500" />
                    <FiUser className="w-[32px] h-[32px] text-blue-500" />
                    <IoHeartOutline className="w-[32px] h-[32px] text-blue-500" />
                </div>
            </div>
        </div>
    );
}

export default Header;
