import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const AracBilgileri = [
  {
    title: "2018 Megane iCon 1.5 Diesel Otomatik",
    image: "https://www.dokuzisik.com.tr/r/w-350_h-200_zc-2/cars/kapak/megane.png",
    skills: {
      kisi: 5,
      bagaj: 434,
      yakıt: "Dizel",
      vites: "Oto.",
      klima: "Var",
    },
  },
  {
    title: "2017 İnsignia Excellence Enjoy 1.6",
    image: "https://www.dokuzisik.com.tr/r/w-350_h-200_zc-2/cars/kapak/opel-insignia.png",
    skills: {
      kisi: 5,
      bagaj: 490,
      yakıt: "Dizel",
      vites: "Oto.",
      klima: "Var",
    },
  },
  {
    title: "2017 Opel Astra Design Edition 1.6 130hp",
    image: "https://www.dokuzisik.com.tr/r/w-350_h-200_zc-2/cars/kapak/astra.png",
    skills: {
      kisi: 5,
      bagaj: 404,
      yakıt: "Dizel",
      vites: "Oto.",
      klima: "Var",
    },
  },
]

const OneCikanlar = () => {
  return (
    <section className="relative" style={{ backgroundImage: 'url("https://www.dokuzisik.com.tr/uploads/anasayfa/onecikan-bg.jpg")' }}>
        <div className=' text-white p-2  text-2xl font-extrabold'>
          <h1 >Öne Çıkanlar</h1>
          <p >en çok incelenen ve memnun kalınmış araçlar</p>
        </div>
      
        
        <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 px-4 py-8">
        
          {
            AracBilgileri.map((aracbilgisi, index) => (
              <div key={index} className="relative  flex flex-col shadow-lg rounded-lg border-2 p-4 max-w-xs mx-auto">
                <h1 className="text-xl font-semibold mb-2 rounded-lg p-2" style={{ background: 'linear-gradient(to bottom right, #ffffff 70%, rgba(255, 255, 255, 0) 10%)', backgroundSize: '100% 100%' }}>
                  {aracbilgisi.title}
                </h1>

                <div className="relative">
                  <img src={aracbilgisi.image} alt={aracbilgisi.title} className="w-full h-40 object-cover transform rotate-[-5deg] translate-x-[-10px]" />
                </div>

                <div className="mt-4 p-4 bg-white rounded-lg relative"style={{background: 'linear-gradient(to bottom right, #ffffff 70%, #ffe110 10%)',backgroundSize: '100% 100%',}}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <h2 className="text-sm font-bold mb-1">Kişi</h2>
                      <p className="text-lg">{aracbilgisi.skills.kisi}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h2 className="text-sm font-bold mb-1">Bagaj</h2>
                      <p className="text-lg">{aracbilgisi.skills.bagaj} L</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h2 className="text-sm font-bold mb-1">Yakıt</h2>
                      <p className="text-lg">{aracbilgisi.skills.yakıt}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h2 className="text-sm font-bold mb-1">Vites</h2>
                      <p className="text-lg">{aracbilgisi.skills.vites}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h2 className="text-sm font-bold mb-1">Klima</h2>
                      <p className="text-lg">{aracbilgisi.skills.klima}</p>
                    </div>
                  </div>

                 
                  <button className="absolute bottom-2 right-1 font-semibold flex items-center justify-center gap-2 p-2 text-black bg-white border-2 rounded-xl border-gray-300 hover:bg-opacity-40 group" >
                    Fiyatı İncele
                    <FaArrowRight className="w-[15px] text-xl group-hover:translate-x-1 group-hover:-rotate-45 duration-300" />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      
    </section>
  )
}

export default OneCikanlar
