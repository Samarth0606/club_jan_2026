import React, { memo, useState } from 'react'

function Memoo({naam}) {
    const [user,setUser] = useState(naam);
    function handleUser(){
        setUser(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <Chotu data={user} />
        <button onClick={handleUser}>Badal Do</button>

        <Chotu data="Sam" />
        <Chotu data="Mav" />
    </div>
  )
}

const Chotu = memo( function({data}){
    return(
        <div>
            <h1>Hello from: {data}</h1>
        </div>
    )
} )


export default Memoo