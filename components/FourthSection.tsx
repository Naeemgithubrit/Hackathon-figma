import React from 'react'
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import { Button } from './ui/button';

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function FourthSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full bg-[#23856d] text-white max-w-[1440px] max-h-[1300px] md:max-h-[709px]`}>
  <div className="w-[75%] mx-auto flex flex-col md:flex-row md:justify-between h-[75%] pt-20 space-y-10 md:space-y-0 md:space-x-32">
    
    <div className="text-div flex flex-col space-y-8 order-1 md:order-none lg:mt-10">
      <h3 className="font-bold">Summer 2020</h3>
      <h1 className="text-4xl font-bold">Vita Classic Product</h1>
      <p>
        We know how large objects will act, We know how are objects will act, We
        know
      </p>
      <div className="flex space-x-7 items-center">
        <span className="text-2xl font-bold">$16.48</span>
        <Button
          className="bg-[#2dc071] text-white font-bold px-8 py-6 rounded-sm uppercase hover:bg-[#27a160]"
        >
          Add To Cart
        </Button>
      </div>
    </div>

    
    <div className="image-div order-2 md:order-none">
      <Image
        src={"/images/hero-man.png"}
        alt="heroman"
        width={1000}
        height={1000}
        className="h-full w-full"
      />
    </div>
  </div>
</div>

    </>
  )
}
