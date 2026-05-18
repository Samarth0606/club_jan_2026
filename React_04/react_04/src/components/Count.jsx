import { useState } from "react"

function Count() {
    const [count,setCount] = useState(0)

    function handleInc(){
        setCount(count+3)
    }
    function handleDec(){
        setCount(count-3)
    }

  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>Count: {count} </h1>
        <button onClick={()=>handleDec()}>-</button>
    </div>
  )
}

export default Count