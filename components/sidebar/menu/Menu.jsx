'use client'
import React from 'react'
import MenuCard from './MenuCard'


const Menu = () => {
    const [menuData,setMenuData] = React.useState([{
        id:0,
        icon:<span className='text-2xl mr-4 text-blue text-[#C99C33]'><i className="ri-home-8-line"></i></span>,
        text:'DASHBOARD',
        isActive: true,
        isPrevious: false,
        isNext: false
    },
    {
        id:1,
        icon:<span className='text-2xl mr-4 text-blue text-[#C99C33]'><i className="ri-plane-line"></i></span>,
        text:'FLIGHTS',
        isActive:false,
        isPrevious: false,
        isNext: true
    },
    {
        id:2,
        icon:<span className='text-2xl mr-4 text-blue text-[#C99C33]'><i className="ri-wallet-line"></i></span>,
        text:'WALLET',
        isActive:false,
        isPrevious: false,
        isNext: false
    },
    {
        id:3,
        icon:<span className='text-2xl mr-3 text-blue text-[#C99C33]'><i className="ri-article-line"></i></span>,
        text:'REPORTS',
        isActive:false,
        isPrevious: false,
        isNext: false
    },
    {
        id:4,
        icon:<span className='text-2xl mr-3 text-[#C99C33] '><i className="ri-pie-chart-fill"></i></span>,
        text:'STATISTICS',
        isActive:false,
        isPrevious: false,
        isNext: false
    },
    {
        id:5,
        icon:<span className='text-2xl mr-3 text-blue text-[#C99C33]'><i className="ri-settings-5-line"></i></span>,
        text:'SETTINGS',
        isActive:false,
        isPrevious: false,
        isNext: false
    },
])

    const handleActive = (id)=>{
        const newData = []
        for(let index = 0; index < menuData.length; index++){
            let currentData = menuData[index]
            if(currentData.id === id){
                if(index === 0){
                    newData.push({...currentData, isActive : true, isNext : false, isPrevious : false})
                    index += 1
                    currentData = menuData[index]
                    newData.push({...currentData, isActive: false, isNext: true, isPrevious: false})
                }
                else if(index === menuData.length - 1){
                    newData.push({...currentData, isActive : true, isNext : false, isPrevious : false})
                    currentData = menuData[index-1]
                    newData[index - 1] = {...currentData, isActive: false, isNext: false, isPrevious: true}
                }else{
                    newData.push({...currentData, isActive : true, isNext : false, isPrevious : false})
                    currentData = menuData[index-1]
                    newData[index - 1] = {...currentData, isActive: false, isNext: false, isPrevious: true}
                    index += 1
                    currentData = menuData[index]
                    newData.push({...currentData, isActive: false, isNext: true, isPrevious: false})
                }
            } else {
                newData.push( {...currentData, isActive: false, isPrevious: false, isNext:false})
            }
        }
        setMenuData(()=> newData)
    }
  return (
    <div >{
        menuData.map((data,index)=>(
            <MenuCard 
                icon={data.icon} 
                text={data.text} 
                key={index} 
                isActive={data.isActive} 
                isNext={data.isNext}
                isPrevious={data.isPrevious}
                handleClick={()=>handleActive(data.id)}
            />
        ))
        }</div>
  )
}

export default Menu