import tresEnRaya from '../components/3nRaya/3nRaya'

function tresEnRayaPage(navigate) {
  const page = document.createElement('div') // Crea un elemento div para la página de Tres en Raya
  page.className = 'container' // Añade clases al div
  page.style.marginBottom = '80px' // Añade un margen inferior al contenedor principal

  const header = document.createElement('h2') // Crea un elemento h2
  header.textContent = 'Tres en Raya' // Establece el texto del h2
  page.appendChild(header) // Añade el h2 al div page

  const boardContainer = document.createElement('div') // Crea un contenedor para el tablero
  boardContainer.style.display = 'flex'
  boardContainer.style.justifyContent = 'center'
  page.appendChild(boardContainer) // Añade el contenedor del tablero a la página

  boardContainer.appendChild(tresEnRaya()) // Añade el componente Tres en Raya al contenedor del tablero

  return page // Devuelve el div page con todo el contenido añadido
}

export default tresEnRayaPage // Exporta la función tresEnRayaPage como el módulo por defecto
