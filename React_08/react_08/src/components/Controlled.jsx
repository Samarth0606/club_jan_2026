import React, { useState } from 'react'

function Controlled() {
    const [inp1,setInp1] = useState("");

    function handleInp(e){
        setInp1(e.target.value);
    }
  return (
    <div>
        {/* <input type="text" /> */}
        <input onChange={handleInp} type="text" value={inp1}/>
    </div>
  )
}

export default Controlled