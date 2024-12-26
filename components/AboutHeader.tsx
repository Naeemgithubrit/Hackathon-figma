"use client";

import Link from "next/link";
import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu visibility

  return (
    <div className="flex justify-between items-center w-full border-b h-20 max-w-screen-xl mx-auto px-4 lg:px-8">
      {/* Logo */}
      <Link href={"/"}>
        <h1 className="font-montserrat text-black text-2xl font-bold">
          Bandage
        </h1>
      </Link>

      {/* Icons + Hamburger Menu */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Search, Cart, and Heart Icons */}
        <BsSearch className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
        <BsCart className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
        <IoIosHeartEmpty className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />

        {/* Hamburger Menu */}
        <button
          className="text-black lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-6">
        <Link href="/loginPage">
          <button className="hover:bg-black hover:text-white transition-all duration-300 text-blue-400 font-bold py-2 px-5 rounded-md border border-blue-400">
            Login
          </button>
        </Link>
        <Link href={"/teamPage"}>
          <button className="flex justify-center items-center gap-2 font-montserrat w-[200px] h-[48px] bg-[#23A6F0] hover:bg-blue-600 text-white text-sm font-bold rounded-md transition-all duration-300">
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 lg:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {/* Navigation Links */}
            <Link
              href={"/"}
              className="text-black font-montserrat text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={"/blog"}
              className="text-black font-montserrat text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href={"/pricing"}
              className="text-black font-montserrat text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href={"/contact"}
              className="text-black font-montserrat text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Login and Become a Member Buttons */}
            <Link href="/loginPage">
              <button
                className="hover:bg-black hover:text-white transition-all duration-300 text-blue-400 font-bold py-2 px-5 w-3/4"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </button>
            </Link>
            <Link href={"/teamPage"}>
              <button
                className="flex justify-center items-center gap-2 font-montserrat w-3/4 h-[48px] bg-[#23A6F0] hover:bg-blue-600 text-white text-sm font-bold rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
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
          </nav>
        </div>
      )}
    </div>
  );
}
