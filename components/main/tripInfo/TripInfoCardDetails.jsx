import React from 'react'

const TripInfoCardDetails = (props) => {
  return (
    <div className='text-white rounded-3xl  font-medium w-full'>
      <div className='bg-[#425C5A] w-full pt-16 px-4 rounded-t-3xl'>
        <div className='flex items-center justify-between'>
          <div>
            <p>FROM</p>
            <p className='text-3xl'>{props.data.from}</p>
          </div>
          <p className=' self-end'>{props.data.tripType}</p>
          <div>
            <p>TO</p>
            <p className='text-3xl'>{props.data.to}</p>
          </div>
        </div>
        <div className='py-36'></div>
      </div>
      <div className='bg-[#3D5654] w-96 p-6 py-12 px-2 rounded-b-3xl'>
        <div className='flex justify-between items-center'>
          <button className='bg-[#C99C33] p-2 text-sm  px-4 rounded-3xl'>NON STOP</button>
          <button className=' p-2 text-sm px-4 rounded-3xl'>ONE STOP</button>
          <button className=' p-2 text-sm px-4 rounded-3xl'>MORE STOP</button>
        </div>
          <p className=' p-2 text-sm px-4 rounded-3xl mt-6'>PRICE</p>
          <hr className='mb-5'/>
      </div>
    </div>
  )
}

export default TripInfoCardDetails