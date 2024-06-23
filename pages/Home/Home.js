import './Home.css'

function Home(navigate) {
  const home = document.createElement('div')
  home.className = 'container'

  const header = document.createElement('h1')
  header.textContent = 'Bienvenidos'
  home.appendChild(header)

  const description = document.createElement('p')
  description.textContent =
    'Selecciona un juego de la barra de navegación para empezar a jugar.'
  home.appendChild(description)

  return home
}

export default Home
