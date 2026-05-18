import { useState } from "react"
function Jump() {
    const [count,setCount] = useState(0); 
    function handleInc(){
        setCount((count)=>count+3) //prev // 3
        setCount(count+5) //init  // 5
        setCount((count)=>count+6) //prev // 11
    }
  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>Count: {count} </h1>
    </div>
  )
}
export default Jump


// import { useState } from "react"
// function Jump() {
//     const [count,setCount] = useState(0); 
//     function handleInc(){
//         setCount((count)=>count+1) // prev // 1
//         setCount(count+1) // initial // 1
//         setCount((count)=>count+1) // prev  // 2
//     }
//   return (
//     <div>
//         <button onClick={handleInc}>+</button>
//         <h1>Count: {count} </h1>
//     </div>
//   )
// }
// export default Jump


// import { useState } from "react"
// function Jump() {
//     const [count,setCount] = useState(0); 
//     function handleInc(){
//         setCount((count)=>count+1) //prev // 1
//         setCount((count)=>count+1) //prev // 2
//         setCount((count)=>count+1) //prev // 3
//     }
//   return (
//     <div>
//         <button onClick={handleInc}>+</button>
//         <h1>Count: {count} </h1>
//     </div>
//   )
// }
// export default Jump