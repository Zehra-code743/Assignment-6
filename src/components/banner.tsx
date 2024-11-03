import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io"; 

function Banner() {
    const products = [
        { name: "Apple iPhone 14 Pro Max 128GB Deep Purple", price: "$900", imgSrc: "/Appleiphone.png" }, 
        { name: "Blackmagic Pocket Cinema Camera 6k", price: "$2535", imgSrc: "/BlackMagic.png" },
        { name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium", price: "$399", imgSrc: "/appleWatch.png" },
        { name: "AirPods Max Silver Starlight Aluminium", price: "$549", imgSrc: "/AirpodsMax.png" },
        { name: "Samsung Galaxy Watch6 Classic 47mm Black", price: "$369", imgSrc: "/Glaxy.png" },
        { name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: "$1799", imgSrc: "/GlaxyZ.png" },
        { name: "Samsung Galaxy Buds", price: "$149", imgSrc: "/GlaxyBuds.png" },
        { name: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021", price: "$398", imgSrc: "/appleIpad.png" },
    ];

    return (
        <div className="w-[1120px] mx-160 my-120 ">
            <ul className="flex gap-3 items-center">
                <li className="text-black text-[14px] font-medium border-b-2 border-black">New Arrivals</li>
                <li className="text-[14px] font-medium text-[#8B8B8B]">Bestseller</li>
                <li className="text-[14px] font-medium text-[#8B8B8B]">Featured Products</li>
            </ul>
            
            <div className="grid grid-cols-4 gap-4 w-[80%] mb-5">
                {products.slice(0, 4).map((product) => (
                    <div key={product.name} className="relative bg-[#F6F6F6] flex flex-col items-center p-4 shadow rounded">
                        <IoIosHeartEmpty className="absolute top-2 right-2 text-[#909090] w-[32px] h-[32px]" /> 
                        <Image src={product.imgSrc} alt={`${product.name} image`} width={160} height={160} />
                        <p className="text-center w-[236px] h-[48px] mt-1">{product.name}</p>
                        <p className="text-center w-[236px] h-[24px] mt-1 font-semibold">{product.price}</p>
                        <button className="mt-2 bg-black w-[188px] h-[48px] text-white px-4 py-1 rounded">Buy Now</button>
                    </div>
                ))}
            </div>

            
            <div className="grid grid-cols-4 gap-4 w-[80%]">
                {products.slice(4).map((product) => (
                    <div key={product.name} className="relative bg-gray-200 flex flex-col items-center p-4 shadow rounded">
                        <IoIosHeartEmpty className="absolute top-2 right-2 text-[#909090] w-[32px] h-[32px]" /> 
                        <Image src={product.imgSrc} alt={`${product.name} image`} width={100} height={100} />
                        <p className="text-center mt-1">{product.name}</p>
                        <p className="text-center mt-1 font-semibold">{product.price}</p>
                        <button className="mt-2 bg-black text-white px-4 py-1 rounded">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
