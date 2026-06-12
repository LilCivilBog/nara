// ============================================================
// MENÚ DE NARA
// Para cambiar nombres o precios, edita este archivo.
// ============================================================

export const categorias = [
  {
    id: "calientes",
    nombre: "Café caliente",
    descripcion: "Granos tostados medio, extracción cuidada.",
    items: [
      { nombre: "Espresso", precio: 35, nota: "Doble shot, intenso y limpio" },
      {
        nombre: "Americano",
        precio: 40,
        nota: "Espresso alargado con agua caliente",
      },
      {
        nombre: "Cappuccino",
        precio: 55,
        nota: "Tercios iguales: café, leche, espuma",
      },
      {
        nombre: "Latte",
        precio: 58,
        nota: "Suave, con leche vaporizada y arte latte",
      },
      { nombre: "Flat white", precio: 60, nota: "Más café, menos espuma" },
      {
        nombre: "Mocha",
        precio: 62,
        nota: "Espresso con chocolate semiamargo",
      },
      {
        nombre: "Latte de vainilla",
        precio: 62,
        nota: "Jarabe de vainilla natural",
      },
      {
        nombre: "Latte de caramelo",
        precio: 62,
        nota: "Con toque de caramelo artesanal",
      },
      { nombre: "Latte de avellana", precio: 65, nota: "Cremoso y aromático" },
      {
        nombre: "Macchiato",
        precio: 48,
        nota: "Espresso con un toque de espuma",
      },
      {
        nombre: "Cortado",
        precio: 45,
        nota: "Espresso con un poco de leche caliente",
      },
    ],
  },
  {
    id: "frios",
    nombre: "Café frío",
    descripcion: "Perfectos para los días de sol en Calera.",
    items: [
      {
        nombre: "Latte frío",
        precio: 60,
        nota: "Nuestra especialidad — sobre hielo",
      },
      {
        nombre: "Cold brew",
        precio: 60,
        nota: "Extracción en frío por 16 horas",
      },
      {
        nombre: "Latte frío de vainilla",
        precio: 65,
        nota: "Con jarabe de vainilla, bien helado",
      },
      {
        nombre: "Latte frío de caramelo",
        precio: 65,
        nota: "Dulce y refrescante",
      },
      {
        nombre: "Frappé NARA",
        precio: 70,
        nota: "Receta de la casa con caramelo",
      },
      {
        nombre: "Frappé de mocha",
        precio: 70,
        nota: "Chocolate y café, bien cremoso",
      },
      {
        nombre: "Affogato",
        precio: 65,
        nota: "Helado de vainilla ahogado en espresso",
      },
      { nombre: "Americano frío", precio: 45, nota: "Simple y refrescante" },
    ],
  },
  {
    id: "matcha",
    nombre: "Matcha & otros",
    descripcion: "Para quienes buscan algo diferente.",
    items: [
      {
        nombre: "Matcha latte caliente",
        precio: 65,
        nota: "Té verde japonés con leche vaporizada",
      },
      {
        nombre: "Matcha latte frío",
        precio: 68,
        nota: "Sobre hielo, suave y terrenal",
      },
      {
        nombre: "Chai latte",
        precio: 62,
        nota: "Especias, té negro y leche vaporizada",
      },
      {
        nombre: "Chocolate caliente",
        precio: 55,
        nota: "Con cacao semiamargo",
      },
    ],
  },

  {
    id: "pan",
    nombre: "Para acompañar",
    descripcion: "Horneado en casa, todos los días.",
    items: [
      {
        nombre: "Cuernito preparado",
        precio: 55,
        nota: "El favorito de la casa — preguntar relleno del día",
      },
      {
        nombre: "Croissant de mantequilla",
        precio: 45,
        nota: "Hojaldrado, recién horneado",
      },
      { nombre: "Concha artesanal", precio: 30, nota: "Vainilla o chocolate" },
      { nombre: "Pan de elote", precio: 40, nota: "Receta de la abuela" },
      {
        nombre: "Tostada de aguacate",
        precio: 75,
        nota: "Pan de masa madre, ajonjolí",
      },
      {
        nombre: "Brownie",
        precio: 45,
        nota: "Húmedo por dentro, crujiente por fuera",
      },
      { nombre: "Muffin del día", precio: 40, nota: "Sabor según temporada" },
    ],
  },
];
