
//fetch => web api => returns a promise => 

// fetch(api)

// fetch("https://jsonplaceholder.typicode.com/todos") //returns a promise

// const API = "https://jsonplaceholder.typicode.com/todos"


// fetch with promise
fetch(API) //promise
.then((data)=>{
    return data.json() //promise
})
.then((resp)=>{
    console.log(resp , ".then");
})
.catch((err)=>{
    console.log(err , ".catch");
})

// -----------------------------------
// fetch with async await

async function callingApi(){
    let data = await fetch(API); //partial data / meta data
    let resp = await data.json() //wait for the entire data / convert it into JSON format
    console.log(resp);
}

callingApi()

// -----------------------------------
// axios => 3rd party library/package

const API = "https://jsonplaceholder.typicode.com/todos"

axios.get(API)
.then((resp)=>{console.log(resp.data , ".then") })
.catch((err)=>{console.log(err , ".catch") })
// or
async function callingApi(){
    let resp = await axios.get(API)
    console.log(resp.data);
}
callingApi()