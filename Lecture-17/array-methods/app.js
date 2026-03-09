

// let arr = [10,20,40,30,50,70,60]; //7

// 1. forEach => loop ❌ => array method ✅ => acts like a loop

// iterates on each and every element of your array
// it accepts a cb fn => that cb fn has 2 args => item , index and it doesnot returns anything


// let returnedVal = arr.forEach( function(item,index){
//     console.log(item , ":" , index);
//     // return item
// } )

// console.log(returnedVal); //undefined

// ----------------------------------------

// 2. map => array method =>  HOF
// iterates on all the elements =>  
// it accepts a cb fn => that cb fn has 2 args => item , index and it will return a new array 
// (with the same size as that of original array)

// let newArray = arr.map( function(item,index){ //always 7 (same)
//     return item*item
// } ) 

// console.log(arr);
// console.log(newArray);


// ----------------------------------------

// 3. filter => array method =>  HOF
// iterates on all the elements =>  
// it accepts a cb fn => that cb fn has 2 args => item , index and it will return a new array 
// (but the length is not fixed as it only returns truthy value) // true

// let retuendArr = arr.filter( function(item,index){
//     if(item > 30){
//         return true;
//     }
// } )
// console.log(arr);
// console.log(retuendArr);


// ----------------------------------------


// let ageArr = [10,20,30,40,50];
// filter > 20 : allowed to enter the club


// Write a function that takes an array of numbers, doubles each value, and then filters out the values greater than 10.

// solution 1
// let arr = [10,20,30,40,50];
// function doubling(arrr){
//     let output1 = arrr.map( function(item,index){
//         return 2*item;
//     } )
//     let final = output1.filter(function(item,index){
//         if(item>50){return true}
//     })
//     return final
// }

// console.log( doubling(arr) );

// -------------------------
// better way (chaining) - solution 2

// let arr = [10,20,30,40,50];
// function doubling(arrr){
//     return arrr.map( function(item,index){
//         return 2*item;
//     } ).filter(function(item,index){
//         if(item>50){return true}
//     })
// }

// console.log( doubling(arr) );

// -------------------------
// better way (chaining) - solution 3

// let arr = [10,20,30,40,50];
// function doubling(arrr){
//     return arrr.map( function(item){
//         return 2*item;
//     } ).filter(function(item){
//         (item>50) ? true : false
//     })
// }

// console.log( doubling(arr) );


// -------------------------------------------------------------------


// some() => either one of them to be true
// HOF => ACCEPTS CB => returns boolean value only T/F

// let arr = [5,10,4,6,325];
// let returnedVal = arr.some( function(item){
//     console.log("cb fn executed");
//     if(item%10 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// } )

// console.log(returnedVal);

// how many times the cb fn is executed?

// ----------------------

// every() => all of them compulsary to be true
// HOF => ACCEPTS CB => returns boolean value only T/F

// let arr = [15,10,4,6,325];

// let returnedVal = arr.every(function(item){
//     console.log("mai hal diya");
//     if(item>7){
//         return true
//     }else{
//         return false
//     }
// })

// console.log(returnedVal);

// how many times the cb fn is executed?


// HOMEWORK: find, sort, reduce (15 mins - > MDN) // docs   => habit/adaat

// ----------------------------------------
let arr = [10,20,30,40,50];

// PUSH(ADD), POP(REMOVE) (END)

// let what2 = arr.push(400);  //6
// console.log(what2); //newarray with pushed value => length

// let what = arr.pop() 
// console.log(what); //removed element




// SHIFT(REMOVE), UNSHIFT(ADD) - starting

// let what2 = arr.unshift(400);  //6
// console.log(what2); //newarray with pushed value => length

// let what = arr.shift() 
// console.log(what); //removed element = 400

// console.log(arr.length);

// -------------------------

