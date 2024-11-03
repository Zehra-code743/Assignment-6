import React from "react"; 
import Image from 'next/image'; 

const Banner2 = () => {
    return (
        <div className="w-full h-full mt-12">
            <Image 
                src="/Banner2.png" 
                alt="Banner Image" 
                width={1440} 
                height={448} 
                layout="responsive" 
            />
        </div>
    );
}

export default Banner2;
