"use client";

import Link from "next/link";
import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu toggle

  return (
    <header className="w-full border-b">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-montserrat text-black text-2xl font-bold">Bandage</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-black text-lg font-medium hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/blog" className="text-black text-lg font-medium hover:text-blue-500 transition">
            Product
          </Link>
          <Link href="/pricing" className="text-black text-lg font-medium hover:text-blue-500 transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-black text-lg font-medium hover:text-blue-500 transition">
            Contact
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/loginPage">
              <button className="hover:bg-black hover:text-white transition-all duration-300 text-blue-400 font-bold py-2 px-5 rounded-md border border-blue-400">
                Login
              </button>
            </Link>
            <Link href="/teamPage">
              <button className="flex items-center gap-2 font-montserrat bg-[#23A6F0] hover:bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-md transition-all duration-300">
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
        </nav>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <BsSearch className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
          <BsCart className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
          <IoIosHeartEmpty className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-50">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="text-black font-medium text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-black font-medium text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="text-black font-medium text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-black font-medium text-lg hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Buttons */}
            <Link href="/loginPage">
              <button
                className="hover:bg-black hover:text-white transition-all duration-300 text-blue-400 font-bold py-2 px-6 rounded-md border border-blue-400 w-3/4"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </button>
            </Link>
            <Link href="/teamPage">
              <button
                className="flex items-center gap-2 font-montserrat bg-[#23A6F0] hover:bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-md transition-all duration-300 w-3/4"
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
    </header>
  );
}
