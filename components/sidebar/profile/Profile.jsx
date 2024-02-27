'use client'
import React from 'react'

const Profile = (props) => {
  return (
    <div className='flex flex-col items-center text-white rounded-tl-2xl rounded-tr-3xl gap-3 bg-[#3D5654] p-16 pt-24'>
        <img 
            src={props.imgSrc} 
            width='70px' 
            className='p-1 rounded-full border-2 border-[#C99C33] mr-auto ml-auto'/>
        <h2 className=' font-medium text-xl'>{props.name}</h2>
        <p className=' text-xs'>{props.email}</p>
    </div>
  )
}

export default Profile