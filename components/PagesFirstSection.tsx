import React from 'react';
import {Montserrat} from "next/font/google";
import { FaChevronRight } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";

import { Button } from './ui/button';
import Image from 'next/image';
import Footer from './Footer';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

export default function PagesFirstSection() {
  return (
    <>
<div className={`${Montserratfont.className} container w-full   space-y-20`}>

<div className='first-part w-[80%] mx-auto flex flex-col items-center md:flex-row justify-between mt-20'>

<h1 className='text-3xl font-bold'>Shop</h1>
<div className='flex items-center space-x-2'><span className='font-bold '>Home</span><FaChevronRight className='text-[#737373] mr-2'/><span>Shop</span></div>

</div>

<div className='second-part   w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 h-[1628] lg:max-h-[271px]'>

<div className='first-col '>
<Image
src={'/images/brown-hair-girl.png'}
alt='brown-hair'
width={1000}
height={1000}
className='w-full  h-auto'/>
</div>

<div className='second-col'>
<Image
src={'/images/blue-dress-girl.png'}
alt='brown-hair'
width={1000}
height={1000}
className='w-full  h-auto'/>
</div>


<div className='third-col'>
<Image
src={'/images/white-cloth-girl.png'}
alt='white-cloth-girl'
width={1000}
height={1000}
className='w-full  h-auto'/>
</div>


<div className='fourth-col'>
<Image
src={'/images/two-girls.png'}
alt='two-girls'
width={1000}
height={1000}
className='w-full  h-auto'/>
</div>


<div className='fifth-col'>
<Image
src={'/images/two-teenager.png'}
alt='brown-hair'
width={1000}
height={1000}
className='w-full  h-auto'/>
</div>
</div>

<div className='third-part flex flex-col justify-center space-y-4 md:space-y-0 md:flex-row items-center md:justify-between w-[80%] mx-auto'>
<div className='text-[#737373] font-semibold'><h1>Showing All The Results</h1></div>
<div className='text-[#737373] font-semibold flex items-center space-x-4'><h1>Views</h1><BsFillGridFill/><VscChecklist/></div>
<div><div className='relative'>
<input type="text" placeholder='Popularity' className='w-[70%] md:w-full  px-1 py-2 border-2  rounded-sm'/>
<Button className='absolute -right-10  md:right-0  bg-[#23a6f0] px-6 py-[1.35rem]  text-white font-semibold rounded-sm'>Filter</Button>
</div></div>


</div>
</div>
<Footer/>
    </>
  )
}
