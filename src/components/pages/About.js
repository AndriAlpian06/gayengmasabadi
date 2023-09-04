import React from 'react'
import area from '../../assets/images/area-branding.jpeg'

const About = () => {
    
    return (    
    <div className='grid grid-cols-1 lg:gap-4 lg:grid-cols-2 bg-gray-200 px-4 py-16 lg:py-32'>
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-black sm:text-slate-900 md:text-2xl sm:orange-700">PT GAYENG MAS ABADI</h1>
            <p className="text-sm leading-4 font-medium text-black sm:text-slate-500 dark:sm:text-slate-400">About Us</p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src="https://siteniagaweb.com/gayengmasabadi.com/wp-content/uploads/2023/03/1676977442819.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" />
            <img src="https://gayengmasabadi.com/wp-content/uploads/2023/03/BUS-7.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" />
            <img src="https://gayengmasabadi.com/wp-content/uploads/2023/03/MOTOR-MOBIL-9.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" />
        </div>
        <p className="text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 text-justify text-black">
         Tahun 2018 berdiri satu unit usaha dengan nama Media Iklan namun tidak memiliki badan hukum, Media Iklan bergerak dalam bidang jasa periklanan/ advertisingbaik digital maupun konvensional. Sambutan pasar cukup positif dengan keberadaan Media Iklan sebagai salah satu solusi perusahaan untuk beriklan. Ditengah perjalanannya kami merasa sudah saatnya Media Iklan mempunya legalitas dan akhirnya pada 22 Desember 2022 didirikan PT. Gayeng Mas Abadi tercatat pada Akte Pendirian Perusahaan Nomor 64 dengan Notaris Mohammad fahrozi, S.H. MK PT. Gayeng Mas Abadi bergerak dibidang Advertising Agency (Out Of Home, Digital Out Of Home Indoor & Out Door) Digital Printing dll.
        </p>
    </div>
  )
}

export default About