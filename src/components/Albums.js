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
                    <div className='w-4/5 mx-auto'>
                        <Slide2 />
                    </div>
                    {/* <div id="gallery" className="relative w-full" data-carousel="slide">
                        
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                            </div>
                        </div>
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
        <hr className="my-6 border-blue-700 mx-auto w-5/6 lg:my-8" />
    </>
  )
}
