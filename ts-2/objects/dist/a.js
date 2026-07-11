"use strict";
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
class Student {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} : ${this.name}`);
    }
}
let s1 = new Student("sam", 100);
console.log(s1);
