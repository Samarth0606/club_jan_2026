
let input1 = document.querySelector('#samarth')
let input2 = document.querySelector('.vohra')


console.log(input1);
console.log(input2);


// getter
console.log(input1.getAttribute('id'));
console.log(input1.getAttribute('type'));

// setter
input1.setAttribute('type' , 'password')

// -------------------------------------
let an = document.querySelector('a')
console.log( an.getAttribute('href') );
// an.setAttribute('href' , 'http://google.com')
an.setAttribute('target' , '_blank')


