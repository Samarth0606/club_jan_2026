

// async function sam(){

//     return "sam"
// }

// console.log( sam() );

// console.log( new sam() );

// --------------------------


// async function sam(){
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos') //promise
//     let data = await resp.json() //promise
//     console.log(data);
// }

// sam();


// --------------------------


// async function sam(){
//     console.log(10);
//     let resp =  fetch('https://jsonplaceholder.typicode.com/todos') //promise 
//     console.log(resp);
//     console.log(20);
//     console.log(30);
// }

// sam();

// --------------------------

// async function sam(){
//     console.log(10);
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos') //promise 
//     console.log(resp);
//     console.log(20);
//     console.log(30);
// }

// console.log(1);
// sam();
// console.log(2);
// console.log(3);


// 1 , 10 ,rep , 20 , 30 , 2 , 3    //before await
        //after await  correct

// 1 10 2 3 20 30 resp  after await
// 1 10 20 30 2 3 resp  after await

// 1 10 2 3 resp 20 30 after await

// --------------------------

async function sam(){
    console.log(10);
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos') //promise 
    console.log(resp , "sam");
    console.log(20);
    console.log(30);
}
async function sam2(){
    console.log(10000);
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos') //promise 
    console.log(resp, "sam 2");
    console.log(20000);
    console.log(30000);
}
console.log(1);
sam();
sam2();
console.log(2);
console.log(3);








