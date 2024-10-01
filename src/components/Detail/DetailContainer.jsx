import React from 'react'
import DetailHeader from './DetailHeader'
import Details from './Details'

const DetailContainer = ({secilenArac}) => {
  return (
    <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <DetailHeader secilenArac={secilenArac}/>
        <Details secilenArac={secilenArac} />
      </div>
  )
}

export default DetailContainer
