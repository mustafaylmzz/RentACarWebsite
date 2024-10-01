import React from 'react'

const VitesTipi = ({onVitesTipiChange}) => {
  return (
    <div>
        <div className="flex flex-col gap-1 border-2 rounded-xl p-4 hover:scale-105">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Vites Tipi</h3>
            <div className="flex items-center gap-2">
              <input onChange={onVitesTipiChange} type="checkbox" name="vites" id="otomatik3" value="otomatik" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="otomatik3" className="text-sm text-gray-600">Otomatik</label>
            </div>
            <div className="flex items-center gap-2">
              <input onChange={onVitesTipiChange} type="checkbox" name="vites" id="manuel3" value="manuel" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="manuel3" className="text-sm text-gray-600">Manuel</label>
            </div>
        </div> 
    </div>
  )
}

export default VitesTipi
