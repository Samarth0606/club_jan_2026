let listt  = document.querySelector('.listt')

listt.style.color = "red"
listt.nextElementSibling.nextElementSibling.style.color = "green"

listt.nextElementSibling.nextElementSibling.previousElementSibling.style.color = "orange"


listt.parentElement.parentElement.style.border = "5px solid black"


listt.parentElement.parentElement.children[0].style.backgroundColor = "purple"