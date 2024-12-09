"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

const SHEET_SIDES = ["top"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
           <GiHamburgerMenu className="mr-2"/>
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="flex flex-col items-center justify-center mt-9 space-y-4">
                <ul className="flex flex-col space-y-3">
                   <Link href={'/'}> <li>Home</li></Link>
                   <Link href={''}> <li>Product</li></Link>
                   <Link href={'/about-us'}><li>About</li></Link>
                   <Link href={'/pages'}><li>Pages</li></Link>
                   <Link href={'/contact'}> <li>Contact</li></Link>
                    </ul>
                    <div className="flex flex-col space-y-3 justify-center items-center">
                    <p className="flex items-center space-x-1 text-[#23a6f0]"><FaRegUser/><span className='font-bold'>Login / Register</span></p>
                    <p className="text-[#23a6f0] text-center"><BsSearch/></p>
                    <p className="text-[#23a6f0] text-center"><BsCart/></p>
                    <p className="text-[#23a6f0] text-center"><IoIosHeartEmpty/></p>
                    </div>
                
            </div>
           
            <SheetFooter>
              <SheetClose asChild>
                
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
