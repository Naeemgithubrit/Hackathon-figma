import React from 'react';
import {Montserrat} from "next/font/google";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function AboutUsSecondSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full my-4 md:my-20  py-6 md:py-3 h-[500px] md:h-auto`}>
<div className='w-[80%] mx-auto flex flex-col justify-evenly h-full md:flex-row md:justify-between items-center'>
    <div className='flex flex-col px-8 md:px-0 space-y-3 md:w-[500px] lg:w-[394px]'>
<h3 className='text-[#E74040] text-center md:text-start'>
    Problems trying
</h3>
<span className='text-xl lg:text-2xl font-bold text-center md:text-start'>
Met minim Mollie non desert  Alamo est sit cliquey dolor do met sent.
</span>
    </div>


    <div className='w-[306px] md:w-[650px] lg:w-[529px]'>
        <p className='text-sm text-[#737373] text-center md:text-start font-semibold'>Problems trying to resolve the conflict between the two major realms of  Classical physics: Newtonian mechanics </p>
    </div>

</div>

    </div>
    </>
  )
}
