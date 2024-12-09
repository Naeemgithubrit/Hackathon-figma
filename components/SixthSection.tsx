import React from 'react'
import {Montserrat} from "next/font/google";
import { MdAccessAlarm } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })



  const featuredPosts=[
    {
    id:1,
    title:"Loudest à la Madison #1 ",
    description:"We focus on ergonomics and meeting you where you work. It's only a keystroke away",
    src:"/images/road.png"
  },{
    id:2,
    title:"Loudest à la Madison #1 ",
    description:"We focus on ergonomics and meeting you where you work. It's only a keystroke away",
    src:"/images/foxy.png"
  },{
    id:3,
    title:"Loudest à la Madison #1 ",
    description:"We focus on ergonomics and meeting you where you work. It's only a keystroke away",
    src:"/images/umbrella.png"
  }
]

export default function SixthSection() {
  return (
  <>

<div className={`${Montserratfont.className} container w-full max-w-[1440px] h-[2302px] md:max-h-[1044px] pt-32 `}>
<div className='second-conatiner w-[80%] mx-auto'>

<div className='flex flex-col space-y-4'>
<h3 className='font-semibold text-[#23A6F0] text-center'>Practice Advice</h3>
<h1 className='text-4xl font-bold text-center'>Featured Posts</h1>
<p className='text-center font-semibold text-[#737373]'>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>
</div>


<div className=' mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-3'>
{featuredPosts.map((post)=>(
    <div key={post.id} className='h-[606px]'>
<Image
src={post.src}
alt='post'
width={1000}
height={1000}
className='h-[300px] w-full'/>
<div className='px-4 py-4 space-y-3'>
<div className='flex items-center text-xs space-x-3'>
    <span className='text-[#23A6F0]'>Google</span>
    <span className='text-[#737373]'>Trending</span>
    <span className='text-[#737373]'>New</span>
</div>

<div className='font-[500]'>
<p>{post.title}</p>
<p>(L'integral)</p>
</div>
<p className='text-[#737373] text-sm'>{post.description}</p>


<div className='flex items-center justify-between'>
<div className='flex items-center space-x-1 text-xs text-[#737373]'><MdAccessAlarm className='w-3 h-3 text-[#23A6F0]'/><span>22 April 2021</span></div>
<div className='flex items-center space-x-1 text-xs text-[#737373]'><BsGraphUp className='w-3 h-3 text-[#23856d]'/><span>10 comments</span></div>
</div>

<p className='text-sm font-semibold text-[#737373] flex items-center'>Learn More <FaChevronRight className='text-[#23A6F0]'/></p>
</div>


    </div>
))}
</div>

</div>
</div>


  </>
  )
}
