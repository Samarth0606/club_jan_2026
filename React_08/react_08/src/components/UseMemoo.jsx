import React, { useMemo, useState } from 'react'

function UseMemoo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }
    let ans = useMemo(()=>{
        let sum = 0;
        for(let i=1;i<=inp;i++){
            console.log("loop ran");
            sum+=i;
        }
        return sum
    },[inp])

  return (
    <div>
        <input onChange={handleInp} type="text" />
        <h1>Sum: {ans} </h1>
        <button onClick={()=>setCount(count+1)} >Count: {count}</button>
    </div>
  )
}

export default UseMemoo