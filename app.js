

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

check(e, `card4`, `https://galvotas.github.io/little_quiz/` )
check(e, `card3`, `https://galvotas.github.io/validation_form/`)
check(e, `card1`, `https://galvotas.github.io/barbershop/`)
check(e, `card2`, `https://galvotas.github.io/Restaurant/`)
    check(e, `project1-code`, `https://github.com/Galvotas/little_quiz.git`)
    check(e, `project2-code`, `https://github.com/Galvotas/validation_form.git`)
    check(e, `project3-code`, `https://github.com/Galvotas/barbershop.git`)

})

function check(element, classname, link) {
    if(element.target.classList.contains(`${classname}`))  {
        window.open(`${link}`, '_blank');
    }
}
