import React from 'react';

const Paketler = ({ paket, onAddPackage, onRemovePackage, isSelected }) => {
  return (
    <div className={`flex justify-between items-center p-4 rounded-lg shadow-md mb-2  transition-all duration-300 ${isSelected ? 'bg-blue-100' : 'bg-white hover:bg-gray-50'}`}>
      {/* Paket Adı */}
      <h3 className="text-md font-semibold text-gray-800">{paket.name}</h3>
      {/* Paket Fiyatı */}
      <p className="text-lg font-bold text-gray-600">{paket.price} TL</p>
      
      {/* Ekle/Çıkar Butonu */}
      {isSelected ? (
        <button 
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 hover:scale-95 transition duration-200"
          onClick={() => onRemovePackage(paket)} // Paketi çıkar
        >
          -
        </button>
      ) : (
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-95 transition duration-200"
          onClick={() => onAddPackage(paket)} // Paketi ekle
        >
          +
        </button>
      )}
    </div>
  );
};

export default Paketler;
