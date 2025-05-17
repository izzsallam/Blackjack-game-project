let player = {
    name: "izzeldeen",
    chips: 20
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")
const startGameBtn = document.getElementById("start-game")
const newCardBtn = document.getElementById("new-card")

playerEl.textContent = `${player.name} : $ ${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

startGameBtn.addEventListener("click", function () {
    if(hasBlackJack){
        hasBlackJack = false
        card = []
        sum = 0
    }
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
})


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]}  `
    }
    
    sumEl.textContent = `sum : ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips +=10
        
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 10
    }
    messageEl.textContent = message
    playerEl.textContent =  `${player.name} : $ ${player.chips}`
}

newCardBtn.addEventListener("click", function () {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
})


