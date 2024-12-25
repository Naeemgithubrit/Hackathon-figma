"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from 'react'


export default function Header() {
    const pathname = usePathname();
    const conditional = !["/about", "/pricing", "/team", "/contact"].includes(
      pathname
    );
  
    return (
        
        
<div className="flex justify-evenly items-center w-full border-b h-24 max-w-screen-xl mx-auto">
          <Link href={"/"}>
            <h1 className="font-montserrat text-black text-2xl font-bold">
              Bandage
            </h1>
          </Link>
          <div className="hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-8">
            <Link href={"/"} className="text-lg">
              Home
            </Link>
            <Link href={"/blog"} className="text-lg">
              Product
            </Link>
            <Link href={"/pricing"} className="text-lg">
              Pricing
            </Link>
            <Link href={"/contact"} className="text-lg">
              Contact
            </Link>
           
          </div>
          <div className="relative flex justify-center items-center gap-8">
            <div className="hidden lg:flex justify-center items-center">
            <Link href="/loginPage">
            <button className=" hover:bg-black text-blue-400 font-bold py-2 px-4 rounded">
                Login
                

              </button>

            
            </Link>

           <div>
           <Link href={"/teamPage"}>
              
              
           <button className="flex justify-center items-center gap-2 font-montserrat w-[214px] h-[52px] bg-[#23A6F0] text-white text-sm font-bold rounded-sm">

            

Become a member
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="15px"
  viewBox="0 -960 960 960"
  width="15px"
  fill="#ffffff"
>
  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
</svg>

</button>
</Link>



           </div>
             
            </div>
            </div>
            </div>
    )
    }
