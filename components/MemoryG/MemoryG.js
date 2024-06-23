import './MemoryG.css'

function juegoMemoria() {
  const gameBoard = document.createElement('div')
  gameBoard.id = 'memory-board'
  gameBoard.className = 'card'

  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'red',
    'blue',
    'green',
    'yellow'
  ]
  colors.sort(() => 0.5 - Math.random())

  let firstCard, secondCard
  let lockBoard = false
  let matchedPairs = 0

  const scoreDisplay = document.createElement('div')
  scoreDisplay.id = 'memory-score'
  gameBoard.appendChild(scoreDisplay)

  function updateScore() {
    scoreDisplay.textContent = `Puntuación: ${matchedPairs}`
  }

  function saveScore() {
    localStorage.setItem('memory-game-score', matchedPairs)
  }

  function loadScore() {
    const savedScore = localStorage.getItem('memory-game-score')
    if (savedScore !== null) {
      matchedPairs = parseInt(savedScore)
      updateScore()
    }
  }

  const cardsContainer = document.createElement('div')
  cardsContainer.id = 'cards-container'
  cardsContainer.style.display = 'grid'
  cardsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'
  cardsContainer.style.gridGap = '10px'
  gameBoard.appendChild(cardsContainer)

  colors.forEach((color) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.dataset.color = color

    card.addEventListener('click', handleCardClick)

    cardsContainer.appendChild(card)
  })

  function handleCardClick(event) {
    const card = event.target

    if (lockBoard || card === firstCard) return

    card.classList.add('flipped')
    card.style.backgroundColor = card.dataset.color

    if (!firstCard) {
      firstCard = card
      return
    }

    secondCard = card
    checkForMatch()
  }

  function checkForMatch() {
    if (firstCard.dataset.color === secondCard.dataset.color) {
      disableCards()
      matchedPairs++
      updateScore()
      saveScore()
      checkGameOver()
    } else {
      unflipCards()
    }
  }

  function disableCards() {
    firstCard.removeEventListener('click', handleCardClick)
    secondCard.removeEventListener('click', handleCardClick)
    resetBoard()
  }

  function unflipCards() {
    lockBoard = true
    setTimeout(() => {
      firstCard.style.backgroundColor = ''
      secondCard.style.backgroundColor = ''
      firstCard.classList.remove('flipped')
      secondCard.classList.remove('flipped')
      resetBoard()
    }, 1500)
  }

  function resetBoard() {
    ;[firstCard, secondCard, lockBoard] = [null, null, false]
  }

  function checkGameOver() {
    if (matchedPairs === colors.length / 2) {
      setTimeout(() => {
        alert('¡Juego terminado!')
        resetGame()
      }, 500)
    }
  }

  function resetGame() {
    cardsContainer.innerHTML = ''
    colors.sort(() => 0.5 - Math.random())
    colors.forEach((color) => {
      const card = document.createElement('div')
      card.className = 'card'
      card.dataset.color = color
      card.addEventListener('click', handleCardClick)
      cardsContainer.appendChild(card)
    })
  }

  loadScore()
  resetGame()

  return gameBoard
}

export default juegoMemoria
