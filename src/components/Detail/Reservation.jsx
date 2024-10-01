import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PackagesList } from '../ArabaListesi';
import Paketler from './Paketler';



const Reservation = ({ secilenArac }) => {
  const [teslimAlmaTarihi, setTeslimAlmaTarihi] = useState(null);
  const [teslimEtmeTarihi, setTeslimEtmeTarihi] = useState(null);
  const [gunSayisi, setGunSayisi] = useState(0);
  const [secilenPaketler, setSecilenPaketler] = useState([]);
  const [paketPrice, setPaketPrice] = useState(0);

  // Rezerve tarihlerin başlangıç ve bitiş tarihleri secilenArac'tan alınıyor
  const rezerveBaslangic = secilenArac.rezervasyon ? new Date(secilenArac.rezervasyon.baslangic) : null;
  const rezerveBitis = secilenArac.rezervasyon ? new Date(secilenArac.rezervasyon.bitis) : null;
  // Tarihlerin aralığa dahil olup olmadığını kontrol eden fonksiyon
  const isDateInRange = date => {
    if (!date || !rezerveBaslangic || !rezerveBitis) return false;
    return date >= rezerveBaslangic && date <= rezerveBitis;
  };
  // İki tarih arasındaki gün sayısını hesaplayan fonksiyon
  const calculateDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
    const timeDifference = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24)); // Milisaniyeyi gün cinsine çevir
  };
  const handleAddPackage = (paket) => {
    // secilenPaketler'de aynı id'ye sahip bir paket olup olmadığını kontrol edin
    const isAlreadySelected = secilenPaketler.some((selectedPaket) => selectedPaket.id === paket.id);
  
    if (!isAlreadySelected) {
      // Paket seçilmemişse ekle ve toplam fiyata dahil et
      setSecilenPaketler([...secilenPaketler, paket]);
      setPaketPrice((prevPrice) => prevPrice + paket.price); // Paket fiyatını toplama ekle
    }
  };
  const handleRemovePackage = (paket) => {
    setSecilenPaketler(secilenPaketler.filter((selectedPaket) => selectedPaket.id !== paket.id));
    setPaketPrice((prevPrice) => prevPrice - paket.price); // Paket fiyatını toplamdan çıkar
  };
  const calculateTotalPrice = () => {
    if (gunSayisi <= 0) return 0;
    const priceEntry = secilenArac.price.find(entry => gunSayisi >= entry.days[0] && gunSayisi <= entry.days[1]);
    const aracToplamFiyati = priceEntry ? priceEntry.price * gunSayisi : 0; // Gün sayısı ile çarpıyoruz
    return aracToplamFiyati + paketPrice; // Araç fiyatı + seçilen paketlerin fiyatı
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teslimAlmaTarihi || !teslimEtmeTarihi) {
      alert('Lütfen teslim alma ve etme tarihlerini seçin.');
      return;
    }
   
    
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 p-2'>
      <form onSubmit={handleSubmit} className="container flex flex-col items-center bg-white shadow-lg rounded-lg p-8 mt-5">
        <div className="flex gap-5">
          <div className="space-y-5 flex flex-col items-center">
            <h1 className="text-lg font-semibold text-gray-700">
              Teslim <p className="flex justify-center font-bold text-5xl text-blue-500">AL</p>
            </h1>
            <DatePicker
              selected={teslimAlmaTarihi}
              onChange={date => {
                setTeslimAlmaTarihi(date);
                setTeslimEtmeTarihi(null); // Teslim alma tarihi değiştiğinde teslim etme tarihini sıfırla
                setGunSayisi(0); // Tarih değiştiğinde gün sayısını sıfırla
              }}
              filterDate={date => !isDateInRange(date)} // Tarih aralığını seçilemez yapar
              minDate={new Date()} // Bugünden itibaren seçim yapılabilir
              dateFormat="dd/MM/yyyy"
              className="block mx-auto h-10 w-48 rounded-full border-none bg-white text-center text-gray-700 text-sm font-sans shadow-lg p-4"
              placeholderText="Teslim Alma Tarihi"
            />
          </div>

          <div className="space-y-5 flex flex-col items-center">
            <h1 className="text-lg font-semibold text-gray-700">
              Teslim <p className="flex justify-center font-bold text-5xl text-blue-500">ET</p>
            </h1>
            <DatePicker
              selected={teslimEtmeTarihi}
              onChange={date => {
                setTeslimEtmeTarihi(date);
                const days = calculateDays(teslimAlmaTarihi, date); // Gün sayısını hesapla
                setGunSayisi(days);
              }}
              filterDate={date => !isDateInRange(date)} // Tarih aralığını seçilemez yapar
              minDate={teslimAlmaTarihi || new Date()} // Teslim alma tarihinden sonra seçilebilir
              dateFormat="dd/MM/yyyy"
              className="block mx-auto h-10 w-48 rounded-full border-none bg-white text-center text-gray-700 text-sm font-sans shadow-lg p-4"
              placeholderText="Teslim Etme Tarihi"
              disabled={!teslimAlmaTarihi} // Teslim alma tarihi seçilmeden teslim etme tarihi seçilemez
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white text-l font-semibold py-2 px-6 rounded shadow hover:bg-white hover:text-blue-500 hover:scale-110 transition duration-200"
          >
            HESAPLA
          </button>
        </div>
      </form>     
      <div className="container bg-white shadow-xl rounded-2xl p-8 mt-5 flex flex-col">
        {/* Paket Başlığı */}
        <div className="flex flex-col p-5 bg-blue-50 rounded-2xl shadow-md">
          <h1 className="text-2xl font-extrabold text-blue-600 mb-4">PAKET SEÇENEKLERİ</h1>
          {/* Paket Listesi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PackagesList.map((paket, i) => {
              const isSelected = secilenPaketler.some(
                (selectedPaket) => selectedPaket.id === paket.id
              ); // Paket seçili mi kontrol et
              return (
                <Paketler
                  key={paket.id || i}
                  paket={paket}
                  onAddPackage={handleAddPackage}
                  onRemovePackage={handleRemovePackage}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        </div>

        {/* Bilgilendirme Metni */}
        <p className="mt-6 text-sm font-medium p-4 bg-blue-100 text-blue-900 rounded-lg shadow-inner">
          Filomuzun değerli misafirlerimiz için sağladığı imkanlardan yararlanabilirsiniz!
        </p>

        {/* Fiyat ve Gün Bilgileri */}
        <div className="flex flex-col mt-6 p-5 bg-gray-100 rounded-2xl shadow-lg space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Paket Fiyatı:</span>
            <span>{paketPrice} TL</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Rezerve Edilecek Gün:</span>
            <span>{gunSayisi} gün</span>
          </div>
          <div className="flex justify-between items-center text-xl font-bold text-blue-600 mt-2">
            <span>Toplam Fiyat:</span>
            <span>{calculateTotalPrice()} TL</span>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Reservation;
