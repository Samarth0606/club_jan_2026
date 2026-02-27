// EVERYTHING INSIDE JS IS AN OBJECT (PROOF: 6 MORE CLASSES)

//unordered (dictionary order)
let person = {
    legs: 2,
    hair: "black",
    name: "Sam",
    age: 22,
    isMale: true,
    favColor: "blue",
}

let arr = [10,40,20,50,30]

// console.log( person["hair"] ); //1. arrays way = yes
// console.log(person.favColor); //in the object
// console.log(person.isMale); //in the object  //dot notation

// ------------------------

// for-in (objects)  // index
// for(let i of person){
for(let i in person){
    // console.log(1,2,3,4);
    console.log(i, person[i]); // cant use dot notation 
    // console.log(person.i); // cant use dot notation (try to find the key "i" inside it)
}






