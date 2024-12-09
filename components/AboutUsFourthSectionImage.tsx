import React from 'react'
import {Montserrat} from "next/font/google";
import Image from 'next/image';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function AboutUsFourthSectionImage() {
  return (
    <> 
    <div className={`${Montserratfont.className} container w-full my-20 md:my-28 h-[316px] lg:h-[750px] md:py-7`}>
<div className='w-[80%] mx-auto rounded-xl relative h-full'>
<Image
src={'/images/video-card.png'}
alt='video-card'
width={2000}
height={2000}
className='w-full object-cover h-full rounded-xl'
/>
<Image
src={'/images/play.png'}
alt='play'
width={1000}
height={1000}
className='w-[59.65px] h-[59.65px] md:w-[92.6px] md:h-[92.6px] absolute top-1/2 right-1/2 bottom-1/2 left-1/2  -translate-y-1/2  -translate-x-1/2'/>
</div>
    </div>
    </>
  )
}
