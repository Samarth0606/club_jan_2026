
// let obj = {
//     a: 10,
//     fn: function(){ console.log("heyy") }
// }

// console.log(obj.a); //10
// console.log(obj.b); // undefined => property
// console.log(obj.fun); // undefined => property

// obj.fn();
// obj.fun(); //method => error

// --------------------



let obj = {
    a: 10,
    fn: function(){ console.log("heyy") }
}

console.log( obj.a );
console.log( obj.b );
obj.fn()
console.log( obj.toString() ); //error // prototype
console.log( obj.sam() ); //error

