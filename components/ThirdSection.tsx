import React from 'react'
import Image from 'next/image';

import {Montserrat} from "next/font/google";
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })



export default function ThirdSection() {

const bestProducts=[{
    id:1,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/african-girl.png'
},{
    id:2,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/boy-with-wall.png'
},{
    id:3,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/pink-girl.png'
},{
    id:4,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/brown-girl.png'
},{
    id:5,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/long-jacket-boy.png'
},{
    id:6,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/yellow-girl.png'
},{
    id:7,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/boy-with-hoodie.png'
},{
    id:8,
    title:'Graphic Design',
    description:"English Department",
    oldPrice:16.48,
    newPrice:6.48,
    src:'/images/last-boy.png'
}
]



  return (
    <>
    <div className={`${Montserratfont.className} container w-full space-y-20 my-20`}>
<div className='w-[90%] lg:w-[80%] mx-auto space-y-3'>
<p className='text-center text-sm text-[#737373] font-semibold'>Featured Products</p>
<h1 className='text-center text-2xl font-bold'>Best Seller Products</h1>
<p className='text-center text-xs text-[#737373] font-semibold'>Problems trying to solve the conflict between</p>
</div>



<div className='w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
{
    bestProducts.map((product)=>(
        <div key={product.id} className='h-[615px] space-y-2'>

    <div className='h-[85%] md:h-[410px]'>
<Image
src={product.src}
alt='image'
width={2000}
height={2000}
className='w-full h-full object-cover'/>
</div>

<h1 className='text-center mt-5 text-xl font-bold'>{product.title}</h1>
<p className='text-center text-[#737373] font-semibold'>{product.description}</p>
<p className='text-center text-sm font-semibold'><span className='text-[#737373] mr-2'>${product.oldPrice}</span>   <span className='text-green-800'>${product.newPrice}</span></p>
        </div>
    ))
}

</div>
    </div>
    </>
  )
}
