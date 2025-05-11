import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
      <BsEnvelopePaper className='text-white mt-20 w-16 h-16' />
      <h1 className='text-white text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest'>Your Travel Journey Starts Here</h1>
      <p className='text-white mt-3 text-xs sm:text-sm'>Sign up and we&apos;ll send the best deals to you</p>
      {/* Subscription input and buttons */}
      <div className='w-full'>
        <input type="text" placeholder='Email' className='bg-white px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:[40%] block mx-auto rounded-lg outline-none' />
        <button className='bg-blue-900 px-6 py-3.5 text-white hover:bg-blue-950 transition-all duration-200
        mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto block rounded-lg outline-none cursor-pointer'>
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter