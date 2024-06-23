import './3nRaya.css'

function tresEnRaya() {
  const gameBoard = document.createElement('div')
  gameBoard.id = 'tres-en-raya-board'
  gameBoard.className = 'card'

  let currentPlayer = 'X'
  let board = Array(9).fill(null)
  const cells = []

  // Función para renderizar el tablero
  function renderBoard() {
    gameBoard.innerHTML = ''
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

  // Función para manejar el clic en una celda
  function handleClick(event) {
    const index = event.target.dataset.index
    if (board[index]) return
    board[index] = currentPlayer
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    renderBoard()
    checkWinner()
  }

  // Función para comprobar si hay un ganador
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
        resetGame()
        return
      }
    }

    if (board.every((cell) => cell)) {
      alert('Empate!')
      resetGame()
    }
  }

  // Función para reiniciar el juego
  function resetGame() {
    board = Array(9).fill(null)
    currentPlayer = 'X'
    renderBoard()
  }

  resetGame() // Inicializar el juego al cargar

  return gameBoard
}

export default tresEnRaya
