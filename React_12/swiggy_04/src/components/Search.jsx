import React from 'react'

function Search({setAllRestArr,restArray}) {

    function handleSearch(searchedText){
        setAllRestArr(restArray.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()))) 
    }

  return (
    <div>
        <input className='border mx-20 p-1 m-2' onChange={(e)=>handleSearch(e.target.value)} type="text" />
    </div>
  )
}

export default Search