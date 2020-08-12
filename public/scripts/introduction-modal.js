const modalButton = document.querySelector('.intro-image')
const introductionModal = document.querySelector('.introduction-modal')
const closeButtonIntroduction = document.querySelector('.intro-close-button')

modalButton.addEventListener('click', () => {
    introductionModal.classList.add('active')
})

closeButtonIntroduction.addEventListener('click', () => {
    introductionModal.classList.remove('active')
})