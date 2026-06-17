// CONTACTO
// Cambia estos datos por los reales de la cafetería.
const datos = {
  direccion: 'Calle Ejemplo #123, Centro, Calera, Zacatecas',
  horario: [
    { dias: 'Lunes a viernes', horas: '8:00 – 21:00' },
    { dias: 'Sábado y domingo', horas: '9:00 – 22:00' },
  ],
  instagram: 'nara2k25',
  whatsapp: '4930000000', // 10 dígitos, sin espacios
}

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <p className="eyebrow">Visítanos</p>
      <h2>Te esperamos con la taza lista</h2>

      <div className="contacto-grid">
        <div className="contacto-bloque">
          <h3>Dirección</h3>
          <p>{datos.direccion}</p>
          <a
            className="boton boton-secundario"
            href={`https://www.google.com/maps/search/${encodeURIComponent('NARA cafetería Calera Zacatecas')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir en Google Maps
          </a>
        </div>

        <div className="contacto-bloque">
          <h3>Horario</h3>
          {datos.horario.map((h) => (
            <p key={h.dias}>
              <strong>{h.dias}</strong>
              <br />
              {h.horas}
            </p>
          ))}
        </div>

        <div className="contacto-bloque">
          <h3>Síguenos</h3>
          <p>
            <a href={`https://instagram.com/${datos.instagram}`} target="_blank" rel="noopener noreferrer">
              Instagram · @{datos.instagram}
            </a>
          </p>
          <p>
            <a href={`https://wa.me/52${datos.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp · Haz tu pedido
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
