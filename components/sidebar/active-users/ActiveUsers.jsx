import React from 'react'
import Image from 'next/image'

const ActiveUsers = () => {
  return (
    <div>
        <p className='text-[#C99C33] pl-3 text-sm mt-5'>ACTIVE USERS</p>
        <div className='pl-3 mt-4 flex'>
            <img 
                src="/assets/unnamed.jpg" 
                width='40px' 
                alt=""
                className='rounded-full h-[40px] mr-[-15px] border-2 border-[#4b816b]'
            />
            <img 
                src="/assets/images.jpg" 
                width='40px' 
                alt=""
                className='rounded-full h-[40px] mr-[-15px] border-2 border-[#4b816b]'
            />
            <img 
                src="/assets/AlexJohnson_square.jpg" 
                width='40px' 
                alt=""
                className='rounded-full h-[40px] mr-[-15px] border-2 border-[#4b816b]'
            />
            <img 
                src="/assets/alex_johnson-headshot.jpg" 
                width='40px' 
                alt=""
                className='rounded-full h-[40px] mr-[-15px] border-2 border-[#4b816b]'
            />
            <div className='h-[40px] w-[40px] flex justify-center items-center text-white bg-[#C99C33] rounded-full border-2 border-[#4b816b] text-xs font-bold'><span>+70</span></div>
        </div>
    </div>
  )
}

export default ActiveUsers