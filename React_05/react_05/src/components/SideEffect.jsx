import { useEffect, useState } from "react"
function SideEffect() {
    const [todos , setTodos] = useState([]);
    
    useEffect(()=>{
        const API="https://jsonplaceholder.typicode.com/todos"
        fetch(API) //returns a promise
        .then((resp)=>{return resp.json() }) //promise
        .then((data)=>{
            console.log(data) 
            setTodos(data) //change in state
        })
        .catch((err)=>console.log(err) )
    }, [])

  return (
    <div>
        <h1>Api Calling</h1>
        {
            todos.map((item)=>{
                return( <div>
                        <h1>ID: {item.id}</h1>
                        <h1>TITLE: {item.title}</h1>
                        <h1>IS COMPLETED: {JSON.stringify(item.completed)}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SideEffect