// selection
let h1 = document.querySelector('h1');
// h1.setAttribute('class' , 'sam')
// h1.setAttribute('class' , 'sam' , 'vohra')
// h1.setAttribute('class' , 'sam vohra') //not a good way

// manipuation - classList

h1.classList.add('sam' , 'vohra' , 'code' , 'baithak')
// h1.classList.remove('vohra' , 'sam' ,'code', 'baithak')


h1.classList.toggle('sam') //removed

h1.classList.contains('sam') //boolean