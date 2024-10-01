import React from 'react'
import { AiOutlineSafety } from 'react-icons/ai'
import { MdCreditScore, MdOutlineElectricCar } from 'react-icons/md'
import { TiTickOutline } from 'react-icons/ti'
import { WiStars } from 'react-icons/wi'

const AvantajlarBanner = () => {
  return (
    <section className="bg-gray-200 py-10">
        <div className='container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-2 justify-center items-stretch px-4'>
            <div className='flex flex-col items-center text-center lg:text-left p-2 bg-white text-gray-700  shadow-lg rounded-lg flex-1 hover:translate-y-2'>
                <div className='flex gap-4 items-center justify-center lg:justify-start'>
                  <div className='p-4'>
                    <AiOutlineSafety className='text-6xl border-4 rounded-full p-1'/>
                  </div>
                  <h1 className='text-xl text-gray-800 font-bold mb-2 '>Servis Bakımlı Araç Garantisi</h1> 
                </div>
                <p>Araçlarımızın bakımlarını yetkili servislerde düzenli olarak yaparız. Bizim için sizin ve sevdiklerinizin güvenliği her şeyden önce gelir.</p>
            </div>
            <div className='flex flex-col items-center text-center lg:text-left p-2 bg-white text-gray-700  shadow-lg rounded-lg flex-1 hover:translate-y-2 '>
                <div className='flex gap-4 items-center justify-center lg:justify-start'>
                  <div className='p-4'>
                    <MdOutlineElectricCar className='text-6xl border-4 rounded-full p-1'/>
                  </div>
                  <h1 className='text-xl text-gray-800 font-bold mb-2'>Elektrikli Araç İmkanı</h1>
                </div>
                <p >Her ihtiyaca olduğu gibi elektrikli araç deneyimi yaşamak veya içten yanmalı motor kullanmayı tercih etmeyen müşterilerimiz için geniş araç yelpazemizde bu imkanı sağlıyoruz.</p>
            </div>
            <div className='flex flex-col items-center text-center lg:text-left p-2 bg-white text-gray-700  shadow-lg rounded-lg flex-1 hover:translate-y-2 '>
                <div className='flex gap-4 items-center justify-center lg:justify-start'>
                  <div className='p-4'> 
                    <WiStars className='text-6xl border-4 rounded-full p-1'/>
                  </div> 
                  <h1 className='text-xl text-gray-800 font-bold mb-2 '>Hijyende Yüksek Standartlar</h1>
                </div>
                <p >Tüm araçlarımızı 'Nano Gümüş İyon Teknolojisi' ile dezenfekte ediyoruz. Williams Car Care tarafından temizlenen araçlarımız her zaman sizi ve sevdiklerinizi ağırlamaya hazır.</p>
            </div>
            <div className='flex flex-col items-center text-center lg:text-left p-2 bg-white text-gray-700  shadow-lg rounded-lg flex-1 hover:translate-y-2 '>
                <div className='flex gap-4 items-center justify-center lg:justify-start'>
                  <div className='p-4'>
                    <TiTickOutline className='text-6xl border-4 rounded-full p-1'/>
                  </div> 
                  <h1 className='text-xl text-gray-800 font-bold mb-2 '>Kusursuz Müşteri Deneyimi</h1>
                </div>
                <p >En hızlı, en güvenli ve en kolay şekilde aracınıza ulaşmanız için tüm süreçleri minimuma indirdik. Üstelik aracınızı teslim aldıktan ve kullanmaya başladıktan sonra da hep sizinleyiz.</p>
            </div>
            <div className='flex flex-col items-center text-center lg:text-left p-2 bg-white text-gray-700  shadow-lg rounded-lg flex-1 hover:translate-y-2 '>
                <div className='flex gap-4 items-center justify-center lg:justify-start'>
                  <div className='p-4'>
                    <MdCreditScore  className='text-6xl border-4 rounded-full p-1'/>
                  </div> 
                  <h1 className='text-xl text-gray-800 font-bold mb-2 '>Kredi Kartına 12 Ay Taksit İmkanı</h1>
                </div>
                <p >Firmamızdan 12 aya varan taksitli ödeme seçenekleri ile hızlı ve kolay bir şekilde istediğiniz aracı kiralayabilir, yolculuğunuzun tadını özgürce çıkarabilirsiniz.</p>
            </div>
            
        </div>
    </section>
  )
}

export default AvantajlarBanner
