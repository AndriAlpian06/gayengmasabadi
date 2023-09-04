import React, { useEffect } from 'react'
import img_content from '../assets/images/img-content.png'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Content = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


  return (
    <>
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto py-24">
                <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index" target="_blank">
                    <div className="bg-[#f97316] shadow-lg rounded-lg text-center p-8" data-aos="fade-right" data-aos-duration="2000">
                        <img alt="..." src={img_content} className="shadow-md rounded-full  max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Medan</p>
                    </div>
                    </a>
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index" target="_blank">
                    <div className="bg-[#f97316] shadow-lg rounded-lg text-center p-8 mt-8" data-aos="fade-right" data-aos-duration="3000">
                        <img alt="..." src={img_content} className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Jawa Tengah</p>
                    </div>
                    </a>
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index" target="_blank">
                    <div className="bg-[#f97316] shadow-lg rounded-lg text-center p-8 mt-8" data-aos="fade-right" data-aos-duration="3000">
                        <img alt="..." src={img_content} className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Maluku</p>
                    </div>
                    </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index" target="_blank">
                    <div className="bg-[#f97316] shadow-lg rounded-lg text-center p-8" data-aos="fade-left" data-aos-duration="2000">
                        <img alt="..." src={img_content} className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Makassar</p>
                    </div>
                    </a>
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index" target="_blank">
                    <div className="bg-[#f97316] shadow-lg rounded-lg text-center p-8 mt-8" data-aos="fade-left" data-aos-duration="3000">
                        <img alt="..." src={img_content} className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Papua</p>
                    </div>
                    </a>
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index" target="_blank">
                    <div className="bg-[#f97316] shadow-lg rounded-lg text-center p-8 mt-8" data-aos="fade-left" data-aos-duration="3000">
                        <img alt="..." src={img_content} className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Tangerang</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-2 shadow-lg rounded-full bg-white">
                <img alt="..." src={img_content} className="max-w-full w-16 mx-auto bg-white" />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-black"> Gayeng Mas Abadi</h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-black text-justify"> Tahun 2018 berdiri satu unit usaha dengan nama Media Iklan namun tidak memiliki badan hukum, Media Iklan bergerak dalam bidang jasa periklanan/ advertisingbaik digital maupun konvensional. </p>   
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-black text-justify"> Sambutan pasar cukup positif dengan keberadaan Media Iklan sebagai salah satu solusi perusahaan untuk beriklan. </p>        
            <Link to="/about" target="_blank" className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150 text-black"> Lihat Selengkapnya 
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </Link>
        </div>
        </div>
        <hr className="my-6 border-blue-700 mx-auto w-5/6 lg:my-8" />
    </>
  )
}

export default Content
