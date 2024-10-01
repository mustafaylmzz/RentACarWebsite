import React from 'react'

const YakıtTürü = ({onYakıtTürüChange}) => {
  return (
    <div>
      <div className="flex flex-col gap-1 border-2 rounded-xl p-4 hover:scale-105">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Yakıt Türü</h3>
            <div className="flex items-center gap-2">
              <input onChange={onYakıtTürüChange} type="checkbox" name="fuel" id="dizel" value="dizel" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
              <label htmlFor="dizel" className="text-sm text-gray-600">DİZEL</label>
            </div>
            <div className="flex items-center gap-2">
              <input onChange={onYakıtTürüChange} type="checkbox" name="fuel" id="benzin" value="benzin" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
              <label htmlFor="benzin" className="text-sm text-gray-600">BENZİN</label>
            </div>
            <div className="flex items-center gap-2">
              <input onChange={onYakıtTürüChange} type="checkbox" name="fuel" id="elektrik" value="elektrik" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
              <label htmlFor="elektrik" className="text-sm text-gray-600">ELEKTRİK</label>
            </div>
          </div>
    </div>
  )
}

export default YakıtTürü
