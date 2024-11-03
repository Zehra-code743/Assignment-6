import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

function Hero() {
    return (
        <div className="bg-black sm:bg-gray-800 h-full flex flex-col md:flex-row items-center gap-0 w-full">
            <div className="px-4 sm:px-2 w-full sm:w-[714px] h-auto flex flex-col mt-3">
                <h2 className="font-semibold text-[20px] sm:text-[25px] text-[#FFFFFF] opacity-100">Pro.Beyond.</h2>
                <h1 className="font-thin font-inter text-[36px] sm:text-[86px] text-[#FFFFFF] tracking-tighter leading-tight">
                    IPhone 14
                    <span className="font-semibold text-[#FFFFFF]"> Pro</span>
                </h1>
                <h1 className="font-medium text-[16px] md:text-[18px] text-[#090909] mb-6">
                    created to change everything for the better. For Everyone
                </h1>

                <div className="flex justify-center">
                    <Link href="/shop">
                        <button className="p-4 mb-7 border-2 border-white text-[#ffffff] rounded-lg w-[150px] md:w-[191px] h-[56px] transition duration-300 hover:bg-white hover:text-black">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
            <div className="ml-0 md:ml-[60px] w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                    src="/iphone.png" 
                    alt="iPhone"
                    width={406}
                    height={600}
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default Hero;
