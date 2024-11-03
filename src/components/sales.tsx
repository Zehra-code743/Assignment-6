import React from 'react';
import Image from 'next/image'; 
import { GrPrevious, GrNext } from 'react-icons/gr'; 

function Sale() {
    return (
        <div className="w-full bg-[#FAFAFA] border-2 border-black">
            <div className="my-16 px-auto">
                <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-4"> 
                    <h2 className="text-[24px] font-medium">Browse By Category</h2>
                    <div className="flex items-center">
                        <button className="flex items-center text-gray-600 mr-4">
                            <GrPrevious size={24} />
                        </button>
                        <button className="flex items-center text-gray-600">
                            <GrNext size={24} />
                        </button>
                    </div>
                </div>

            
                <div className="max-w-[1120px] mx-auto mt-8 flex gap-4 justify-between">
                    
                    <div className="w-[150px] h-[128px] flex flex-col justify-center items-center bg-[#EDEDED] rounded">
                        <Image src="/Phones.png" alt="Phones" width={48} height={48} />
                        <p className="font-medium">Phones</p>
                    </div>

                    
                    <div className="w-[150px] h-[128px] flex flex-col justify-center items-center bg-white shadow rounded">
                        <Image src="/smartwatches.png" alt="Smart Watches" width={48} height={48} />
                        <p className="text-center mt-1">Smart Watches</p>
                    </div>

                    
                    <div className="w-[150px] h-[128px] flex flex-col justify-center items-center bg-[#EDEDED] rounded">
                        <Image src="/Cameras.png" alt="Cameras" width={48} height={48} />
                        <p className="font-medium">Cameras</p>
                    </div>

                    
                    <div className="w-[150px] h-[128px] flex flex-col justify-center items-center bg-[#EDEDED] rounded">
                        <Image src="/Headphones.png" alt="Headphones" width={48} height={48} />
                        <p className="font-medium">Headphones</p>
                    </div>

                    
                    <div className="w-[150px] h-[128px] flex flex-col justify-center items-center bg-[#EDEDED] rounded">
                        <Image src="/Computers.png" alt="Computers" width={48} height={48} />
                        <p className="font-medium">Computers</p>
                    </div>

                
                    <div className="w-[150px] h-[128px] flex flex-col justify-center items-center bg-[#EDEDED] rounded">
                        <Image src="/Gaming.png" alt="Gaming" width={48} height={48} />
                        <p className="font-medium">Gaming</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sale;
