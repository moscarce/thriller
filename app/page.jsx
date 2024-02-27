import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import Main from '@/components/main/Main'


const page = () => {
  return (
    <div className='bg-[#cbeaed] h-[110vh] rounded-2xl relative pl-80 pr-12 py-12'>
            <Sidebar />
            <Main />
    </div>
  )
}

export default page