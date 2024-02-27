import React from 'react'
import Profile from './profile/Profile'
import Image from 'next/image'
import Menu from './menu/Menu'
import ActiveUsers from './active-users/ActiveUsers'

const Sidebar = () => {
  return (
    <div className=' absolute top-0 bottom-0 left-0 bg-[#425C5A] rounded-l-2xl rounded-r-3xl '>
        <div className='rounded-l-2xl rounded-r-3xl'>
            <Profile imgSrc='/assets/profile-pic.jpg' name='ALEX JOHNSON' email='alex.johnson@gmail.com'/>
        </div>
        <div className='ml-3 pt-5 mb-16'>
            <Menu />
        </div>
        <div className='ml-3 mb-12'>
            <ActiveUsers />
        </div>
    </div>
  )
}

export default Sidebar