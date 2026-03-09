

// HOF => 2 def.
// 1. when you are passing another fn as an argument then the fn which is accepting the argument is HOF
// 2. when you return a fn from some other fn then the fn which is returning the smaller fn is called as HOF

// -------------------- HOF --------------------
function outer( fn ){ //parameter
    console.log("i am outer");
    fn();   //calling the fn - majorly called as well within HOF
}
// inner is being passed as an argument so it will be called as CB fn
function inner(){
    console.log("i am inner");
}

outer( inner ) //argument

// -----------------------------------------------------------------------

// --------- HOF ----------
function outer(){
    console.log("i am outer");
    function inner(){
        console.log("i am inner");  
    }
    return inner;
}
outer()
// or
// let returnedVal = outer()
// returnedVal();