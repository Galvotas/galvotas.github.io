
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const hamburger = document.querySelector('.hamburger-box');
const modul = document.querySelector('.modul')

//project buttons

hamburger.addEventListener('click', () => {
line1.classList.toggle('active1')
line2.classList.toggle('active2')
line3.classList.toggle('active3')
modul.classList.toggle('on')
})

window.addEventListener('click', (e) => {
//quiz project
if(e.target.classList.contains('project1-site')) {
    window.location.href = "https://galvotas.github.io/little_quiz/"
}
    //form project
    if(e.target.classList.contains('project2-site')) {
        window.location.href = "https://galvotas.github.io/validation_form/";
    }
    //barbershop
    if(e.target.classList.contains('project3-site')) {
        window.location.href = "https://galvotas.github.io/barbershop/"
    }
})