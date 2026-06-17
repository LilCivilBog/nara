import { useState } from 'react'
import { categorias } from '../data/menu.js'

export default function Menu() {
  const [activa, setActiva] = useState(categorias[0].id)
  const categoriaActiva = categorias.find((cat) => cat.id === activa)

  return (
    <section id="menu" className="menu">
      <p className="eyebrow">Menú</p>
      <h2>Lo que servimos</h2>

      <div className="menu-tabs" role="tablist">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={cat.id === activa}
            className={cat.id === activa ? 'tab tab-activa' : 'tab'}
            onClick={() => setActiva(cat.id)}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      <p className="menu-descripcion">{categoriaActiva.descripcion}</p>

      {categoriaActiva.tamaños && (
        <div className="menu-tamaños">
          <span>Ch</span>
          <span>G</span>
        </div>
      )}

      <ul className="menu-lista">
        {categoriaActiva.items.map((item) => (
          <li key={item.nombre} className="menu-item">
            <div>
              <span className="menu-nombre">{item.nombre}</span>
              {item.nota && <span className="menu-nota">{item.nota}</span>}
            </div>
            <span className="menu-puntos" aria-hidden="true"></span>
            {item.precio != null ? (
              <span className="menu-precio">${item.precio}</span>
            ) : (
              <span className="menu-precio-doble">
                <span>${item.precioCh}</span>
                {item.precioG != null && <span>${item.precioG}</span>}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p className="menu-pie">Precios en pesos mexicanos. Pregunta por la bebida del mes.</p>
    </section>
  )
}
