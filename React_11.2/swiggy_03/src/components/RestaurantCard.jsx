import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantCard({restArray}) {
  return (
    restArray.map((item)=>{
        return(
            <Link to={`/restaurant/${item.info.id}`}>
              <div className='m-8 w-58'>
                  <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt="" />
                  <h1 className='font-bold'>{item.info.name}</h1>
                  <span className='font-bold'>{item.info.avgRating}</span>
                  <span className=' mx-3'>{item.info.sla.slaString}</span>
                  <p>{item.info.cuisines[0]}</p>
                  <p>{item.info.locality}</p>
              </div>
            </Link>
        )
    })
  )
}

export default RestaurantCard