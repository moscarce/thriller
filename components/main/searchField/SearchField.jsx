import React from 'react'

const SearchField = () => {
  return (
    <div className=' border-10 bg-white rounded-3xl text-[#425C5A] font-semibold p-12'>
        <div className=' mb-20'>
            <div className='rounded-full  bg-[#cbeaed] w-96 h-[70px] inline  p-2 py-6'>
                <p className='inline px-[73px] py-5 cursor-pointer'><span className='mr-4 text-2xl'><i className="ri-map-pin-2-fill"></i></span>NEW YORK(JFK)</p>
                <p className='inline bg-[#425C5A] text-white rounded-full p-5 cursor-pointer'><span><i className="ri-arrow-left-right-line"></i></span></p>
                <p className='inline px-[73px] py-5 cursor-pointer'><span  className='mr-4 text-2xl'><i className="ri-map-pin-2-fill"></i></span>MUMBAI (BOM)</p>
            </div>
            <div className='rounded-full h-[70px] bg-[#cbeaed] w-60 inline mx-8  p-2 py-6'>
                <p className='inline cursor-pointer px-[55px]'><span className='mr-4 text-2xl'><i className="ri-calendar-2-line"></i></span>29 / JULY /2019</p>
            </div>
            <div className='rounded-full w-52 h-52 bg-[#cbeaed] inline  p-2 py-6'>
                <p className='inline cursor-pointer px-[30px]'><span className='mr-4 text-2xl'><i className="ri-user-3-fill"></i></span>2 TRAVELLER</p>
            </div>
        </div>
        <div >
            <div className='rounded-full bg-[#cbeaed] w-52 h-[70px] inline p-2 py-6'>
                <p className='inline bg-[#425C5A] text-white rounded-full px-[70px] py-5 cursor-pointer'>ONE WAY</p>
                <p className='inline px-[70px] py-5 cursor-pointer'>ROUND TRIP</p>
                <p className='inline px-[70px] py-5 cursor-pointer'>MULTI CITY</p>
            </div>
            <div className='rounded-full bg-[#cbeaed] p-1 py-6 inline mx-8'>
                <p className='inline px-[70px] py-5 cursor-pointer'><span className='mr-4 text-2xl'><i className="ri-armchair-fill"></i></span>FIRST CLASS</p>
            </div>
            <div className='rounded-full bg-[#C99C33] text-white w-52 h-[70px]  p-2 py-6 inline'>
                <p className='inline cursor-pointer px-[70px]'>SEARCH</p>
            </div>
        </div>
    </div>
  )
}

export default SearchField