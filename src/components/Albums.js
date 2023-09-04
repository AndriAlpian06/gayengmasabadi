import React, { Component, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Slide2 from './carousel/CarouselSlider';

export const Albums = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <>
        <div className='py-2' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className='mx-auto text-center mt-8 py-2'>
                <p className='font-bold text-4xl mb-8 text-blue-700 '>Albums</p>
                <p className='font-bold text-6xl mt-8'><span className='text-blue-700'>PT GAYENG MAS</span><span className='text-orange-700'> ABADI</span></p>
            </div>
            <div className='px-8 py-12'>
                <div className='grid gap-4 grid-cols-1'>
                    {/* <div className='w-4/5 mx-auto'>
                        <Slide1 />
                    </div> */}
                    <div className='w-4/5 mx-auto'>
                        <Slide2 />
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-6 border-blue-700 mx-auto w-5/6 lg:my-8" />
    </>
  )
}
