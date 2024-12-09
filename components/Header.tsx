import React from 'react';
import {Montserrat} from "next/font/google"
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import Link from 'next/link';
import {  SheetSide } from './SheetBar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Montserratfont=Montserrat({
    weight:['400','500','600','700'],
    style:"normal",
    subsets:["latin"]
  })
export default function Header() {
  return (
    <>
    <header className='w-full max-w-5xl md:max-w-full'>
        <div className={`${Montserratfont.className} hidden  first-header bg-[#252b42] text-white w-full xl:flex items-center justify-between px-7 py-4 `} style={{ fontWeight: 700 }}>
<div className='flex items-center space-x-7'>
<span className='flex items-center space-x-2'><IoCallOutline className='mr-2'/>(225) 555-0118</span>
<span className='flex items-center space-x-2'><BsEnvelope className='mr-2'/>michelle.rivera@example.com</span>
</div>

<div>
    <p className=''>Follow Us  and get a chance to win 80% off</p>
</div>

<div className='flex items-center space-x-3'>
<p>Follow Us :</p>
<FaInstagram/>
<FaYoutube/>
<FaFacebook/>
<FaTwitter/>
    </div> 


        </div>


        <div className={`${Montserratfont.className} w-full second-header bg-white text-black flex items-center justify-between h-[58px] pl-3 md:px-3 lg:px-4  my-4`}>

<div className='flex items-center space-x-8 lg:space-x-24'>
<h1 className='text-lg md:text-2xl font-bold ml-8 md:mx-0'>Bandage</h1>
<ul className='hidden md:flex items-center space-x-2 lg:space-x-6 font-bold text-[#737373]'>
<Link href={'/'}><li>Home</li></Link>
<Link href={'/shop'}>
<DropdownMenu>
  <DropdownMenuTrigger><li className='flex items-center '>Shop<RiArrowDropDownLine className='w-4 h-4'/></li></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem className='cursor-pointer'>Men's</DropdownMenuItem>
    <DropdownMenuItem className='cursor-pointer'>Women's</DropdownMenuItem>
    <DropdownMenuItem className='cursor-pointer'>Kids</DropdownMenuItem>
    <DropdownMenuItem className='cursor-pointer'>Adults</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</Link>
<Link href={'/about-us'}><li>About</li></Link>
<Link href={'/blog'}><li>Blog</li></Link>
<Link href={'/contact'}><li>Contact</li></Link>
<Link href={'/pages'}><li>Pages</li></Link>
</ul>
</div>


<div className='flex items-center ml-8 lg:ml-0 space-x-4 lg:space-x-7 md:text-[#23A6F0]'>
    <div className='hidden md:flex items-center space-x-1 lg:space-x-2'><FaRegUser/><span className='font-bold'>Login/Register</span></div>
<div className='flex items-center  space-x-6 lg:space-x-8'>
    <BsSearch className='w-5 h-5'/>
    <span className='flex items-center space-x-1'><BsCart className='md:w-5 md:h-5'/><p className='hidden md:block'>1</p></span>
    <span className='hidden md:flex items-center space-x-1'><IoIosHeartEmpty className='md:w-5 md:h-5'/><p>1</p></span>
<span>
<SheetSide/>
</span>
</div>
</div>

        </div>
    </header>
    </>
  )
}
