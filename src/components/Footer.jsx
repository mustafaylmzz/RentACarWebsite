import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiSahibinden } from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false, // Sayfalandırma noktalarını göstermek için
    infinite: true, // Sonsuz döngü
    speed: 500, // Geçiş hızı
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 2000, // Otomatik oynatma hızı (2 saniye)
    slidesToShow: 3, // İki slayt göster
    slidesToScroll: 1, // Bir slaytı kaydır
    arrows: false, // Okları gizle
    centerMode: true, // Merkezdeki slaytı öne çıkarmak için
    centerPadding: '0', // Merkezdeki slayta padding ekleme
    focusOnSelect: true // Seçili slaytı odaklama
};

const Footer = () => {
  return (
    <footer className='p-10 bg-gray-800 text-white'>
        <div className="container mx-auto">
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>İletişim</h1>
                    <ul className='space-y-1 text-sm'>
                        <li className='cursor-pointer hover:text-secondary duration-200'>Karşıyaka Mah. 825.Sok. 13/4 Gölbaşı/Ankara</li>
                        <li className='cursor-pointer hover:text-secondary duration-200'>0541 953 3880</li>
                        <li className='cursor-pointer hover:text-secondary duration-200'>0312 444 06 06</li>
                        <li className='cursor-pointer hover:text-secondary duration-200'>the.mustafay@gmail.com</li>
                    </ul>
                </div>
                
                <div className='flex items-center justify-center'>
                    <Slider {...settings} className="w-full">
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/cars/markalar/opel.jpg" alt="Opel" className="w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/cars/markalar/fiat.jpg" alt="Fiat" className="w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/cars/markalar/renault.jpg" alt="Renault" className="w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/cars/markalar/dacia.jpg" alt="Dacia" className="w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/test-araclar/test-araclari/cery/png-transparent-chery-qq3-car-chery-tiggo-5-hyundai-motor-company-car-angle-emblem-trademark-thumbnail.png" alt="Chery" className="w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/test-araclar/test-araclari/citroen-elysee/png-transparent-citroen-c3-jaguar-cars-land-rover-citroen-angle-logo-car.png" alt="Citroën" className="w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://www.dokuzisik.com.tr/r/w-104_h-65_zc-2/test-araclar/test-araclari/i20-2024/png-transparent-hyundai-motor-company-car-logo-hyundai-starex-hyundai-emblem-text-trademark.png" alt="HYUNDAI" className="w-full h-auto object-contain" />
                        </div>
                    </Slider>
                </div>
                <div className='space-y-4  px-20'>
                    <h1 className='text-2xl font-bold'>Sosyal Medya</h1>
                    <ul className='space-y-2  grid grid-rows-4 gap-1 justify-center '>
                    <li className='cursor-pointer hover:text-secondary duration-200'><a href="https://www.sahibinden.com/" className="text-2xl"><SiSahibinden /></a></li>
                        <li className='cursor-pointer hover:text-secondary duration-200'><a href="https://x.com" className="text-2xl"><BsTwitterX /></a></li>
                        <li className='cursor-pointer hover:text-secondary duration-200'><a href="https://www.instagram.com" className="text-2xl"><FaInstagram /></a></li>
                        <li className='cursor-pointer hover:text-secondary duration-200'><a href="https://www.facebook.com" className="text-2xl"><FaFacebookF /></a></li>
                        
                    </ul>
                </div>
            
            </div>
        </div>
    </footer>
  );
};

export default Footer;
