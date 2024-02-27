import React from 'react'
import SearchField from './searchField/SearchField'
import TripInfo from './tripInfo/TripInfo'

const Main = () => {
  return (
    <div>
        <SearchField />
        <div className='my-12 font-semibold text-[#425C5A] flex justify-between items-center'>
            <div className=' text-3xl'><h2>RESULT (25)</h2></div>
            <div className='flex gap-3'>
                <p className='bg-white py-2 px-8 rounded-3xl'>FILTER</p>
                <p className='bg-white py-2 px-8 rounded-3xl'>TICKET OF CLASS <span><i class="ri-arrow-drop-down-line"></i></span></p>
            </div>
        </div>
        <div>
            <TripInfo />
        </div>
    </div>
  )
}

export default Main