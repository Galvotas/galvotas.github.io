

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

window.addEventListener('scroll', () => {
    modul.classList.remove('on')
    line1.classList.remove('active1')
line2.classList.remove('active2')
line3.classList.remove('active3')

})
window.addEventListener('click', (e) => {

check(e, `card4`, `https://galvotas.github.io/little_quiz/` )
check(e, `card3`, `https://galvotas.github.io/validation_form/`)
check(e, `card1`, `https://galvotas.github.io/barbershop/`)
check(e, `card2`, `https://galvotas.github.io/Restaurant/`)
    

})

function check(element, classname, link) {
    if(element.target.classList.contains(`${classname}`))  {
        window.open(`${link}`, '_blank');
    }
}
