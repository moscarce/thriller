import React from 'react'
import TripInfoCard from './tripInfoCard'
import TripInfoCardDetails from './TripInfoCardDetails'
import Image from 'next/image'


const TripInfo = () => {
    const cardDetails = [
        {
            imgSrc:'assets/emirates.png',
            from:'JFK',
            to:'BOM',
            startTime:'13:00',
            planeType:'EMIRATES',
            hours:'11H 20M',
            tripType:'NON-STOP',
            stopTime:'14:20',
            price:'$1,572',
        },

        {
            imgSrc:'assets/qatar-airways.png',
            from:'JFK',
            to:'BOM',
            startTime:'13:00',
            planeType:'QATAR AIRWAYS',
            hours:'11H 20M',
            tripType:'NON-STOP',
            stopTime:'14:20',
            price:'$2,072',
        },
        {
            imgSrc:'assets/lufthansa-airlines.jpg',
            from:'JFK',
            to:'BOM',
            startTime:'13:00',
            planeType:'LUFTHANSA',
            hours:'11H 20M',
            tripType:'NON-STOP',
            stopTime:'14:20',
            price:'$1,872',
        },
                {
            imgSrc:'assets/emirates.png',
            from:'JFK',
            to:'BOM',
            startTime:'13:00',
            planeType:'EMIRATES',
            hours:'11H 20M',
            tripType:'NON-STOP',
            stopTime:'14:20',
            price:'$1,872',
        },
    ]
  return (
    <div className='flex gap-[3%]'>
        <div className=' flex-[66%] p-4'>
            {
                cardDetails.map((item, index) =>(<TripInfoCard data={item} key={index} style={index === 0 ? {borderRadius:'20px 20px 0 0', borderBottom:'dashed 2px #cbeaed'}
                    :(index === cardDetails.length - 1 ?{borderRadius:'0 0 20px 20px'}
                        :{borderBottom:'dashed 2px #cbeaed'})}/>))
            }
        </div>
        <div className='flex-[31%] p-4'>
            <TripInfoCardDetails data={cardDetails[0]}/>
        </div>
    </div>
  )
}

export default TripInfo