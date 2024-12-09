import React from 'react'
import {Montserrat} from "next/font/google";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function AboutUsThirdSection() {
  return (
    <>
    <div className={`${Montserratfont.className} container w-full py-[100px] md:py-5 h-[1006px] md:h-auto`}>
<div className=' h-full w-[80%] mx-auto md:px-8 flex flex-col justify-between md:flex-row items-center'>
<div className='first-div flex flex-col justify-center items-center space-y-2'>
<h1 className='text-5xl font-bold'>15K</h1>
<span className='text-sm font-semibold text-[#737373]'>Happy Customers</span>
</div>

<div className='second-div flex flex-col justify-center items-center space-y-2'>
<h1 className='text-5xl font-bold'>150K</h1>
<span className='text-sm font-semibold text-[#737373]'>Monthly Visitors</span>
</div>

<div className='third-div flex flex-col justify-center items-center space-y-2'>
<h1 className='text-5xl font-bold'>15</h1>
<span className='text-sm font-semibold text-[#737373]'>Countries WorldWide</span>
</div>

<div className='fourth-div flex flex-col justify-center items-center space-y-2'>
<h1 className='text-5xl font-bold'>100+</h1>
<span className='text-sm font-semibold text-[#737373]'>Top Partner's</span>
</div>

    </div>
    </div>
    </>
  )
}
