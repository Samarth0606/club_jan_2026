// console.log("hello");
// const abc = "10";
// console.log(abc);

// ------------------------
// type safety / data type declare power

// let num = 10; //number
// num = "sam"; //string
// console.log(num);

// ------------------------

// let num:number = 10; //inference =>  automatically assigning the types
// num = 1000;   // number
// console.log(num);

// ------------------------

// function greeting(user:string):void{ //inference (we should avoid)
//     console.log(`hello ${user}`);
// }
// greeting("Samarth")
// ------------------------

// 2. write a fn that returns sum of 2 nums
// 3. return true/false based on age checker if 18+ => true

// function summ(x:number , y:number):number{
//     return x+y
// }
// summ(3,4)

// ------------------------
// function ageCheck(age:number):boolean{
//     if(age>18){
//         return true
//     }else{
//         return false
//     }
// }
// ageCheck(19)
// ------------------------


// function a():void{
//     console.log("hello from a");
// }

// function b(fn : ()=>void):boolean{
//     setTimeout(()=>{
//         fn()
//     } , 1000)
//     return true
// }

// b(a)
// ------------------------

// function a(x:number){
//     console.log("hello from a");
// }

// function b(fn : (x:number)=>void):boolean{
//     setTimeout(()=>{
//         fn(200)
//     } , 1000)
//     return true
// }

// b(a)

// ------------------------


const sam = ()=>{ console.log("broo") }

let vohra = 100;

var mav = true;

// module.exports = {}
// export default