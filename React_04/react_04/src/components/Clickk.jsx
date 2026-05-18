import { useState } from "react"

function Clickk({naam}) {
    const [user,setUser] = useState(naam);

    function codebaithak(){
        setUser('Anonymous')
    }

  return (
    <div>
        <h1> {user} </h1>
        <button onClick={codebaithak} >Logout</button>
    </div>
  )
}

export default Clickk

// -----------------------------------------------------

// function Clickk({naam}) {

//     function codebaithak(){
//         console.log(naam , "before");
//         naam = "Anonymous";
//         console.log(naam , "after");
//     }

//   return (
//     <div>
//         <h1> {naam} </h1>
//         <button onClick={codebaithak} >Logout</button>
//     </div>
//   )
// }

// export default Clickk