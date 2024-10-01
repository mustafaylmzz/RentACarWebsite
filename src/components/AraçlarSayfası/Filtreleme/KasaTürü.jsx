import React from 'react'

const KasaTürü = ({onKasaTürüChange}) => {
  return (
    <div>
      <div className="flex flex-col gap-1 border-2 rounded-xl p-2 hover:scale-105">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Araç Türü</h3>
            <div className="flex items-center gap-2">
              <input onChange={onKasaTürüChange} type="checkbox" name="kasa" id="sedan" value="sedan" className="h-4 w-4  border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="sedan" className="text-sm text-gray-600">Sedan</label>
            </div>
            <div className="flex items-center gap-2">
              <input onChange={onKasaTürüChange} type="checkbox" name="kasa" id="suv" value="suv" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="suv" className="text-sm text-gray-600">SUV</label>
            </div>
            <div className="flex items-center gap-2">
              <input onChange={onKasaTürüChange} type="checkbox" name="kasa" id="hatchback" value="hatchback" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="hatchback" className="text-sm text-gray-600">Hatchback</label>
            </div>
            <div className="flex items-center gap-2">
              <input onChange={onKasaTürüChange} type="checkbox" name="kasa" id="station" value="station" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="station" className="text-sm text-gray-600">Station</label>
            </div>
          </div>
    </div>
  )
}

export default KasaTürü
