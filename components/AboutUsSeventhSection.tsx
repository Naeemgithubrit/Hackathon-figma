import React from 'react';
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import { GiRobotLeg } from 'react-icons/gi';
import { Button } from './ui/button';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function AboutUsSeventhSection() {
  return (
   <>
   <div className={`${Montserratfont.className} container w-full my-20 flex flex-col md:flex-row h-[636px]`}>
<div className='first-div w-full md:w-[60%] h-full bg-[#2a7cc7] text-white'>

<div className='flex flex-col justify-center w-[300px]  lg:w-[438px] mx-auto h-full space-y-4'>
    <h3 className='text-xl uppercase font-bold text-center md:text-start'>Work with Us</h3>
    <h1 className='text-3xl font-bold uppercase text-center md:text-start'>Now Let's Grow Yours</h1>
    <p className='text-sm font-semibold text-center md:text-start'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
    <Button className='bg-[#2a7cc7] text-white rounded-md hover:bg-[#307cc4] mx-auto md:mx-0 border border-white uppercase w-[132px]'>button</Button>
</div>

</div>
<div className='second-div hidden md:block  md:w-[40%] h-full'>
<Image
src={'/images/last-pink-girl.png'}
alt='pink'
width={2000}
height={2000}
className='w-full h-full object-cover'/>
</div>


   </div>
   </>
  )
}
