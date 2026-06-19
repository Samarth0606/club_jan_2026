import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() {
    const [count,setCount] = useState(100);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
    return(
        <div>
            <CountRenderer  />
            <Button  setCount={setCount}  />
        </div>
    )
}

function CountRenderer(){
    const count = useContext(CountContext)
    return(
        <h1>Count: {count} </h1>
    )
}

function Button({setCount}){
    const count = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
    )
}

export default PropDrilling