

let step1 = function(){
    return new Promise( (resolve, reject)=>{
        console.log("plz wait selecting image...");
        setTimeout( ()=>{
            resolve('Selected Image')
        }, 4000)
        
    } )
}

let step2 = function(image){
    return new Promise((resolve,reject)=>{
        console.log(`plz wait adding filter to ${image}`);
        setTimeout(()=>{
            resolve('Filtered Image')
        },2000)
    })
}

let step3 = function(filter){
    return new Promise((resolve,reject)=>{
        console.log(`plz wait adding caption to ${filter}`);
        setTimeout(()=>{
            resolve('Captioned Image')
        },5000)
    })
}

let step4 = function(caption){
    return new Promise((resolve,reject)=>{
        console.log(`plz wait uploading ${caption}`);
        setTimeout(()=>{
            resolve('Image Uploaded')
        },3000)
    })
}

step1()
.then((image)=>{ 
    console.log(image);
    return step2(image)
})
.then((filter)=>{
    console.log(filter);
    return step3(filter)
})
.then((caption)=>{
    console.log(caption);
    return step4(caption)
})
.then((upload)=>{
    console.log(upload);
})
.catch((err)=>{ 
    console.log("got errr", err) 
})









