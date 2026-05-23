import { useEffect, useState } from "react"
//interview
function Timer() {
    const [time,setTime] = useState(0);

    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(time+1)
        },1000)

        return ()=>clearInterval(id) //cleanup fn - executes between the 2 renders

    } , [time])

  return (
    <div>Time: {time}</div>
  )
}

export default Timer

//cleanup executes between the 2 renders

//destroy the prev timer everytime
// ⏰
//   ⏰
//     ⏰
//       ⏰ //...Nth timer
     