import Image from 'next/image'
import React from 'react'
const MarketStoryCard = ({id, thumbnail,headline, description }) => {
  
    return (
    <div className='my-8 shadow-lr'>
        <Image src={thumbnail} alt={id} width={250} height={200} className='w-full'/>
        <div className="p-3">
        <h3 className='text-lg text-gray-700 capitalize font-bold'>{headline}</h3>
        <p className='text-sm'>{description.slice(0,105)}...</p>
        </div>
    </div>
  )
}

export default MarketStoryCard