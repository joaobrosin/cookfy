const profileBox = document.querySelector('.profile-box')
const profileModal = document.querySelector('.profile-modal')
const closeButton = document.querySelector('.close-button')

profileBox.addEventListener('click', () => {
    profileModal.classList.add('active')
})

closeButton.addEventListener('click', () => {
    profileModal.classList.remove('active')
})

