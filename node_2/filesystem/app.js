const { log } = require('console');
const fs = require('fs');


// create
// let dataa = "NAMASTE FROM CODE BAITHAK"
// fs.writeFileSync('sam.txt' , dataa , {})
// fs.writeFileSync('sam.txt' , dataa , {flag:'w', encoding:'utf-8'})
// fs.writeFile('mav.txt', "Mav rocks" , {} , (err)=>{
//     if(err) throw err
// })

// read
// let resp = fs.readFileSync('sam.txt' , {flag:'r', encoding:'utf-8'})
// let resp = fs.readFileSync('sam.txt', {})
// console.log(resp.toString());
// fs.readFile('mav.txt', {encoding:'utf-8'} , (err , data)=>{
fs.readFile('mav.txt', {} , (err , data)=>{
    if(err) {
        throw err
    }
    else{
        console.log(data.toString());
    }
})


// update
// fs.appendFileSync('sam.txt' , "Maverick eats pedigree" , {})
// fs.appendFileSync('sam.txt' , "\nSamarth teaches Web" , {})

// delete
// fs.unlinkSync('sam.txt')

