// El significado de NARA — tomado de la identidad real de la marca.
// Esta sección le da "alma" a la página: la razón para quedarse a leer.
const significados = [
  {
    letra: 'N',
    palabra: 'Nido',
    texto: 'Representa el hogar, la calidez y ese lugar seguro donde todo empieza.',
  },
  {
    letra: 'A',
    palabra: 'Armonía',
    texto: 'Refleja la calma, lo natural y la belleza equilibrada.',
  },
  {
    letra: 'R',
    palabra: 'Raíces',
    texto: 'Simbolizan la conexión con la tierra, lo natural, y también con nuestros orígenes y familia.',
  },
  {
    letra: 'A',
    palabra: 'Alma',
    texto: 'Porque todo lo que hacemos, desde cada platillo y bebida hasta el ambiente, lleva una parte de nosotros.',
  },
]

export default function Significado() {
  return (
    <section id="significado" className="significado">
      <p className="eyebrow">¿Qué significa NARA?</p>
      <h2>No es solo un nombre,<br />es lo que queremos ofrecer.</h2>

      <div className="significado-grid">
        {significados.map((item, indice) => (
          <article key={indice} className="significado-carta">
            <span className="significado-letra">{item.letra}</span>
            <h3>{item.palabra}</h3>
            <p>{item.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
