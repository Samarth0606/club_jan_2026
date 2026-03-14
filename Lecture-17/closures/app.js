
function outer(){
    console.log("I M OUTER");
    let a = 10;
    let b = 20;
    let c = 30;
    
    function inner(){
        console.log("I M INNER");
        console.log(a+c);
    }
    return inner;
}


let returnedVal = outer();
returnedVal();
// console.log(a , c);
