
const cards = document.querySelectorAll('.card')
const skillCards = document.querySelector('.skill-cards')
let textToDisplay;

const projectData = [
    {
        id: "0",
        used: "Mostly Used: HTML/SCSS",
        challenges: "This project provided good practice with GRID."
    },
    {
        id: "1",
        used: "Mostly Used: HTML/SCSS",
        challenges: "No challenges endured on this project.",
    },
    {
        id: "2",
        used: "Mostly Used: React, REST API, Router",
        challenges: "Router, working with state through multiple components was most challenging in this one."
        }, 
    {
        id: "3",
        used: "Mostly Used: JS, REST API",
        challenges: "Much value during production here. Mainly working with data from API."
    }
    ]
const skillsData = [
    {
skillName: "HTML",
iconUrl: "./skill_icons_svg/html-5.svg"
    },
    {
        skillName: "CSS",
        iconUrl: "./skill_icons_svg/css-3.svg"
    },
    {
        skillName: "JavaScript",
        iconUrl: "./skill_icons_svg/js.svg"
    },
    {
        skillName: "SASS",
        iconUrl: "./skill_icons_svg/sass.svg"
    },
    {
        skillName: "REACT",
        iconUrl: "./skill_icons_svg/react.svg"
    },
    {
        skillName: "Materialize UI",
        iconUrl: "./skill_icons_svg/letter-m.svg"
    },
    {
        skillName: "Bootstrap",
        iconUrl: "./skill_icons_svg/bootstrap.svg"   
    },
    {
        skillName: "GIT",
        iconUrl: "./skill_icons_svg/git.svg"
    },
    {
        skillName: "Responsive Design",
        iconUrl: "./skill_icons_svg/responsive-design-symbol.svg"
    }
]



const displaySkills = () => {
    skillsData.forEach(skill => {
        const {skillName, iconUrl} = skill
        const card = document.createElement('div')
        card.classList.add('skill-card')
        const skillIconContainer = document.createElement('div')
        skillIconContainer.classList.add('skill-icon')
const skillIcon = document.createElement('img')
skillIcon.src = `${iconUrl}`
const skillType = document.createElement('h1')
skillType.classList.add('skill-type')
skillCards.appendChild(card)
card.appendChild(skillIconContainer)
skillIconContainer.appendChild(skillIcon)
card.appendChild(skillType)
skillType.innerHTML = `${skillName}`
    })
}

document.addEventListener('DOMContentLoaded', displaySkills)


    cards.forEach(card => card.addEventListener('mouseenter', (e) => {
        const descriptionElement = e.target.children[0]
        let cardNumber = e.target.dataset.key
        descriptionElement.style.width = "80%"
        descriptionElement.style.visibility = "visible"
        descriptionElement.innerHTML = ""
setTimeout(() => {
 descriptionElement.innerHTML = `
<h3 class="description-heading">${projectData[cardNumber].used}</h3>
<p class="description-text">${projectData[cardNumber].challenges}</p>
`
}, 350)
}))

    

    cards.forEach(card => card.addEventListener('mouseleave', (e) => {
        const descriptionElement = e.target.children[0]
        descriptionElement.style.width = "0"
        descriptionElement.innerHTML = ""
        descriptionElement.style.visibility = 'hidden'
    }))

//project cards

window.addEventListener('click', (e) => {
check(e, `card4`, `https://galvotas.github.io/little_quiz/` )
check(e, `card3`, `https://galvotas.github.io/Recipes-React/`)
check(e, `card1`, `https://galvotas.github.io/barbershop/`)
check(e, `card2`, `https://galvotas.github.io/Restaurant/`)
})

function check(element, classname, link) {
    if(element.target.classList.contains(`${classname}`))  {
        window.open(`${link}`, '_blank');
    }
}

