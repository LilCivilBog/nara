// GALERÍA
// Cuando tengas las fotos reales:
// 1. Guárdalas en la carpeta  public/img/  (ej. cafe1.jpg, interior.jpg)
// 2. Escribe el nombre del archivo en "src" de cada foto aquí abajo.
// Si "src" está vacío (''), se muestra un espacio decorativo en su lugar.
const fotos = [
  { src: 'respiro.jpg', alt: 'Vaso NARA con frase motivacional', etiqueta: 'Un respiro' },
  { src: 'latte-art.jpg', alt: 'Preparación de café helado NARA', etiqueta: 'Arte latte' },
  { src: 'barra.jpg', alt: 'Croissant y café helado NARA', etiqueta: 'Nuestro menú' },
  { src: 'interior.jpg', alt: 'Interior del local NARA', etiqueta: 'El espacio' },
]

export default function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <p className="eyebrow">Galería</p>
      <h2>Asómate a NARA</h2>

      <div className="galeria-grid">
        {fotos.map((foto, indice) => (
          <figure key={indice} className="galeria-marco">
            {foto.src ? (
              <img
                src={`${import.meta.env.BASE_URL}img/${foto.src}`}
                alt={foto.alt}
                loading="lazy"
              />
            ) : (
              // Espacio decorativo mientras llegan las fotos reales
              <div className="galeria-placeholder">
                <span>☕</span>
              </div>
            )}
            <figcaption>{foto.etiqueta}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
