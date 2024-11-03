import { GrTwitter } from "react-icons/gr";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="border-t-2 border-black pt-9 pb-10">
                <div className="flex flex-col md:flex-row w-full max-w-[1120px] mx-auto mt-10 justify-between">
                    <div className="w-full md:w-[340px] h-auto">
                        <h1 className="font-medium text-xl">cyber</h1>
                        <p className="text-[14px] text-[#CFCFCF] mt-4">
                            We are a residential interior design firm located in Portland. Our boutique studio offers more than...
                        </p>
                    </div>

                    <div className="w-full md:w-[295.5px] h-auto">
                        <h1 className="font-medium mb-2">Services</h1>
                        <ul className="flex flex-col text-[#CFCFCF] text-[14px] list-none gap-3">
                            <li>Bonus Programs</li>
                            <li>Gift Cards</li>
                            <li>Credit and Payment</li>
                            <li>Service Contracts</li>
                            <li>Non-cash Accounts</li>
                            <li>Payment</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[295.5px] h-auto">
                        <h1 className="font-medium mb-2">Assistance to the Buyer</h1>
                        <ul className="flex flex-col text-[#CFCFCF] text-[14px] list-none gap-3">
                            <li>Find an Order</li>
                            <li>Terms of Delivery</li>
                            <li>Exchange and Return of Goods</li>
                            <li>Guarantee</li>
                            <li>Frequently Asked Questions</li>
                            <li>Terms of Use of the Site</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-8 w-auto text-white mx-auto mt-4 justify-center">
                    <div className="cursor-pointer">
                        <GrTwitter />
                    </div>
                    <div className="cursor-pointer">
                        <FaFacebook />
                    </div>
                    <div className="cursor-pointer">
                        <FaTiktok />
                    </div>
                    <div className="cursor-pointer">
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
        </footer>
    );
}
