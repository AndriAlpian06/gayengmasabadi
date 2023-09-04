import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Logo from '../assets/images/logo.png'
// import DropdownLink from './DropdownLink'
import { Link } from 'react-router-dom'
// import JadwalDokter from './pages/JadwalDokter'

export default function MobileNavbar() {

    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false)

  return (
    <Menu as={'div'} className='flex lg:hidden items-center justify-between py-2 px-4'>
        <div className='flex px-4 items-center'>
            <a href="#" className="text-white font-medium mr-6"><img src={Logo} className='w-18 h-[50px]'></img></a>
        </div>

        <Menu.Button className='focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={color ? 'w-6 h-6 text-orange-700' : 'w-6 h-6 text-orange-700'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-8 py-1 rounded-lg w-56 overflow-hidden'>

            <Link to="/" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">BERANDA</Link>
            <Link to="/about" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">ABOUT</Link>
            <Link to="/videotron" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">VIDEOTRON</Link>
            <Link to="/branding" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">BRANDING</Link>
            <Link to="/billboard" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">BILLBOARD</Link>
            <Link to="/digital_marketing" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">DIGITAL MARKETING</Link>
            <Link to="/contact" className="px-4 py-2 text-sm hover:bg-gray-100 text-orange-700 hover:text-black block">CONTACT</Link>
          </Menu.Items>
        </Transition>
    </Menu>
  )
}
