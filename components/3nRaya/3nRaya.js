import './3nRaya.css'

function tresEnRaya() {
  const gameBoard = document.createElement('div')
  gameBoard.id = 'tres-en-raya-board'
  gameBoard.className = 'card'

  let currentPlayer = 'X'
  let board = Array(9).fill(null)
  let xWins = 0
  let oWins = 0
  const cells = []

  const scoreDisplay = document.createElement('div')
  scoreDisplay.id = 'tres-en-raya-score'
  gameBoard.appendChild(scoreDisplay)

  function loadScore() {
    const savedXWins = localStorage.getItem('tres-en-raya-x-wins')
    const savedOWins = localStorage.getItem('tres-en-raya-o-wins')
    if (savedXWins !== null) xWins = parseInt(savedXWins)
    if (savedOWins !== null) oWins = parseInt(savedOWins)
    updateScore()
  }

  function saveScore() {
    localStorage.setItem('tres-en-raya-x-wins', xWins)
    localStorage.setItem('tres-en-raya-o-wins', oWins)
  }

  function updateScore() {
    scoreDisplay.textContent = `X: ${xWins} - O: ${oWins}`
  }

  function renderBoard() {
    gameBoard.innerHTML = ''
    gameBoard.appendChild(scoreDisplay)
    board.forEach((cell, index) => {
      const cellElement = document.createElement('div')
      cellElement.className = 'cell'
      cellElement.dataset.index = index
      cellElement.textContent = cell
      cellElement.onclick = handleClick
      cells[index] = cellElement
      gameBoard.appendChild(cellElement)
    })
  }

  function handleClick(event) {
    const index = event.target.dataset.index
    if (board[index]) return
    board[index] = currentPlayer
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    renderBoard()
    checkWinner()
  }

  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const combination of winningCombinations) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`${board[a]} gana!`)
        if (board[a] === 'X') xWins++
        else oWins++
        saveScore()
        resetGame()
        return
      }
    }

    if (board.every((cell) => cell)) {
      alert('Empate!')
      resetGame()
    }
  }

  function resetGame() {
    board = Array(9).fill(null)
    currentPlayer = 'X'
    renderBoard()
  }

  loadScore()
  resetGame()

  return gameBoard
}

export default tresEnRaya
