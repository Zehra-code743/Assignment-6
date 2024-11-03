import Image from "next/image";
import { FiHeart } from "react-icons/fi"; 

function Rate() {
    const products = [
        { name: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: "$1437", imgSrc: "/newphone.png" },
        { name: "AirPods Max Silver Starlight Aluminium", price: "$549", imgSrc: "/airpods2.png" },
        { name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium", price: "$399", imgSrc: "/watch2.png" },
        { name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: "$1499", imgSrc: "/mobile2.png" },
    ];

    return (
        <div className="w-full">
            <div className="w-[248px] h-[32px] ">
                <ul className="flex gap-2 ">
                    <li className="text-black text-[24px] font-medium">Discounts up to -50%</li>
                </ul>
            </div>
            
            <div className="grid grid-cols-4 gap-0 w-[1440px]  h-[656px] my-10 mx-auto"> 
                {products.map((product) => (
                    <div key={product.name} className="relative w-[268px] h-[432px] bg-[#F6F6F6] flex flex-col items-center p-4 shadow rounded">
                        <FiHeart className="absolute top-2 right-2 text-[#909090] w-[32px] h-[32px]" /> 
                        <Image src={product.imgSrc} alt={`${product.name} image`} width={160} height={160} />
                        <p className="text-center mt-1 w-[236px] h-[48px]">{product.name}</p>
                        <p className="text-center mt-1 font-semibold">{product.price}</p>
                        <button className="mt-2 bg-black text-white px-4 py-1 rounded">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rate;
