import React from 'react';
import {Montserrat} from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from 'next/image';
const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })

const teamMemebers=[{
    id:1,
    name:"Username",
    profession:"Profession",
    src:"/images/orange-girl-smile.png"
},{
    id:2,
    name:"Username",
    profession:"Profession",
    src:"/images/red-girl-smile.png"
},{
    id:3,
    name:"Username",
    profession:"Profession",
    src:"/images/boy-smile.png"
},
]

export default function AboutUsFifthSection() {
  return (
   <>
   <div className={`${Montserratfont.className} container w-full py-14 mb-20`}>
<div className='w-[80%] mx-auto space-y-20'>
<div className='first-div md:w-[607px] mx-auto flex flex-col items-center space-y-3'>
<h1 className='text-3xl font-bold '>Meet Our Team</h1>
<p className='text-sm font-semibold text-[#737373] text-center'>
Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
</p>

</div>
<div className='second-div grid grid-cols-1 md:grid-cols-3 gap-14'>
{teamMemebers.map((member)=>(
    <div key={member.id} className='h-[316px]'>
<div className='h-[231px]'>
<Image
src={member.src}
alt='memeber'
width={1000}
height={1000}
className='w-full h-full object-cover'/>
</div>
<div className='space-y-3 mt-6'>
<h1 className='text-center text-xl font-bold'>{member.name}</h1>
<p className='text-center text-sm text-[#737373] font-semibold'>{member.profession}</p>
<div className='flex space-x-5 text-[#23A6F0] justify-center '>

    <FaFacebook className='w-5 h-5'/>
    <FaInstagram className='w-5 h-5'/>
    <FaTwitter className='w-5 h-5'/>
</div>
</div>

    </div>
))}

    
</div>

</div>
   </div>
   </>
  )
}
