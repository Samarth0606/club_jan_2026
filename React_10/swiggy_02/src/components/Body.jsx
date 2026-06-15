import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'
import Search from './Search';

function Body() {

    let restArray = ApiCalling();

    let [allRestArray,setAllRestArr] = useState(restArray)

    useEffect(()=>{
      if(restArray && restArray.length){
        setAllRestArr(restArray)
      }
    },[restArray])


    function filterTopRestaurant(restArray){
      setAllRestArr( restArray.filter((restaurant)=>restaurant.info.avgRating >= 4.3) )
    }

    function resetFilter(restArray){
      setAllRestArr(restArray)
    }

  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button onClick={()=>filterTopRestaurant(restArray)} className='border text-xl rounded w-1/12 ml-20'>Rating 4.3+</button>
        <button onClick={()=>resetFilter(restArray)} className='border text-xl rounded w-1/12 ml-8'>Reset</button>
        <div>
          <Search restArray={restArray} setAllRestArr={setAllRestArr}  />
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArray={allRestArray} />
        </div>
    
    </div>
  )
}

export default Body