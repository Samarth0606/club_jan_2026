import { useState } from "react"
function Jump() {
    const [count,setCount] = useState(0) //initial value
    function handleInc(){
        // setCount(count+1) //normally it holds initial value
        // setCount(count+1)
        // setCount(count+1)
        setCount((count)=>count+1) //cb fn holds the prev value
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }
    function handleDec(){
        // setCount(count-1)
        // setCount(count-1)
        // setCount(count-1)
        setCount((count)=>count-1)
        setCount((count)=>count-1)
        setCount((count)=>count-1)
    }
  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>Count: {count} </h1>
        <button onClick={()=>handleDec()}>-</button>
    </div>
  )
}
export default Jump