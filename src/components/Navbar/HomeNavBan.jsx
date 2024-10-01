import React from 'react';
import Navbar from './Navbar';
import {  Link } from 'react-router-dom';


const HomeNavBan = () => {
  return (
    <section className="relative">
      <Navbar />
      <div className="relative">
        <img
          src="https://www.dokuzisik.com.tr/uploads/anasayfa/slider-bg.jpg"
          alt="Banner"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <form className="bg-white bg-opacity-80 p-10 rounded-md shadow-lg">
            <div className="flex gap-5">
                <div className="space-y-5 flex flex-col items-center">
                  <h1 className="text-lg font-semibold text-gray-700">Teslim <p className='flex justify-center font-bold text-5xl text-blue-500'>AL</p></h1>
                  <input
                    type="date"
                    className="block mx-auto h-10 w-48 rounded-full border-none bg-white text-center text-gray-700 text-sm font-sans shadow-lg p-4"
                  />
                </div>
                <div className="space-y-5 flex flex-col items-center">
                  <h1 className="text-lg font-semibold text-gray-700">Teslim <p className='flex justify-center font-bold text-5xl text-blue-500'>ET</p></h1>
                  <input
                    type="date"
                    className="block mx-auto h-10 w-48 rounded-full border-none bg-white text-center text-gray-700 text-sm font-sans shadow-lg p-4"
                  />
                </div>
            </div>
            
            <div className="pt-10 flex justify-center">
              <button className="bg-blue-500 text-white text-l font-semibold py-2 px-6 rounded shadow hover:bg-white hover:text-blue-500 hover:scale-110 transition duration-200">
                <Link to="/araclar">ARAÇLARI GÖR</Link>
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeNavBan;
