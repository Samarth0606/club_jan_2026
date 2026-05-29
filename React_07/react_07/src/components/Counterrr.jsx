import React, { useEffect, useState } from 'react'

function Counterrr() {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count === 0){
            console.log("component has rendered");
        }
        else if(count>0 && count<=5){
            console.log("component has updated");
        }
        else if(count === 6){
            return ()=> console.log("component has unmounted");
        }
    } , [count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)} >Click - {count}</button>
    </div>
  )
}

export default Counterrr