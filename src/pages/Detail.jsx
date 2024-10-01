import React, { useEffect } from 'react';
import OtherNav from '../components/Navbar/OtherNav';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArabaListesi } from '../components/ArabaListesi';
import { selectedArac } from '../redux/araclarSlice';
import AracDetail from '../components/Detail/AracDetail';
import Footer from '../components/Footer'

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const secilenArac = useSelector(state => state.araclar.secilenArac);

  useEffect(() => {
    const arac = ArabaListesi.find(arac => arac.id === parseInt(id));
    if (arac) {
      dispatch(selectedArac(arac));
    }
  }, [id, dispatch]);

  return (
    <div>
      <OtherNav />
      <div>
        {secilenArac ? (
          <AracDetail secilenArac={secilenArac} />
        ) : (
          <div>Yükleniyor...</div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Detail;
