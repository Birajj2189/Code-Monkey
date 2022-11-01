import React from 'react'
import Link from 'next/link' 
import Image from 'next/image'

export default function Navbar() {
  return (
     <>
     <header className="bg-fourth-color text-second-color body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
               <img className="w-8 h-8" src="/blog-solid.svg" alt="" />
               <span className="text-first-color font-bold ml-3 text-xl text-">BlogsMonkey</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
               <Link href="/" className="mr-5 cursor-pointer hover:drop-shadow hover:text-first-color">Home</Link>
               <Link href="/blog" className="mr-5 cursor-pointer hover:drop-shadow hover:text-first-color">Popular Blogs</Link>
               <Link href="/about" className="mr-5 cursor-pointer hover:drop-shadow hover:text-first-color">About us</Link>
               <Link href="/contact" className="mr-5 cursor-pointer hover:drop-shadow hover:text-first-color">Contact us</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
          </button>
          </div>
     </header>
     </>
  )
}
