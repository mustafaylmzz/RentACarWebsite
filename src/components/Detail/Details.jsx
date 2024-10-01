import React from 'react'

const Details = ({ secilenArac }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div className="space-y-6">
      <img
        src={secilenArac.image}
        alt={secilenArac.title}
        className="rounded-lg w-full shadow-lg"
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 h-20 rounded-lg"></div>
        <div className="bg-gray-200 h-20 rounded-lg"></div>
        <div className="bg-gray-200 h-20 rounded-lg"></div>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-2 h-[300px] w-[600px]">
      
      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Marka</h2>
        <p className=" text-gray-700">{secilenArac.skills.marka}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Model</h2>
        <p className=" text-gray-700">{secilenArac.skills.model}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Üretim Yılı</h2>
        <p className=" text-gray-700">{secilenArac.skills.uretimYili}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Motor Hacmi</h2>
        <p className=" text-gray-700">{secilenArac.skills.motorHacmi}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Yakıt</h2>
        <p className=" text-gray-700">{secilenArac.skills.yakıt}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Vites</h2>
        <p className=" text-gray-700">{secilenArac.skills.vites}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Kasa</h2>
        <p className=" text-gray-700">{secilenArac.skills.kasa}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Bagaj </h2>
        <p className=" text-gray-700">{secilenArac.skills.bagaj} L</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Kişi Sayısı</h2>
        <p className=" text-gray-700">{secilenArac.skills.kisi} </p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Klima</h2>
        <p className=" text-gray-700">{secilenArac.skills.klima ? "Var" : "Yok"}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600 border-b">Renk</h2>
        <p className=" text-gray-700">{secilenArac.skills.renk}</p>
      </div>
    </div>
  </div>
  )
}

export default Details
