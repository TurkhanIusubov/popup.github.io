const button1 = document.querySelector('#button1')
const section2 = document.querySelector('.section2')

button1.addEventListener('click', openForm)

function openForm(){
    section2.style.display = 'flex'
}


const close = document.querySelector('.sign-up>h1')

close.addEventListener('click', closeFunction)

function closeFunction(){
    section2.style.display = 'none'
}











