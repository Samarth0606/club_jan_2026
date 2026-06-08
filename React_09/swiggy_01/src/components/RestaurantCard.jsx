import React from 'react'

function RestaurantCard() {
  return (
    <div className='m-8'>
        <img className='w-58 h-42 rounded-2xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/e109ae70-80ca-4f7d-b2a6-2d60706a72b9_1003414.JPG" alt="" />
        <h1 className='font-bold'>Pizza Hut</h1>
        <span className='font-bold'>4.3</span>
        <span className=' mx-3'>50-60 mins</span>
        <p>Pizzas</p>
        <p>New Delhi</p>
    </div>
  )
}

export default RestaurantCard