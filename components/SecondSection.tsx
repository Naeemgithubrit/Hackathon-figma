import React from 'react'
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import { Button } from './ui/button';

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })
export default function SecondSection() {
  return (
    <>
    <div
  className={`${Montserratfont.className} container w-full py-8 md:py-16 md:h-auto`}
>
  <div className="second-container w-[90%] lg:w-[80%] mx-auto">
    {/* Header Section */}
    <div className="gap-y-4 mb-8">
      <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl">
        Editor's Pick
      </h1>
      <p className="text-center text-sm md:text-base">
        Problems trying to resolve the conflict between
      </p>
    </div>

    {/* Grid Section */}
    <div
      className="w-full mx-auto grid grid-cols-1  md:grid-cols-4 gap-4 lg:gap-6"
    >
      {/* Large Image */}
      <div className="row-span-2 md:col-span-2 relative">
        <Image
          src={'/images/men-image.png'}
          alt="first-boy"
          width={1000}
          height={1000}
          className="h-[500px] md:h-full object-cover w-[300px] md:w-full mx-auto md:mx-0"
        />
        <Button className='absolute left-16 md:left-7 bottom-7 bg-white text-black rounded-sm font-bold uppercase px-14 py-4 hover:text-white'>Men</Button>
      </div>

      {/* Tall Image */}
      <div className="md:col-span-1  row-span-2 relative">
        <Image
          src={'/images/women-image.png'}
          alt="first-girl"
          width={1000}
          height={1000}
          className="h-full object-cover w-[300px] md:w-full mx-auto md:mx-0"
        />
        <Button className='absolute left-24 md:left-5 bottom-5 bg-white text-black rounded-sm font-bold uppercase px-10 py-4 hover:text-white'>Women</Button>
      </div>

      {/* Small Image 1 */}
      <div className='relative'>
        <Image
          src={'/images/japanes-girl.png'}
          alt="japanese-girl"
          width={1000}
          height={1000}
          className="h-[242px] md:h-full object-cover  w-[300px] md:w-full mx-auto md:mx-0"
        />
        <Button className='absolute left-14 md:left-3 bottom-5 bg-white text-black rounded-sm font-bold uppercase px-6 py-4 hover:text-white'>Accessories</Button>
      </div>

      {/* Small Image 2 */}
      <div className='relative'>
        <Image
          src={'/images/yellow-boy.png'}
          alt="yellow-boy"
          width={1000}
          height={1000}
          className="h-[242px] md:h-full object-cover w-[300px] md:w-full mx-auto md:mx-0"
        />
        <Button className='absolute left-14 md:left-3 bottom-5 bg-white text-black rounded-sm font-bold uppercase px-6 py-4 hover:text-white'>Kids</Button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
