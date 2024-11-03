import Image from "next/image";

const Products = () => {
    return (
        <div className="h-[100vh] ">
            <div className="flex">
                <div className="flex flex-col">
                    <div className="w-[720px] h-[328px] flex items-center">
                        <div className="plastation w-[360px] h-[343px]">
                            <Image
                                src="/Playstation.png"
                                alt="Playstation image"
                                width={360}
                                height={343} className="mt-4"
                            />
                        </div>
                        <div className="w-[328px] h-auto max-auto flex flex-col">
                            <h2 className="text-[#000000] font-medium text-[49px] font-inter">Playstation 5</h2>
                            <p className="leading-6 text-[14px] font-medium">
                                Incredibly powerful CPUs, GPUs and on SSD with integrated I/O will redefine your Playstation Experience.
                            </p>
                        </div>
                    </div>
                    <div className="w-[720px] h-[272px] flex"> 
                        <div className="w-[360px] h-[272px] bg-[#EDEDED] flex items-center">
                            <div className="w-[104px] h-[272px]">
                                <Image
                                    src="/airpods.png"
                                    alt="AirPods image"
                                    width={104}
                                    height={272}></Image>
                            
                            </div>
                            <div className="mx-auto w-[160px] h-[143px] font-light">
                                <div className="text-[29px] leading-10 font-inter ml-4">
                                    Apple Airpods
                                    <span className="font-semibold">Max</span> 
                                </div>
                                <p className="text-black font-medium leading-6 text-[14px] ml-4">
                                    Computational audio. Listen, it's powerful.
                                </p> 
                            </div>
                        </div>
                        <div className="w-[360px] h-[272px] bg-[#353535] flex items-center">
                            <div className="w-[135px] h-[190px]">
                            <Image
                                    src="/earpods.png"
                                    alt="earpods image"
                                    width={136}
                                    height={190}></Image>
                                
                            </div>
                            <div className="w-[160px] h-[144px] ml-4 ">
                                <div className="text-[29px]  text-white font-light font-serif">Apple Vision
                                    <span className="font-bold">Pro</span>
                                </div>
                                <div className="text-[#909090] text-[14px] font-medium leading-6">An immersive way to experience entertainment</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="w-[2000px] h-[600px]  bg-[#EDEDED] flex items-center">
                    <div className="w-[720px] h-[600px] ml-9 z-10 pl-5">
                        <p className="text-[64px] font-light leading-tight">MacBook</p>
                        <p className="text-[64px] font-medium">Air

                        </p>
                        <p className="text-[#090909] text-[14px] font-medium">
                            This new 15-inch Macbook makes room for more of what you love with a specious 
                            Liquid Ration display
                        </p>
                    </div>
                    <div className="w-[292px] pb-9 pr-7">
                    <Image
                                    src="/screen.png"
                                    alt="Screen image"
                                    width={630}
                                    height={502} className="relative right-2 pr-5"></Image>
                                 <Image
                                    src="/Body.png"
                                    alt="Screen image"
                                    width={829}
                                    height={33.33} className="mb-10"></Image>
                                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
