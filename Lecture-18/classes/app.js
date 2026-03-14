// contructor

// function Person(naam,umar){
//     this.name = naam;
//     this.age = umar;
//     this.greet = function(){
//         console.log("hello ji");
//     }
// }

// let p1 = new Person("Sam" , 12);
// let p2 = new Person("Mav" , 4);
// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()
// ------------------------------

// classes
// class Person{
//     constructor(naam,umar){
//         this.name = naam;
//         this.age = umar;
//     }
//     greet(){
//         console.log("hello ji");
//     }
// }
// let p1 = new Person("Sam" , 12);
// let p2 = new Person("Mav" , 4);
// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()

// ------------------------------


class Person{
    constructor(name , age , email){
        this.naam = name;
        this.umar = age;
        this.mailid = email;
    }
    greet(){
        console.log(`hello from ${this.naam}`);  
    }
}
let p1 = new Person("sam" , 10 , "sam@gmail.com")


class Student extends Person { //inheritence
    constructor(name , age , email, rollno){
        super(name , age , email) //calling the constructor of parent
        this.roll = rollno;
    }
    greet(){
        console.log(`bye from ${this.naam}`);  
    }
}

let p2 = new Student("mav" , 4 , "mav@gmail.com" , 420)









