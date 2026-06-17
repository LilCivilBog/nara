// Portada de la página: lo primero que ve el visitante.
export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-contenido">
        <p className="eyebrow">Cafetería · Calera, Zacatecas</p>
        <h1>
          Un respiro
          <br />
          <em>con sabor</em>
        </h1>
        <p className="hero-texto">
          En NARA cada taza es una pausa. Café de especialidad, pan hecho en
          casa y un espacio pensado para quedarte un rato más.
        </p>
        <div className="hero-botones">
          <a href="#menu" className="boton boton-principal">Ver el menú</a>
          <a href="#contacto" className="boton boton-secundario">Cómo llegar</a>
        </div>
      </div>

      {/* La ramita del logo, dibujada en SVG: es la firma visual del sitio */}
      <div className="hero-rama" aria-hidden="true">
        <svg viewBox="0 0 200 260" fill="none">
          <path d="M100 250 C 100 180, 95 110, 100 20" stroke="var(--verde)" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="68" cy="70" rx="26" ry="14" transform="rotate(-35 68 70)" fill="var(--salvia)" />
          <ellipse cx="132" cy="55" rx="26" ry="14" transform="rotate(30 132 55)" fill="var(--verde)" opacity="0.85" />
          <ellipse cx="62" cy="130" rx="28" ry="15" transform="rotate(-30 62 130)" fill="var(--terracota)" opacity="0.8" />
          <ellipse cx="138" cy="118" rx="28" ry="15" transform="rotate(28 138 118)" fill="var(--salvia)" opacity="0.9" />
          <ellipse cx="100" cy="22" rx="14" ry="24" fill="var(--verde)" opacity="0.75" />
        </svg>
      </div>
    </section>
  )
}
