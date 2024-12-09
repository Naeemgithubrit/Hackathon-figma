import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import {Montserrat} from "next/font/google";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function AboutUsHeroSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full bg-white text-black max-w-[1440px] max-h-[1300px] md:max-h-[709px]`}>
  <div className="w-[80%] mx-auto flex flex-col justify-center  md:flex-row md:justify-between  h-[75%] pt-20 space-y-24 md:space-y-0 md:space-x-32">
    
    <div className="text-div flex flex-col space-y-8 order-1 md:order-none lg:mt-10">
      <h3 className="font-bold hidden md:block uppercase">About Company</h3>
      <h1 className="text-4xl font-bold text-center md:text-start uppercase">About Us</h1>
      <p className='text-[#737373] font-semibold text-center md:text-start'>
      We know how large objects will act, <br />
      but things on a small scale
      </p>
      <div className="flex justify-center md:justify-start ">
       
        <Button
          className="bg-[#23a6f0] text-white font-bold px-8 py-6 rounded-sm uppercase hover:bg-[#237bad]"
        >
          Get Quote Now
        </Button>
      </div>
    </div>

    
    <div className="image-div md:w-[60%] lg:w-[40%] h-full  order-2 md:order-none relative ">
      <Image
        src={"/images/shopping-girl.png"}
        alt="heroman"
        width={2000}
        height={2000}
        className="h-full w-full z-30 relative lg:scale-[1.2]"
      />
      <div className='p-[8rem] lg:p-[13.5rem] z-10 rounded-full bg-[#ffe9ea] absolute right-6 lg:right-4 top-2 lg:top-4'>

      </div>
    </div>
  </div>
</div>
    </>
  )
}
