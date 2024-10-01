import React from 'react'
import OtherNav from '../components/Navbar/OtherNav'
import Footer from '../components/Footer'



const Hakkımızda = () => {
  return (
    <div>
      <OtherNav/>
      <div className='bg-gray-200'>
        <div className=' p-10 overflow-hidden text-center text-3xl font-extrabold'>
          <h1>H A K K I M I Z D A</h1>
        </div>
        <div className='flex gap-4 p-4'>
          <img src="https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww" alt="" />
          <p className='text-l font-semibold' >
                1989 yılında kurulan MustafaY Rent A Car oluşturduğu deneyim ve uzmanlaşmış ekibiyle ihtiyacınıza en uygun hizmeti sunmaktadır. Geniş araç kiralama seçenekleriyle her kesimin ihtiyaçlarına çözüm bulabilen filomuz, en ekonomik ve lüks araçları kampanyalı fiyatlarıyla hizmetinize sunmaktadır.
                Kiralık araç filosunda farklı ihtiyaç ve beklentilere uygun alternatifler sunan ve önce müşteri memnuniyeti” diyerek yola çıkan firmamız, genç araç filosu ve güler yüzlü deneyimli kadrosuyla siz müşterilerimize 25 yıldır hizmet sunmaktadır. Ayrıca her tür müşteri beklentilerini karşılayabilmek amacı ile düz/otomatik vites seçenekleri, benzinli/dizel yakıt Vip tekne, yat kiralama helikopter ve 16 kişiye kadar özel jet kiralama ile ilgili çözüm ortaklarımız ile hizmet vermekteyiz. No-smoking araç kiralama seçeneklerine uygun esnek bir kiralık araç filosu ile hizmet vermekteyiz. 7/24 çağrı merkezimiz ile sizin yolculuğunuz esnasında oluşabilecek her türlü sorunu çözerek ve yolunuza güvenli bir şekilde devam etmenizi sağlamayı amaçlıyoruz.
          </p>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Hakkımızda
