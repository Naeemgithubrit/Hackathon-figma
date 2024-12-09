import React from 'react'
import {Montserrat} from "next/font/google";
import Image from 'next/image';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })
export default function PagesLastSection() {
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
    },{
        id:9,
        title:'Graphic Design',
        description:"English Department",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/long-jacket-boy.png'
    },{
        id:10,
        title:'Graphic Design',
        description:"English Department",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/yellow-girl.png'
    },{
        id:11,
        title:'Graphic Design',
        description:"English Department",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/boy-with-hoodie.png'
    },{
        id:12,
        title:'Graphic Design',
        description:"English Department",
        oldPrice:16.48,
        newPrice:6.48,
        src:'/images/last-boy.png'
    }
    ]
    
  return (
   <>
   <div className={`${Montserratfont.className} conatiner w-full my-20`}>

<div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5  gap-y-10'>
{bestProducts.map((product)=>(
    <div key={product.id} className=''>
<div className='h-[85%] md:h-[375px] '>
<Image
src={product.src}
alt='prodcuct'
width={1000}
height={1000}
className='w-full h-full  object-cover'/>
</div>
<h1 className='text-center mt-5 text-xl font-bold'>{product.title}</h1>
<p className='text-center text-[#737373] font-semibold'>{product.description}</p>
<p className='text-center text-sm font-semibold'><span className='text-[#737373] mr-2'>${product.oldPrice}</span>   <span className='text-green-800'>${product.newPrice}</span></p>

    </div>
))}

</div>


<div className='w-[80%] mx-auto flex items-center justify-center my-16 cursor-pointer'>

<div className='h-16 flex items-center border  rounded-lg text-sm font-[500]'>
<div className='px-4 border-r h-full content-center hover:bg-[#23a6f0] hover:text-white'>First</div>
<div className='flex items-center  h-full content-center'>
<span className='h-full content-center px-3 hover:bg-[#23a6f0] hover:text-white border-r'>1</span>
<span className='h-full content-center px-3 hover:bg-[#23a6f0] hover:text-white border-r'>2</span>
<span className='h-full content-center px-3 hover:bg-[#23a6f0] hover:text-white'>3</span>
</div>
<div className='px-4 border-l h-full content-center text-[#23a6f0] hover:bg-[#23a6f0] hover:text-white'>Next</div>

</div>
</div>

   </div>
   
   </>
  )
}
