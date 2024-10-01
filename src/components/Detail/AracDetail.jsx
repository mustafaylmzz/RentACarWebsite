import React from 'react';

import DetailContainer from './DetailContainer';
import Reservation from './Reservation';


const AracDetail = ({ secilenArac }) => {
  
  return (
    <section className="bg-gray-100 min-h-screen py-6">
      
      <DetailContainer secilenArac={secilenArac}/>
      <div className='p-10 text-center text-3xl font-extrabold'>
        <h1>KİRALAMAYA BAŞLA</h1>
      </div>
      <Reservation secilenArac={secilenArac}/>
      
    </section>
  );
};

export default AracDetail;
