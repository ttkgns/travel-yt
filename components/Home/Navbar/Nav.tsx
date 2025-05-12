'use client'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props = {
  openNav: () => void
}

const Nav = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false)
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      }
      if (window.scrollY < 90) {
        setNavBg(false)
      }
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  },[])

  return (
    <div className={`${navBg ? "bg-blue-950 shadow-md" : ""} fixed transition-all duration-200 h-[12vh] z-[1000] w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='flex items-center justify-center flex-col w-10 h-10 bg-rose-500 rounded-full'>
            <TbAirBalloon className='w-6 h-6 text-white' />
          </div>
          <h1 className='text-white text-xl md:text-2xl font-bold uppercase '>tutku</h1>
        </div>
        
        {/* NavLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block
                  after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full
                  after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">{link.label}</p>
              </Link>
            )
          })}
        </div>

        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          <button className='md:px-12 md:py-2.5 px-8 py-2 text-base hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer bg-white text-black'>Book Now</button>
          {/* Burger Menu */}
          <HiBars3BottomRight onClick={openNav} className='lg:hidden h-8 w-8 cursor-pointer text-white'  />
        </div>
      </div>
    </div>
  )
}

export default Nav