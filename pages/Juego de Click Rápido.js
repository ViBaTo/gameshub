import juegoClick from '../components/ClickG/ClickG'

function juegoClickPage(navigate) {
  const page = document.createElement('div')
  page.className = 'container'

  const header = document.createElement('h2')
  header.textContent = 'Juego de Click Rápido'
  page.appendChild(header)

  const info = document.createElement('h4')
  info.textContent = 'Doble click para puntuar'
  page.appendChild(info)

  page.appendChild(juegoClick())

  return page
}

export default juegoClickPage
