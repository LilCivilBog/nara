import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Significado from './components/Significado.jsx'
import Menu from './components/Menu.jsx'
import Galeria from './components/Galeria.jsx'
import Contacto from './components/Contacto.jsx'

// App.jsx es el "esqueleto" de la página: une todas las secciones en orden.
// Cada sección vive en su propio archivo dentro de /components.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Significado />
        <Menu />
        <Galeria />
        <Contacto />
      </main>
      <footer className="footer">
        <p>NARA · Un respiro con sabor</p>
        <p className="footer-small">Fresnillo, Zacatecas · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
