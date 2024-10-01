import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const DetailHeader = ({secilenArac}) => {
  return (
    <div className="flex justify-between items-center border-b pb-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-700">
            {secilenArac.title}
          </h1>
          <Link
            to="/araclar"
            className="flex items-center gap-2 text-sm text-blue-600 hover:bg-blue-600 hover:text-white transition bg-gray-200 px-4 py-2 rounded-full shadow"
          >
            <IoMdArrowBack className="text-lg" />
            Diğer Araçlara Dön
          </Link>
        </div>
  )
}

export default DetailHeader
