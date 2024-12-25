import React from 'react';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import BlogProducts from '@/components/blogSeller';
import CompaniesSection from '@/components/companiesSection';
import GreenHeader from '@/components/GreenHeader';



const ProductListing = () => {
    return (
       
        <section>
             <GreenHeader/>
             
        <div className="bg-white p-6 rounded-lg shadow-md ">
            <div className="flex items-center gap-2 mb-4">
                <a href="/Hero" className="hover:underline text-black">Home</a>
                <span>&gt;</span>
                <a href="/shop" className="text-gray-400 font-medium">Shop</a>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                    <Image
                        src="/images/blog/main.png"
                        alt="sofaset"
                        width={300}
                        height={300}
                        className="w-full h-auto "
                    />
                </div>

                <div className="md:w-2/3 ml-10">
                    <h2 className="text-2xl font-bold text-gray-900">{"Floating Phone"}</h2>
                    <div className="flex items-center my-2">
                        <span className="text-lg text-yellow-400"> ★★★★</span>
                        <span className="text-lg text-gray-300">★</span>
                        <span className="ml-1 text-gray-700">10 reviews</span>
                    </div>
                    <p className="text-gray-700">Met minim Mollie non desert Alamo <br />
                        est sit cliquey dolor do met sent. RELIT official consequent door <br />
                        ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.</p>
                    <div className="flex items-center mt-4">
                        <span className="text-2xl font-bold text-gray-900">$1,139.33</span>
                    </div>
                    <div>
                        <span className='ml-2 text-black'> Availabity :</span>
                        <span className="ml-2 text-blue-400">in stock</span>

                    </div>

                    <div className="flex gap-2 ml-5 mt-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                    </div>

                    <div className='flex items-center mt-9 justify-start'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm mt-4">Select Options</button>
                        <div className="flex gap-4 ml-4">
                            <CiHeart size={24} />
                            <MdOutlineShoppingCart size={24} />
                            <FaEye size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <BlogProducts />
        </div>
        <div>
            <CompaniesSection />
        </div>
        </section>

       
    );
};

export default ProductListing;