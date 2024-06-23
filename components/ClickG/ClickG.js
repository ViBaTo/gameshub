import './ClickG.css'

function juegoClick() {
  const gameContainer = document.createElement('div')
  gameContainer.id = 'click-game-container'
  gameContainer.className = 'card'

  const startButton = document.createElement('button')
  startButton.textContent = 'Comenzar'
  startButton.onclick = startGame
  gameContainer.appendChild(startButton)

  const scoreDisplay = document.createElement('div')
  scoreDisplay.id = 'click-score-display'
  gameContainer.appendChild(scoreDisplay)

  let score = 0
  let gameInterval

  function loadScore() {
    const savedScore = localStorage.getItem('click-game-score')
    if (savedScore !== null) {
      score = parseInt(savedScore)
      updateScore()
    }
  }

  function saveScore() {
    localStorage.setItem('click-game-score', score)
  }

  function updateScore() {
    scoreDisplay.textContent = `Puntuación: ${score}`
  }

  function startGame() {
    score = 0
    updateScore()
    startButton.disabled = true
    gameInterval = setInterval(showTarget, 1000)
    setTimeout(endGame, 10000) // El juego dura 10 segundos
  }

  function showTarget() {
    const target = document.createElement('div')
    target.className = 'target'
    target.style.top = `${Math.random() * 90}%`
    target.style.left = `${Math.random() * 90}%`
    target.onclick = (event) => {
      event.stopPropagation() // Asegura que el evento no se propague
      score++
      updateScore()
      target.remove()
    }
    gameContainer.appendChild(target)
    setTimeout(() => target.remove(), 900)
  }

  function endGame() {
    clearInterval(gameInterval)
    startButton.disabled = false
    alert(`Juego terminado! Puntuación final: ${score}`)
    saveScore()
    resetGame() // Reiniciar el juego al finalizar
  }

  function resetGame() {
    updateScore()
    const targets = document.querySelectorAll('.target')
    targets.forEach((target) => target.remove())
  }

  loadScore()
  resetGame()

  return gameContainer
}

export default juegoClick
