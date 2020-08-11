// picture slide

const slideImage = document.querySelector('.recipe1 img')
const rightButton = document.querySelector('.right-button')
const leftButton = document.querySelector('.left-button')
const addedDate = document.querySelector('.text-box1 p')
const recipeName = document.querySelector('.text-box1 h2')
const difficultLevel = document.querySelector('.difficult p')
const starsBox = document.querySelector('.stars')

const pinkStar = '<img src="../assets/estrela.svg" alt="estrela">'
const whiteStar = '<img src="../assets/estrela_white.svg" alt="estrela">'

rightButton.addEventListener('click', () => {
    if (slideImage.getAttribute('src') == '../images/sandwich.jpg') {
        slideImage.setAttribute('src', '../images/iogurte.jpg')
        addedDate.innerHTML = 'Adicionado a 2 dias'
        recipeName.innerHTML = 'Iogurte de fruta crocante'
        difficultLevel.innerHTML = 'Difícil'
        starsBox.innerHTML = `${pinkStar}${pinkStar}${pinkStar}${pinkStar}${pinkStar}`
    } else {
        slideImage.setAttribute('src', '../images/sandwich.jpg')
        addedDate.innerHTML = 'Adicionado Ontem'
        recipeName.innerHTML = 'Sanduíche de tomate com salada de ovos'
        difficultLevel.innerHTML = 'Fácil'
        starsBox.innerHTML = `${pinkStar}${pinkStar}${pinkStar}${whiteStar}${whiteStar}`

    } 
})

leftButton.addEventListener('click', () => {
    if (slideImage.getAttribute('src') == '../images/sandwich.jpg') {
        slideImage.setAttribute('src', '../images/iogurte.jpg')
        addedDate.innerHTML = 'Adicionado a 2 dias'
        recipeName.innerHTML = 'Iogurte de fruta crocante'
        difficultLevel.innerHTML = 'Difícil'
        starsBox.innerHTML = `${pinkStar}${pinkStar}${pinkStar}${pinkStar}${pinkStar}`

    } else {
        slideImage.setAttribute('src', '../images/sandwich.jpg')
        addedDate.innerHTML = 'Adicionado Ontem'
        recipeName.innerHTML = 'Sanduíche de tomate com salada de ovos'
        difficultLevel.innerHTML = 'Fácil'
        starsBox.innerHTML = `${pinkStar}${pinkStar}${pinkStar}${whiteStar}${whiteStar}`

    } 
})

// change selected dish and image

const kitchenOptions = document.querySelectorAll('.kitchen-option')
const kitchenOptionsImage = document.querySelector('.recipe2 .picture')

function removeAllSelected () {
    kitchenOptions.forEach((item) => {
        item.classList.remove('selected')
    })
}

function addSelected (item) {
    item.classList.add('selected')
}

kitchenOptions.forEach((option, index) => {
  option.addEventListener('click', () => {
    removeAllSelected()
    addSelected(option)

    if (index == 0) {
        kitchenOptionsImage.setAttribute('src', '../images/cozinha.jpg')
    } else if (index == 1) {
        kitchenOptionsImage.setAttribute('src', '../images/patisserie.jpg')
    } else {
        kitchenOptionsImage.setAttribute('src', '../images/drink.jpg')
    }
  }) 
})


