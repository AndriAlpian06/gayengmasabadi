// import { Menu, Transition } from '@headlessui/react'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'

import MobileNavbar from './MobileNavbar'

import { Link } from 'react-router-dom'


const Navbar = () => {
    

    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'fixed top-0 left-0 right-0 w-full bg-white z-10 border-b-orange-700' : 'top-0 left-0 right-0 bg-white w-full absolute z-10'}>
        <MobileNavbar />
        <div className="hidden lg:block py-4">
            <div className="container">
                <nav className="flex items-center justify-around">
                    <div className="flex items-center gap-x-2">
                        <a href="/" className=""><img src={Logo} className='w-18 h-[50px] ml-4' alt='Logo'></img></a>
                    </div>
                    <div className="flex items-center gap-x-4 uppercase font-bold">    
                        <Link to='/' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>Home</Link>
                        <Link to='/about' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>About</Link>
                        <Link to='/videotron' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>Videotron</Link>
                        <Link to='/branding' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>Branding</Link>
                        <Link to='/billboard' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>Billboard</Link>
                        <Link to='/digital_marketing' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>Digital Marketing</Link>
                        <Link to='/contact' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-[#f97316] hover:border-b-2 hover:border-[#f97316] p-4'}>Contact</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar