import tresEnRaya from '../components/3nRaya/3nRaya'

function tresEnRayaPage(navigate) {
  const page = document.createElement('div')
  page.className = 'container'
  page.style.marginBottom = '80px'

  const header = document.createElement('h2')
  header.textContent = 'Tres en Raya'
  page.appendChild(header)

  const boardContainer = document.createElement('div')
  boardContainer.style.display = 'flex'
  boardContainer.style.justifyContent = 'center'
  page.appendChild(boardContainer)

  boardContainer.appendChild(tresEnRaya())

  return page
}

export default tresEnRayaPage
