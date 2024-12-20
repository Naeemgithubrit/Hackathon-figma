import PricingSection from "@/components/pricing-section"
import Image from "next/image"

// Recommended way, to include only the icons you need.
import { SiX, SiFacebook, SiInstagram,SiLinkedin } from 'react-icons/si';

import Footer from "@/components/Footer"
import {Montserrat} from "next/font/google";
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPiedPiperHat } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import AboutHeader from "@/components/AboutHeader";




export default function AboutPage() {
  return (
    <>
     <AboutHeader/>
      <PricingSection />
     
      
      <div className="mt-24 w-full flex flex-col justify-center items-center bg-[#fafafa]">
        
        <h4 className=" mt-5 text-xl font-montserrat">
          Trusted By Over 4000 Big Companies
        </h4>

        <div className="w-full bg-[#fafafa] h-[175px] mt-5 flex justify-evenly items-center flex-wrap">
        
        <FaHooli className='w-24 h-24'/>
        <FaLyft className='w-24 h-24'/>
        <FaPiedPiperHat className='w-24 h-24'/>
        <FaStripe className='w-24 h-24'/>
        <FaAws className='w-24 h-24'/>
        <FaRedditAlien className='w-24 h-24'/>
        </div>
        
      </div>

      {/* Pricing FAQs */}

      <div className="mt-20 w-full flex flex-col justify-center items-center">
        <h1 className="mb-5 font-montserrat font-bold text-[40px]">
          Pricing FAQs
        </h1>

        <p className="mb-16 text-center font-montserrat text-xl text-[#737373] md:w-[552px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>

        {/* faqs */}
        <div className="w-full flex  justify-evenly items-center  lg:flex-nowrap flex-wrap">
          {/* first div */}
          <div className="flex gap-10 flex-col justify-center items-center">
            {/* first: first div */}
            <div className="font-montserrat flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#23A6F0"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>

              <div className="w-[309px] flex flex-col justify-center items-center">
                <h5 className="text-base font-bold text-black">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            {/* first: second div */}
            <div className="font-montserrat flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#23A6F0"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>

              <div className="w-[309px] flex flex-col justify-center items-center">
                <h5 className="text-base font-bold text-black">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>

            {/*first: third div */}
            <div className="font-montserrat flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#23A6F0"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>

              <div className="w-[309px] flex flex-col justify-center items-center">
                <h5 className="text-base font-bold text-black">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          </div>

          {/* Second div */}
          <div className="flex gap-10 flex-col justify-center items-center">
            {/* second: first div */}
            <div className="font-montserrat flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#23A6F0"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>

              <div className="w-[309px] flex flex-col justify-center items-center">
                <h5 className="text-base font-bold text-black">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            {/* second: second div */}
            <div className="font-montserrat flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#23A6F0"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>

              <div className="w-[309px] flex flex-col justify-center items-center">
                <h5 className="text-base font-bold text-black">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>

            {/*second: third div */}
            <div className="font-montserrat flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="#23A6F0"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>

              <div className="w-[309px] flex flex-col justify-center items-center">
                <h5 className="text-base font-bold text-black">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-10 text-xl font-montserrat text-[#737373]">
          Haven’t got your answer? Contact our support
        </h3>
      </div>

      {/* Start your Free trial */}
      <div className="mt-20 w-full flex flex-col justify-center items-center">
        <h1 className="mb-4 font-montserrat font-bold text-2xl md:text-[40px] ">
          Start your 14 days free trial
        </h1>

        <p className="font-sm text-[#737373] w-[411px] text-center font-montserrat">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        <button className=" mt-5 mb-10 w-[186px] h-[52px] text-sm font-bold  rounded-md bg-[#23A6F0] text-white">
          Try it free now
        </button>

     
        {/* socials */}
        <div className="flex justify-center items-center gap-[34px]">
        <SiX
        size={30} 
        />
          
         <SiFacebook
          size={30}
          />
         <SiInstagram
         size={30}
          />
         <SiLinkedin
          size={30}
          />
          
        </div>
      
      </div>
      <Footer/>

    
    </>
  )
}

