import Image from "next/image";

function Discount() {
    return (
        
        <div className="w-[100px] h-[100vh] flex flex-col items-center mx-100 ">
            <div className="flex justify-evenly mx-80 w-[100px] ">
                
                <div className="w-[360px] h-[688px] bg-white flex flex-col items-center shadow rounded p-4 text-center">
                    <Image
                        src="/Huwai.png"
                        alt="Huwai image"
                        width={360}
                        height={327}
                    />
                    <h3 className="text-lg font-semibold mt-2">Popular Products</h3>
                    <p className="mt-1 w-[296px] h-[72px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="mt-4 w-[191px] h-[50px] bg-black text-white border border-black rounded py-1">Shop Now</button>
                </div>

                <div className="w-[360px] h-[680px] bg-white flex flex-col items-center shadow rounded p-4 text-center">
                    <Image
                        src="/sumsung.png"
                        alt="Samsung image"
                        width={360}
                        height={366}
                    />
                    <h3 className="text-lg font-semibold mt-2">iPad Pro</h3>
                    <p className="mt-1 w-[296px] h-[72px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="mt-4 w-[191px] h-[50px] bg-black text-white border border-black rounded py-1">Shop Now</button>
                </div>

                <div className="w-[360px] h-[680px] bg-white flex flex-col items-center shadow rounded p-4 text-center">
                    <Image
                        src="/mobile.png"
                        alt="Mobile image"
                        width={360}
                        height={360}
                    />
                    <h3 className="text-lg font-semibold mt-2">Samsung Galaxy</h3>
                    <p className="mt-1 w-[296px] h-[72px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="mt-4 w-[191px] h-[50px] bg-black text-white border border-black rounded py-1">Shop Now</button>
                </div>

                <div className="w-[360px] h-[680px] bg-[#2C2C2C] flex flex-col items-center shadow rounded p-4 text-center">
                    <Image
                        src="/Mackbook1.png"
                        alt="Mackbook image"
                        width={360}
                        height={376}
                    />
                    <h3 className="text-lg font-semibold mt-2 text-[#FFFFFF]">Macbook Pro</h3>
                    <p className="mt-1 w-[296px] h-[72px] text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className="mt-4 w-[191px] h-[50px] bg-white text-[#2C2C2C] border border-black rounded py-1">Shop Now</button>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Discount;
