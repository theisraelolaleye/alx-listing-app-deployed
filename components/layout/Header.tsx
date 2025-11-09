import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../common/Button'
import { FaSearch } from 'react-icons/fa'
import AccomodationType from './AccomodationType'
import { ACCOMODATIONTYPES } from '@/constants'


const Header = () => {
  return (
    <>
      <header className=' flex flex-col gap-4 bg-white py-4'>

        <div className='w-full h-20 flex justify-between px-5 md:px-10 lg:px-[60px] py-2 items-center bg-white ' >

          <Link href='/'  className=' hidden md:block shrink-0 '>
            <Image src="/logo1.svg" alt="Logo" width={100} height={100} />
          </Link>

          <div className=' flex items-center gap-6 max-w-xl: md:max-w-3xl border-2 text-black grow-0 border-[#F6F6F6] shadow-xl  rounded-full px-[10px] py-2 '>

            <div className=' ml-5 flex md:flex-col gap-[6px] '>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" className=' outline-none placeholder:text-[#BEBEBE] ' placeholder='Search for destination' />
            </div>

            <div className=' bg-gray-400 h-12 w-[1px] hidden md:flex '></div>

            <div className=' md:flex-col max-w-10 hidden md:flex  '>
              <label htmlFor="time">Checkin</label>
              <input type="text" id="date" className=' border border-[#F6F6F6] ' placeholder='Add date' />
            </div>

            <div className=' bg-gray-400 h-12 w-[1px] hidden md:flex '></div>

            <div className='  md:flex-col hidden md:flex max-w-20 '>
              <label htmlFor="date">Checkout</label>
              <input type="text" id="date" className=' border border-[#F6F6F6] ' placeholder='Add date' />
            </div>

            <div className=' bg-gray-400 h-12 w-[1px] hidden md:flex '></div>

            <div className='  md:flex-col max-w-20 hidden md:flex '>
              <label htmlFor="date">People</label>
              <input type="text" id="date" className=' border border-[#F6F6F6] ' placeholder='Add guest' />
            </div>


            <p className=' rounded-full'>
              <FaSearch className=' bg-[#FF385C] p-2 rounded-full text-white h-10 w-10 ' />
            </p>

          </div>

          <div className='items-center gap-6 max-w-3xl hidden lg:flex ' >

            <Button className=' hidden md:block'>Login</Button>

            <Button className=' hidden md:block'>Sign Up</Button>
            <Image src="/menu.svg" alt="Menu" width={30} height={30} className=' md:hidden' />
          </div>

        </div>

        <div className=' flex gap-10 items-center justify-center border-t pt-4 overflow-scroll '>
          {ACCOMODATIONTYPES.map((item) => (
            <Link href="#" key={item.title}>
              <AccomodationType image={item.image} title={item.title} />
            </Link>
          ))}

        </div>
      </header>
    </>
  )
}

export default Header