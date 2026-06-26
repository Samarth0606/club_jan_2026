const express = require('express');
const app = express()

// write routes kaam

//root route
app.get('/' , (req,res)=>{
    res.send("hello")
})

app.get('/sam' , (req,res)=>{
    res.send("Welcome to code baithak")
})

const PORT = 8080;
app.listen(8080, () => {
  console.log(`Server is listening on port ${PORT}`)
})