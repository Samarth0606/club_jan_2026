

let a = 10;
let obj = {
    x: 10,
    fn: function(){
        console.log("balle balle"); 
    }
}
let arr = [10,20,30,40,50]

console.log(a);
obj.fn();
console.log(arr);

// jata kya hai by default
// module.exports = {a,obj,arr}
export {a,obj,arr}