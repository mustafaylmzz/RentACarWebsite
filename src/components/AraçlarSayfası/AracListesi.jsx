import React, { useEffect} from 'react';

import Filtreleme from './Filtreleme';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltre } from '../../redux/araclarSlice';
import AracCarts from './AracCarts';


const AracListesi = () => {
  
  const dispatch =useDispatch()
  const filtreliAraclar=useSelector((state)=> state.araclar.filtreliAraclar)
  const filtreler=useSelector((state)=>state.araclar.filtreler)
  useEffect(() => {
     
    dispatch(setFiltre({ filtreAdi: 'yakıtTürü', deger: filtreler.yakıtTürü }));
    dispatch(setFiltre({ filtreAdi: 'vitesTipi', deger: filtreler.vitesTipi }));
    dispatch(setFiltre({ filtreAdi: 'kasaTürü', deger: filtreler.kasaTürü }));
  }, [filtreler, dispatch]);
  const handleYakıtTürüChange = (e) => {
    const { value, checked } = e.target;
    dispatch(setFiltre({ filtreAdi: 'yakıtTürü', deger: checked ? [...filtreler.yakıtTürü, value] : filtreler.yakıtTürü.filter((item) => item !== value) }));
  };

  const handleVitesTipiChange = (e) => {
    const { value, checked } = e.target;
    dispatch(setFiltre({ filtreAdi: 'vitesTipi', deger: checked ? [...filtreler.vitesTipi, value] : filtreler.vitesTipi.filter((item) => item !== value) }));
  };

  const handleKasaTürüChange = (e) => {
    const { value, checked } = e.target;
    dispatch(setFiltre({ filtreAdi: 'kasaTürü', deger: checked ? [...filtreler.kasaTürü, value] : filtreler.kasaTürü.filter((item) => item !== value) }));
  };
  return (
    <section className='bg-gray-200'>
      <div className='p-10 text-center text-3xl font-extrabold'>
        <h1>V İ T R İ N</h1>
      </div>
      <Filtreleme
        onYakıtTürüChange={handleYakıtTürüChange}
        onVitesTipiChange={handleVitesTipiChange}
        onKasaTürüChange={handleKasaTürüChange}
      />
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 py-8'>
        {filtreliAraclar.map((araba) => (
         <AracCarts araba={araba}/>
        ))}
      </div>
    </section>
  );
};

export default AracListesi;
