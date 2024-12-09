import React from 'react';
import {Montserrat} from "next/font/google";
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPiedPiperHat } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function AboutUsSixthSection() {
  return (
   <>
<div className={`${Montserratfont.className} container w-full py-16`}>
<div className='w-[80%] mx-auto space-y-20'>
<div className='first-div md:w-[607px] mx-auto flex flex-col items-center space-y-3'>
<h1 className='text-3xl font-bold '>Big Companies Are Here</h1>
<p className='text-sm font-semibold text-[#737373] text-center'>
Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
</p>
</div>

<div className='second-div  flex flex-col md:flex-row items-center justify-between space-x-4 space-y-4 md:space-y-0'>

<FaHooli className='w-24 h-24'/>
<FaLyft className='w-24 h-24'/>
<FaPiedPiperHat className='w-24 h-24'/>
<FaStripe className='w-24 h-24'/>
<FaAws className='w-24 h-24'/>
<FaRedditAlien className='w-24 h-24'/>
</div>


</div>
    </div>



   </>
  )
}
