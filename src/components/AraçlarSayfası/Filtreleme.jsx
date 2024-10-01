import React from 'react';
import KasaTürü from './Filtreleme/KasaTürü';
import YakıtTürü from './Filtreleme/YakıtTürü';
import VitesTipi from './Filtreleme/VitesTipi';

const Filtreleme = ({ onYakıtTürüChange, onVitesTipiChange, onKasaTürüChange }) => {
  return (
    <div>
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <KasaTürü onKasaTürüChange={onKasaTürüChange} />
          <YakıtTürü onYakıtTürüChange={onYakıtTürüChange} />
          <VitesTipi onVitesTipiChange={onVitesTipiChange} />
        </div>
      </div>
    </div>
  );
};

export default Filtreleme;
