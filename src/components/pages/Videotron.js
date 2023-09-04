import React, { useState, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Videotron = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    {/* Outdoor */}
    const [selectedCategoryIndoor, setSelectedCategoryIndoor] = useState('AllIndoor');

    const dataIndoor = [
    { id: 1, category: 'Bandara', name: 'Bandara 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/1676975064001.jpg' },
    { id: 2, category: 'Kementrian', name: 'Kementrian 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/KEMENTRIAN-3.jpg' },
    { id: 3, category: 'Rumah_Sakit', name: 'Rumah Sakit 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/RUMAH-SAKIT-3.jpg' },
    { id: 4, category: 'Stasiun_Kereta_Api', name: 'Stasiun Kereta Api 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/STASIUN-KERETA-API-2.jpg' },
    { id: 5, category: 'Bandara', name: 'Bandara 2', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/1676975035166.jpg' },
    { id: 6, category: 'Kementrian', name: 'Kementrian 2', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/KEMENTRIAN-1.jpg' },
    { id: 7, category: 'Rumah_Sakit', name: 'Rumah Sakit 2', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/RUMAH-SAKIT-1.jpg' },
    { id: 8, category: 'Stasiun_Kereta_Api', name: 'Stasiun Kereta Api 2', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/STASIUN-KERETA-API-3.jpg' },
    ];

    const filteredDataIndoor = selectedCategoryIndoor === 'AllIndoor' ? dataIndoor : dataIndoor.filter(item => item.category === selectedCategoryIndoor);

    {/* Outdoor */}
    const [selectedCategoryOutdoor, setSelectedCategoryOutdoor] = useState('AllOutdoor');

    const dataOutdoor = [
    { id: 1, category: 'Garut', name: 'Garut 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/Garut.jpg' },
    { id: 2, category: 'Karawang', name: 'Karawang 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/KERAWANG.jpg' },
    { id: 3, category: 'Lembang', name: 'Lembang 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/LEMBANG.jpg' },
    { id: 4, category: 'Sentul', name: 'Lembang 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/SENTUL.jpg' },
    { id: 5, category: 'Soreang', name: 'Soreang 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/SOREANG.jpg' },
    { id: 6, category: 'Subang', name: 'Subang 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/SUBANG.jpg' },
    { id: 7, category: 'Tasikmalaya', name: 'Tasikmalaya 1', img:'https://gayengmasabadi.com/wp-content/uploads/2023/03/Tasikmalaya.jpg' },
    ];

    
    const filteredDataOutdoor = selectedCategoryOutdoor === 'AllOutdoor' ? dataOutdoor : dataOutdoor.filter(item => item.category === selectedCategoryOutdoor);

  return (
    <>
        {/* Videotron Indoor  */}
        <div className='px-4'>
            <h1 className='mt-32 text-6xl font-bold text-left px-4 text-orange-700'>VIDEOTRON</h1>
        </div>
        <div className='px-4'>
            <h1 className='text-orange-700 text-6xl font-bold mt-16 left-0 top-0 uppercase text-left px-4'>Videotron Indoor</h1>
            <div className="flex items-center justify-start py-4 md:py-8 flex-wrap px-4 mt-4">
                <button
                    type="button"
                    className={`text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-orange-700 dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${selectedCategoryIndoor === 'AllIndoor' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryIndoor('AllIndoor')}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryIndoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryIndoor('Bandara')}
                >
                    BANDARA
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryIndoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryIndoor('Kementrian')}
                >
                    KEMENTRIAN
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryIndoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryIndoor('Rumah_Sakit')}
                >
                    RUMAH SAKIT
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryIndoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryIndoor('Stasiun_Kereta_Api')}
                >
                    STASIUN KERETA API
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {filteredDataIndoor.map(item => (
                    <div key={item.id}>
                        <img className="h-auto max-w-full rounded-lg" data-aos="fade-up" data-aos-duration="1000"  src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
        {/* Videotron Outdoor  */}
        <div className='px-4 mb-16'>
            <h1 className='text-orange-700 text-6xl font-bold mt-32 left-0 top-0 uppercase text-left px-4'>Videotron Outdoor</h1>
            <div className="flex items-center justify-start py-4 md:py-8 flex-wrap px-4 mt-4">
                <button
                    type="button"
                    className={`text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-orange-700 dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${selectedCategoryOutdoor === 'AllOutdoor' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('AllOutdoor')}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Garut')}
                >
                    GARUT
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Karawang')}
                >
                    KARAWANG
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Lembang')}
                >
                    LEMBANG
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Sentul')}
                >
                    SENTUL
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Soreang')}
                >
                    SOREANG
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Subang')}
                >
                    SUBANG
                </button>
                <button
                    type="button"
                    className={`text-orange-700 border border-orange-700 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-orange-700 dark:focus:ring-orange-800 ${selectedCategoryOutdoor === 'Bandara' ? 'bg-orange-700 text-orange-700' : ''}`}
                    onClick={() => setSelectedCategoryOutdoor('Tasikmalaya')}
                >
                    TASIKMALAYA
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {filteredDataOutdoor.map(item => (
                    <div key={item.id}>
                        <img className="h-auto max-w-full rounded-lg" data-aos="fade-up" data-aos-duration="1000"  src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Videotron