// this depends how it is being called

// 1. functional calling => window 

// function sam(){
//     console.log(this);
// }
// sam(); //directly called

// ------------------------------------

// 2. object calling => this points to the object inside which the method is available

// let oobj = {
//     a: 100,
//     fn: function(){ 
//         console.log(this) 
//     }
// }

// oobj.fn(); //obj


// ------------------------------------


// 1. function calling
// 2. object calling

// function vohra(){
//     console.log(this); 
// }

// vohra(); 
//directly => window


// ------------------------------------

// let person = {
//     name: "Sammy boi",
//     age: 1100,
//     fn: function(){ 
//         console.log(this);
//     }
// }

// person.fn() // object calling
// this points to the object inside which the method is available

// ------------------------------------


// let person = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // window ,  object
//         let sam = function(){
//             console.log(this , "2"); // window
//         }
//         sam(); //directly
//     }
// }

// person.fn()

// let out = person.fn;
// out(); //direct fn

// ------------------------------------


// let sam = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); //sam object
//     },
//     fun: function(){
//         console.log(this , "2"); //window
//         let vohra = function(){
//             console.log(this , "3");   //window
//         }
//         vohra() //direct
//     }
// }

// let out = sam.fun;
// out(); //directly 
// sam.fn(); // object

// ------------------------------------


// let sam = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1");  // not being printed
//     },
//     fun: function(){
//         console.log(this , "2"); // sam
//         let vohra = {
//             naam: "sammy",
//             greet: function(){
//                 console.log(this); //vohra
//             }
//         }
//         vohra.greet();
//     }
// }

// sam.fun();
// sam.fn(); //sam


// ------------------------------------
// 3. constructor => points to the newly created object

// function Sam(){
//     this.age = 121;
//     this.name = "sam";
// }

// let o1 = new Sam();
// let o2 = new Sam();
// console.log(o1);
// console.log(o2);

// ------------------------------------

// 4. indirect calling => call bind apply => change the reference of this keyword

// let obj1 = {
//     a: 10,
//     fn: function(x,y,z){ console.log(this.a,x,y,z) }
// }
// // obj1.fn(); //10


// let obj2 = {
//     a: 50
// }
// // obj2.fn(); //error
// obj1.fn.call(obj2 , 10 , 20 , 30) //50 , comma seperated arguments
// obj1.fn.apply(obj2, [100,200,300]) //50, arguments in array format

// -------------------------------

// let obj1 = {
//     a: 10,
//     fn: function(x , y){ 
//         console.log(this.a) 
//         // console.log(x);
//         // console.log(y);
//     }
// }

// let obj2 = {
//     a: 50
// }

// obj1.fn.call(obj2, "sam" , "vohra")
// obj1.fn.apply(obj2, [10,20])
// obj1.fn.call(obj2)
// obj1.fn.apply(obj2)

// const copiedFn = obj1.fn.bind(obj2) //doesnot execute itself => it only creates a copy of the fn
// copiedFn() //executing myself

// ------------------------------------

// 5. arrow function => syntactical sugar


// function sum(a,b){
//     return a+b
// }

// const sum = (a,b)=>{
//     return a+b
// }



// console.log( sum(10,20) );

// ---------------
// 5. arrow => this keyword for arrow functions depends/points to parent's this

// function square(n){
//     return n*n;
// }

// way-1
// const square = (n)=>{
//     return n*n;
// }

// way-2
// const square = (n)=> n*n;

// way-3
// const square = n => n*n;

// console.log( square(6) );

// 5. arrow => this keyword for arrow functions depends/points to parent's this


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //obj
//         let sam = ()=>{
//             console.log(this); //obj
//         }
//         sam();
//     }
// }

// obj.fn();

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //window
//         let sam = ()=>{
//             console.log(this); 
//         }
//         sam();
//     }
// }

// let vohra = obj.fn;
// vohra();

// window
let obj = {
    a: 10,
    fn: ()=>{
        console.log(this);
        let sam = ()=>{
            console.log(this); 
        }
        sam();
    }
}
let obj2 = {b:10}

obj.fn();
