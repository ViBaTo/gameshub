import juegoMemoria from '../components/MemoryG/MemoryG'

function juegoMemoriaPage(navigate) {
  const page = document.createElement('div')
  page.className = 'container'

  const header = document.createElement('h2')
  header.textContent = 'Juego de Memoria'
  page.appendChild(header)

  page.appendChild(juegoMemoria())

  return page
}

export default juegoMemoriaPage
