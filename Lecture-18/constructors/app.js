
// function sam(){

// }

// console.log( sam() ); //undefined

// -------------------------------

// //constructor fn => create objects
// function Sam(){

// }

// console.log( new Sam() ); //empty object

// -------------------------------

// constructor fn => object create
// function Sam(){
//     // key : value
//     this.umar = 10;
//     this.favChocolate = "max protein";
//     this.phone = "Nokia 3310";
// }


// console.log( Sam() );  //undefined

// console.log( new Sam() ); //constructor calling

// -------------------------------



// function baarbaar(){
//     return{
//         naam: "rai",
//         umar: 12
//     }
// }

//constructor fn => object banane vaala fn
// function baarbaar(){ 
//     this.naam = "rai";
//     this.umar = 12;
// }

// let obj1 = new baarbaar(); //obj
// let obj2 = new baarbaar(); //obj
// let obj3 = new baarbaar();

// console.log(obj1 , obj2 , obj3);


// -------------------------------

function Sam(user,age,gender){
    this.naam = user; //properties
    this.umar = age,
    this.isMale = gender; //properties
    // this.greet = function(){
    //     console.log("heyy");
    // }
}
Sam.prototype.greet =   function(){
                            console.log("heyy");
                        }
// // methods? = > fns inside objects


// let o1 = new Sam("Samarth",10, true) 
// let o2 = new Sam("Maverick",100, false) 
// let o3 = new Sam("Kashish",10, true) 

// console.log(o1);
// console.log(o2);
// console.log(o3);


function sam(){

}

o1 = new sam();
