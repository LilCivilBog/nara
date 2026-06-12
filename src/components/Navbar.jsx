import { useState } from 'react'

// Navbar fija con enlaces a cada sección (#id).
// useState controla si el menú móvil está abierto o cerrado.
export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  const enlaces = [
    { href: '#inicio', texto: 'Inicio' },
    { href: '#significado', texto: 'Nuestra esencia' },
    { href: '#menu', texto: 'Menú' },
    { href: '#galeria', texto: 'Galería' },
    { href: '#contacto', texto: 'Visítanos' },
  ]

  return (
    <header className="navbar">
      <a href="#inicio" className="navbar-logo">
        <img src={`${import.meta.env.BASE_URL}img/logo.jpeg`} alt="Logo de NARA" />
        <span>NARA</span>
      </a>

      {/* Botón hamburguesa, solo visible en celular */}
      <button
        className="navbar-toggle"
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <nav className={abierto ? 'navbar-links abierto' : 'navbar-links'}>
        {enlaces.map((enlace) => (
          <a key={enlace.href} href={enlace.href} onClick={() => setAbierto(false)}>
            {enlace.texto}
          </a>
        ))}
      </nav>
    </header>
  )
}
