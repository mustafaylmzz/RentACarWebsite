import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AracCarts = ({araba}) => {
  return (
    <div>
       <div key={araba.id} className='border-2 rounded-xl border-white flex flex-col'>
            <h1 className='p-2 text-xl font-semibold px-5'>
              {araba.title}
            </h1>
            <div>
              <img src={araba.image} alt={araba.title} className='w-full h-40 object-cover' />
            </div>
            <div className='mt-2 p-2 bg-white rounded-lg relative flex-grow' style={{ background: 'linear-gradient(to bottom right, #ffffff 70%, rgb(229 231 235) 10%)', backgroundSize: '100% 100%' }}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <h2 className="text-sm font-bold mb-1">Kişi</h2>
                  <p className="text-lg">{araba.skills.kisi}</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm font-bold mb-1">Bagaj</h2>
                  <p className="text-lg">{araba.skills.bagaj}</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm font-bold mb-1">Yakıt</h2>
                  <p className="text-lg">{araba.skills.yakıt}</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm font-bold mb-1">Vites</h2>
                  <p className="text-lg">{araba.skills.vites}</p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-sm font-bold mb-1">Kasa Tipi</h2>
                  <p className="text-lg">{araba.skills.kasa}</p>
                </div>
              </div>
              <button className="absolute bottom-2 right-1 font-semibold flex items-center justify-center gap-2 p-2 text-black bg-white border-2 rounded-xl border-gray-300 hover:border-none group">
                <Link to={`/detail/${araba.id}`}>Fiyatı İncele</Link>
                <FaArrowRight className="w-[15px] text-xl group-hover:translate-x-1 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
    </div>
  )
}

export default AracCarts
