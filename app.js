
const skillCards = document.querySelector('.skill-cards');
const cardsContainer = document.querySelector('.cards');
const date = document.querySelector('#date')
const headerButtons = document.querySelector('.header-btns')
const heroDot = document.querySelector('.dot')



date.innerHTML = new Date().getFullYear()

let textToDisplay;
let cards = []

const projectData = [
    {
        id: "0",
        used: "Reviewing Landlords",
        github: '',
        challenges: "Reviewing landlords from Lithuania made possible and easy."
    },
    {
        id: "1",
        used: "Barbershop For Men",
        github: 'https://github.com/Galvotas/barbershop.git',
        challenges: "A modern barbershop for modern people. Client can see barbers and their work, and so make first impression.",
    },
    
    {
        id: "3",
        used: "Simple Recipes",
        github: 'https://github.com/Galvotas/Recipes-React.git',
        challenges: "Simple recipes website made with React."
    },
    {
        id: "4",
        used: "For Tour Lovers",
        github: 'https://github.com/Galvotas/peskom.git',
        challenges: 'Static website made for tour enthusiast. Designed by Mališauskas studio.'
        }
    ]
const skillsData = [
    {
skillName: "HTML",
iconUrl: "icons/html-5.svg"
    },
    {
        skillName: "CSS",
        iconUrl: "icons/css-3.svg"
    },
    {
        skillName: "JAVASCRIPT",
        iconUrl: "icons/js.svg"
    },
    {
        skillName: "REACT",
        iconUrl: "icons/react.svg"
    },
    {
        skillName: "REACT HOOKS",
        iconUrl: "icons/hooks.svg"
    },
    {
        skillName: "FORMIK",
        iconUrl: ""
    },
    {
        skillName: "YUP",
        iconUrl: ""
    },
    {
        skillName: "STYLED",
        iconUrl: "icons/styled_components.svg"
    },
    {
        skillName: "SASS",
        iconUrl: "icons/sass.svg"
    },
    {
        skillName: "MATERIAL-UI",
        iconUrl: "icons/letter-m.svg"
    },
    {
        skillName: "MATERIALIZE CSS",
        iconUrl: ""
    },
    {
        skillName: "BOOTSTRAP",
        iconUrl: "icons/bootstrap.svg"   
    },
    {
        skillName: "REDUX",
        iconUrl: "icons/redux.svg"
    },
    {
        skillName: "GIT",
        iconUrl: "icons/git.svg"
    },
    {
        skillName: "STRAPI",
        iconUrl: ""
    },
    {
        skillName: "RESPONSIVE DESIGN",
        iconUrl: "icons/responsive-design-symbol.svg"
    },
    
]

function check(element, classname, link) {
    if(element.target.classList.contains(`${classname}`))  {
        window.open(`${link}`, '_blank');
    }
}

function check(element, classname, link) {
    if(element.target.classList.contains(`${classname}`))  {
        window.open(`${link}`, '_blank');
    }
}

const displaySkills = () => {
    skillsData.forEach(skill => {
        const {skillName, iconUrl} = skill
        const card = document.createElement('div')
        card.classList.add('skill-card')
        const skillIconContainer = document.createElement('div')
        skillIconContainer.classList.add('skill-icon')
const skillIcon = document.createElement('img')
skillIcon.src = `${iconUrl}`
const skillType = document.createElement('h3')
skillType.classList.add('skill-type')
skillCards.appendChild(card)
card.appendChild(skillIconContainer)
skillIconContainer.appendChild(skillIcon)
card.appendChild(skillType)
skillType.innerHTML = `${skillName}`
    })
}

const createProjectCard = (githubLink, index) => {
    const card = document.createElement('div')
    card.className = `card card${index}`
    card.setAttribute('data-key', index)
    let c = `
    <div class="project-description"></div>
    ${githubLink && `
    <div class="github-link">
      <a
        href="${githubLink}"
        target="_blank"><i class="fab fa-github"></i></a>
    </div>
`}
    `
    card.innerHTML = c
    cardsContainer.appendChild(card)
    cards.push(card)
}

const createCards = () => {
    projectData.map((project, index) => {
        const {github} = project
        return createProjectCard(github, index)
    })
}

const cardEnter = (cards) => {
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
}

const cardLeave = (cards) => {
    cards.forEach(card => card.addEventListener('mouseleave', (e) => {
        const descriptionElement = e.target.children[0]
        descriptionElement.style.width = "0"
        descriptionElement.innerHTML = ""
        descriptionElement.style.visibility = 'hidden'
    }))
}

const doThings = async () => {
    await createCards()
    cardEnter(cards)
    cardLeave(cards)
}



window.addEventListener('DOMContentLoaded', () => {
    displaySkills()
    doThings()
})

window.addEventListener('click', (e) => {
    check(e, `card0`, `https://tanuoma.lt/`)
check(e, `card3`, `https://peskom.lt/` )
check(e, `card1`, `https://galvotas.github.io/barbershop/`)
check(e, `card2`, `https://galvotas.github.io/Restaurant/`)
})

headerButtons.addEventListener('mouseover', e => {
    if(e.target.classList.contains('portfolio-btn') || e.target.classList.contains('contact-btn')) {
        heroDot.classList.toggle('changeDotColor')
    }
})
headerButtons.addEventListener('mouseout', e => {
    if(e.target.classList.contains('portfolio-btn') || e.target.classList.contains('contact-btn')) {
        heroDot.classList.remove('changeDotColor')

    }
})






