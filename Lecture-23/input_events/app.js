// let inp = document.querySelector('input');


// function sam(){
//     console.log("input");
// }


// inp.addEventListener('keydown' ,  function(event){
// inp.addEventListener('keyup' ,  function(event){
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value); //getter & setter
//     // event.target.value = "vohra sahab"
// })

// inp.addEventListener('change' ,  function(event){
//     console.log("sam");
    
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.target.value); //getter & setter
//     // event.target.value = "vohra sahab"
// })


// inp.onclick = sam;
// inp.onchange = sam;

// ------------------------------------------


// let arrImages = [ ...4 images...]

// after every 2 second the image should change, again back to starting

let arrImages = [
    'https://images.unsplash.com/photo-1773691323862-b33577111b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', 
    'https://images.unsplash.com/photo-1773746685112-647c4f81344c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8', 
    'https://images.unsplash.com/photo-1773781556147-2106e3145777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1761839257961-4dce65b72d99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'
]

let imgEl = document.querySelector('img');

let i = 0;

let id = setInterval(()=>{
    imgEl.setAttribute('src' , arrImages[i])
    i = (i+1) % arrImages.length;
} , 2000)


setTimeout(()=>{
    clearInterval(id)
} , 30000)


// ------------------------------------------


