function handleClick1(){
    console.log("heyy buddy");
}
function handleClick2(){
    console.log("Icecream");
    
}
// ------------------------------

// const button = document.querySelector('button');

// button.onclick = handleClick1;
// button.onclick = handleClick2; //overriding

// ------------------------------

// addEventListener() => best => multiple fn executions
const button = document.querySelector('button');

button.addEventListener('click' , handleClick1 )
button.addEventListener('click' , handleClick2 )




