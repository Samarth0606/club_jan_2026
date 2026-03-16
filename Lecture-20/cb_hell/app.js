// task

// instagram => POST


function step1( fn ){
    console.log("please wait i am selecting image...");
    setTimeout( ()=>{
        fn("Selected IMAGE")
    },4000)
}

function step2(image, fn){
    console.log(`plz wait adding filter to ${image}`);
    setTimeout( ()=>{
        fn('Filtered Image')
    } , 2000 )
}

function step3(filter, fn){
    console.log(`please wait adding caption to ${filter}`);
    setTimeout( ()=>{
        fn('Captioned Image')
    }, 5000 )
}

function step4(caption){
    console.log(`uploading ${caption}`);
    setTimeout(()=>{
        console.log("Image uploaded");
    } , 3000)
}

step1( function(image){ 
    console.log("Image selected");
    step2(image , function(filter){
        console.log("Filter applied");
        step3(filter , function(caption){
            console.log("caption added");
            step4(caption);
        } )
    } )
} )




