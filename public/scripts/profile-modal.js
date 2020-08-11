// to active modal

const profileBox = document.querySelector('.profile-box')
const profileModal = document.querySelector('.profile-modal')
const closeButton = document.querySelector('.close-button')

profileBox.addEventListener('click', () => {
    profileModal.classList.add('active')
})

closeButton.addEventListener('click', () => {
    profileModal.classList.remove('active')
})

// to change number of days in the profile-modal plan

const endDay = document.querySelector('.end-day')
const barSize = document.querySelector('.time-bar')

const randomNumber = (Math.random() * 30 + 1).toFixed()
const percentageNumber = (randomNumber / 3) * 10 + '%'

endDay.innerHTML = randomNumber
barSize.style.width = percentageNumber

