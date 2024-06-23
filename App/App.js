import juegoClick from '../components/ClickG/ClickG'
import tresEnRayaPage from '../pages/3 en Raya'
import Home from '../pages/Home/Home'
import juegoClickPage from '../pages/Juego de Click Rápido'
import juegoMemoriaPage from '../pages/Juego de Memoria'

function App() {
  const app = document.createElement('div')

  const routes = {
    '/': Home,
    '/3-en-raya': tresEnRayaPage,
    '/juego-de-memoria': juegoMemoriaPage,
    '/juego-de-click-rapido': juegoClickPage
  }

  function navigate(path) {
    window.history.pushState({}, path, window.location.origin + path)
    render()
  }

  function render() {
    app.innerHTML = ''

    const navigation = document.createElement('nav')
    const navLinks = [
      { name: 'Inicio', path: '/' },
      { name: 'Tres en Raya', path: '/3-en-raya' },
      { name: 'Juego de Memoria', path: '/juego-de-memoria' },
      { name: 'Juego de Click Rápido', path: '/juego-de-click-rapido' }
    ]

    navLinks.forEach((link) => {
      const a = document.createElement('a')
      a.href = '#'
      a.textContent = link.name
      a.onclick = (e) => {
        e.preventDefault()
        navigate(link.path)
      }
      navigation.appendChild(a)
    })

    app.appendChild(navigation)

    const page = routes[window.location.pathname]
    if (page) {
      app.appendChild(page(navigate))
    } else {
      app.appendChild(Home(navigate))
    }
  }

  window.onpopstate = render
  render()

  return app
}

export default App
