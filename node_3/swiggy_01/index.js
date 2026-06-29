// create express server
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurant.routes')

// mongoose.connect('mongodb://127.0.0.1:27017/nilesh'); //local connection
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:zkJg9mkiVYiCG59u@cluster0.gyi07kz.mongodb.net/') //cloud/atlas connection
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log(err , "err");
})

//body parsing middleware
app.use(express.json()) //req.body will not be undefiend

app.get('/' , (req,res)=>{
    res.send("Root Route hits")
})

restaurantRoutes(app);

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNCETED AT PORT: ${PORT}`);
})
