import React from 'react';
import {Montserrat} from "next/font/google";
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPiedPiperHat } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import Footer from './Footer';

const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function companiesSection() {
  return (
<>

<div className='second-div  flex flex-col md:flex-row items-center justify-between space-x-4 space-y-4 md:space-y-0'>
    
    
<FaHooli className='w-24 h-24'/>
<FaLyft className='w-24 h-24'/>
<FaPiedPiperHat className='w-24 h-24'/>
<FaStripe className='w-24 h-24'/>
<FaAws className='w-24 h-24'/>
<FaRedditAlien className='w-24 h-24'/>
</div>


<Footer/>

</>


  
  )
}
