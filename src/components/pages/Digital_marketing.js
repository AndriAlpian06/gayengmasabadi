import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import flutter from '../../assets/images/flutter.png'
import apache from '../../assets/images/apache.png'
import laravel from '../../assets/images/laravel.png'
import php from '../../assets/images/php.png'
import ubuntu from '../../assets/images/ubuntu.png'

const Digital_Marketing = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <>
        {/* Digital Marketing  */}
        <div className='px-4'>
            <h1 className='mt-32 text-6xl font-bold text-left px-4 text-orange-700 uppercase'>Digital Marketing</h1>
        </div>
        <div className='px-4 mb-16'>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap px-4 mt-4">
                <h1 className='text-orange-700 text-4xl font-bold'>Spesifikasi Aplikasi</h1>
            </div>
            <div class="grid gap-4 grid-cols-2 py-8">
                <div className='col-span-2 text-3xl text-orange-700 font-bold'>Software</div>
                <div className='text-2xl text-right text-orange-700 font-bold'>
                    Mobile Apps :
                </div>
                <div className='text-2xl text-left text-orange-700 font-bold'>
                    Flutter by Google
                </div>
                <div className='text-2xl text-right text-orange-700 font-bold'>
                    CMS Dashboard :
                </div>
                <div className='text-2xl text-left text-orange-700 font-bold'>
                    PHP Framework Laravel 8
                </div>
                <div className='text-2xl text-right text-orange-700 font-bold'>
                    Database :
                </div>
                <div className='text-2xl text-left text-orange-700 font-bold'>
                    MySql
                </div>
            </div>
            <h1 className='text-orange-700 text-3xl font-bold py-8'>Technology</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4">
                <div className='px-12'>
                    <img src={flutter} />
                </div>
                <div className='px-12'>
                    <img src={apache} />
                </div>
                <div className='px-12'>
                    <img src={laravel} />
                </div>
                <div className='px-12'>
                    <img src={php} />
                </div>
                <div className='px-12'>
                    <img src={ubuntu} />
                </div>
            </div>
            <h1 className='text-orange-700 text-3xl font-bold py-16'>Aplikasi yang sudah di buat</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                <div className='px-16 py-4 drop-shadow-lg'>
                    <img src='https://gayengmasabadi.com/wp-content/uploads/2023/03/apk-alquran-945x2048.jpg' />
                </div>
                <div className='px-16 py-4 drop-shadow-lg'>
                    <img src='https://gayengmasabadi.com/wp-content/uploads/2023/03/apk-cakra-yudha-945x2048.jpg' />
                </div>
                <div className='px-16 py-4 drop-shadow-lg'>
                    <img src='https://gayengmasabadi.com/wp-content/uploads/2023/03/apk-umroh-945x2048.jpg' />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 px-4">
                <div className='px-16 py-4 drop-shadow-lg'>
                    <h3 className='text-black text-left font-bold'>Software Development</h3>
                    <p className='text-black text-left'>Software Consulting</p>
                    <p className='text-black text-left'>Custom Software Development</p>
                    <p className='text-black text-left'>Digital Product Development</p>
                    <p className='text-black text-left'>Maintenance & Support</p>
                </div>
                <div className='px-16 py-4 drop-shadow-lg'>
                    <h3 className='text-black text-left font-bold'>Pengembangan</h3>
                    <p className='text-black text-left'>IOS & Android</p>
                    <p className='text-black text-left'>Development</p>
                    <p className='text-black text-left'>Web Development</p>
                    <p className='text-black text-left'>Systemintegration</p>
                </div>
            </div>
            <h1 className='text-orange-700 text-3xl font-bold py-16'>SOSMED MANAGEMENT</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                <div className='px-16 py-4 drop-shadow-lg'>
                    <img src='https://gayengmasabadi.com/wp-content/uploads/2023/03/sosial-media.jpg' />
                    <p className='text-black mt-8 text-left'>SOSMED MANAGEMENT</p>
                    <div>
                        <a className='text-black mt-8 px-4 bg-orange-700'><p className='text-left'>Cek brochure</p></a>
                    </div>
                    
                </div>
                <div className='px-16 py-4 drop-shadow-lg'>
                    <img src='https://gayengmasabadi.com/wp-content/uploads/2023/03/sosial-media.jpg' />
                    <p className='text-black mt-8 text-left'>SOSMED MANAGEMENT</p>
                    <a className='text-black mt-8'><p className='text-left'>Cek brochure</p></a>
                </div>
            </div>
        </div>
    
        
    </>
  )
}

export default Digital_Marketing