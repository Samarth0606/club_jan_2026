

// let obj = {
//     firstName: "Rahul",
//     lastName: "Garg",
//     age: 100,
//     isMale: true
// }

// function isLegal(obj: {
//     firstName: string,
//     lastName: string,
//     age: number,
//     isMale: boolean
// } ):boolean{
//     return obj.age>18 ? true:false
// }
// isLegal(obj)

// ---------------------------------------
// let obj = {
//     firstName: "Rahul",
//     lastName: "Garg",
//     age: 100,
//     isMale: true
// }
// let obj2 = {
//     firstName: "Rahul",
//     lastName: "Garg",
//     age: 100
// }

// interface User{
//     firstName: string,
//     lastName: string,
//     age: number,
//     isMale?: boolean //optional parameter/argument
// }

// function isLegal(obj: User ):boolean{
//     return obj.age>18 ? true:false
// }
// isLegal(obj)
// isLegal(obj2)

// ---------------------------------------
// interface X{
//     name:string,
//     age:number,
//     greet(phrase:string):void
// }

// class Student implements X{
//     name:string;
//     age:number;
//     constructor(n:string , a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string):void{
//         console.log(`${phrase} : ${this.name}`)
//     }
// }
// let s1 = new Student("sam" , 100)
// let s2 = new Student("sam" , 300)
// s1.greet("hello")

// console.log(s1)

// inference = avoid
// ---------------------------------------


// type Play = number | string | boolean

// function sam(id:Play){

// }

// sam(1)
// sam("2")
// sam(true)

// ---------------------------------------

// type DSA = {
//     teacher:string,
//     leetcode:number,
// }
// type WEB = {
//     teacher:string,
//     projects:number,
// }
// type Samarth = DSA & WEB;

// const sam: Samarth = {
//     teacher:"web and dsa",
//     leetcode:211,
//     projects: 23
// }

// ---------------------------------------

// let arr = [10, 20 , 30 , 50 , 40 , 70 , 25]

// function maxi(arr:number[]){
//     let max = 0;
//     for(let item of arr){
//         if(item>=max){
//             max = item
//         }
//     }
//     return max;
// }
// maxi(arr)

// find max item from array

// ---------------------------------------

// array of object

interface X{
    firstName: string, 
    age: number
}
function isLegal(obj: X[]):boolean{
    for(let item of obj){
        if(item.age>18){
            return true
        }else{
            return false
        }
    }
    return false
}
let arr = [{firstName: "Rahul", age: 100} , {firstName: "Sam", age: 33}]
isLegal(arr)
