'use client'
import React from 'react'


const TripInfoCard = (props) => {
  return (
    <div className='bg-white grid grid-cols-5 p-9 text-[#425C5A] font-medium' style={props.style}>
        <div className='flex flex-col justify-center items-center'>
            <img src={props.data.imgSrc} width='60px' height='40px'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl mb-3'>{props.data.from}</p>
            <p>{props.data.startTime}</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className=' text-sm'>{props.data.planeType}</p>
          <p className=' text-[#C99C33]'>{props.data.hours}</p>
          <p>{props.data.tripType}</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-3xl mb-3'>{props.data.to}</p>
          <p>{props.data.stopTime}</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='mb-3 font-medium'>{props.data.price}</p>
          <button className='bg-[#C99C33] p-2 text-sm text-white px-8 rounded-3xl'>BOOK NOW</button>
        </div>
    </div>
  )
}

export default TripInfoCard