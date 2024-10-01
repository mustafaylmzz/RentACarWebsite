import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ArabaListesi } from '../ArabaListesi'

const KampanyalıAraclar = () => {
  return (
    <section className='bg-gray-200 '>
        <div className='p-10 text-center text-2xl font-extrabold text-blue-500'>
            <h1>Kampanyalı Vitrin Araçlarımız</h1>
            <p>Çok uygun fiyatlara, en konforlu ve kaliteli araçlar</p>
        </div>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 py-8'>
            {
                ArabaListesi.map((arabalar,index)=>(
                    arabalar.kampanya &&
                    <div key={index} className='border-2 rounded-xl border-white flex flex-col'>
                        <h1 className='p-2 text-xl font-semibold px-5'>
                        {arabalar.title}
                        </h1>

                        <div className=''>
                            <img src={arabalar.image} alt="" className='w-full h-40 object-cover'/>
                        </div>
                        <div className='mt-2 p-2 bg-white rounded-lg relative flex-grow' style={{background: 'linear-gradient(to bottom right, #ffffff 70%, rgb(229 231 235) 10%)', backgroundSize: '100% 100%'}}>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-sm font-bold mb-1">Kişi</h2>
                                    <p className="text-lg">{arabalar.skills.kisi}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-sm font-bold mb-1">Bagaj</h2>
                                    <p className="text-lg">{arabalar.skills.bagaj}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-sm font-bold mb-1">Yakıt</h2>
                                    <p className="text-lg">{arabalar.skills.yakıt}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-sm font-bold mb-1">Vites</h2>
                                    <p className="text-lg">{arabalar.skills.vites}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-sm font-bold mb-1">Klima</h2>
                                    <p className="text-lg">{arabalar.skills.klima}</p>
                                </div>
                            </div>
                            <button className="absolute bottom-2 right-1 font-semibold flex items-center justify-center gap-2 p-2 text-black bg-white border-2 rounded-xl border-gray-300 hover:border-none group" >
                                Fiyatı İncele
                                <FaArrowRight className="w-[15px] text-xl group-hover:translate-x-1 group-hover:-rotate-45 duration-300" />
                            </button>
                        </div>
                        
                    </div>
                    
                ))
            } 
        </div>
        <div className="flex justify-center py-4">
            <button className="w-[400px] sm:w-[550px] px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600">
              <Link to="/araclar">TÜM ARAÇLARI GÖR</Link>
            </button>
        </div>
    </section>
  )
}

export default KampanyalıAraclar
