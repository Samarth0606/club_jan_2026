// selection
// let h1 = document.getElementsByTagName('h1') //array kinda
// console.log(h1[0]);
// console.log(h1[1]);
// console.log(h1[2]);

// manipulation
// h1[0].style.color = "red"
// h1[1].style.border = "2px solid green"
// h1[2].style.fontSize = "50px"

// ----------------------------


// selection
// let idd = document.getElementById('samarth') //single element
// console.log(idd);

// manipulation
// idd.style.color = "purple"

// ----------------------------
// selection
// const allClasses = document.getElementsByClassName('vohra') //array kinda
// console.log(allClasses);

// manipulation //WET => WRITE EVERYTHING TWICE
// allClasses[0].style.color="red"
// allClasses[0].style.fontSize="60px"
// allClasses[0].style.border="5px solid green"
// allClasses[0].style.backgroundColor="yellow"

// manipulation //DRY => DONOT REPEAT YOURSELF

// allClasses[0].style.cssText = `
//                                 color: red;
//                                 font-size: 100px;
//                                 border: 2px solid brown;
//                                 background-color: orange;
//                             `


// for(let item of allClasses){
//     item.style.cssText = `
//                             color: red;
//                             font-size: 100px;
//                             border: 2px solid brown;
//                             background-color: orange;
//                         `
// }

// -----------------------------------------------


// let h1 = document.querySelector('h1')
// let classes = document.querySelector('.vohra')
// let ids = document.querySelector('#samarth')

// console.log(h1);
// console.log(classes);
// console.log(ids);


// h1.style.color = "red"
// classes.style.color = "green"
// ids.style.color = "blue"


// -----------------------------------------------

// all occurances at once

let h1 = document.querySelectorAll('h1')           //array kinda
let classes = document.querySelectorAll('.vohra')  //array kinda
let ids = document.querySelectorAll('#samarth')    //array kinda

console.log(h1);
console.log(classes);
console.log(ids);


h1[0].style.color = "red"
h1[1].style.color = "red"
classes[0].style.color = "green"
classes[1].style.color = "green"
ids[0].style.color = "blue"
ids[1].style.color = "blue"
