import React, { useState, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Branding = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    {/* Outdoor */}
    const [selectedCategory, setSelectedCategory] = useState('All');

    const data = [
    { id: 1, category: 'Angkot', name: 'Angkot 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/ANGKOT-5.jpg' },
    { id: 2, category: 'Bus', name: 'Bus 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/BUS-7.jpg' },
    { id: 3, category: 'Kapal_Asdp', name: 'Kapal Asdp 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/KAPAL-ASDP-9-scaled.jpg' },
    { id: 4, category: 'Kereta_Api', name: 'Kereta Api 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/KERETA-API-9.jpg' },
    { id: 5, category: 'Motor_Mobil', name: 'Motor Mobil 2', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/MOTOR-MOBIL-9.jpg' }
    ];

    const filteredData = selectedCategory === 'All' ? data : data.filter(item => item.category === selectedCategory);

  return (
    <>
        {/* Branding  */}
        <div className='px-4'>
            <h1 className='mt-32 text-6xl font-bold text-left px-4 text-orange-700 uppercase'>Branding</h1>
        </div>
        <div className='px-4 mb-16'>
            <div className="flex items-center justify-start py-4 md:py-8 flex-wrap px-4 mt-4">
                <button
                    type="button"
                    className={`text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-orange-700 dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${selectedCategory === 'All' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategory('All')}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategory === 'Angkot' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategory('Angkot')}
                >
                    ANGKOT
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategory === 'Bus' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategory('Bus')}
                >
                    BUS
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategory === 'Kapal_Asdp' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategory('Kapal_Asdp')}
                >
                    KAPAL ASDP
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategory === 'Kereta_Api' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategory('Kereta_Api')}
                >
                    KERETA API
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategory === 'Motor_Mobil' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategory('Motor_Mobil')}
                >
                    MOTOR - MOBIL
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {filteredData.map(item => (
                    <div key={item.id}>
                        <img className="h-auto max-w-full rounded-lg" data-aos="fade-up" data-aos-duration="1000"  src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Branding