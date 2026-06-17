export const categorias = [
  {
    id: "calientes",
    nombre: "Café caliente",
    descripcion: "Granos tostados medio, extracción cuidada.",
    tamaños: true,
    items: [
      { nombre: "Espresso", precioCh: 30 },
      { nombre: "Cappuccino", precioCh: 50, precioG: 60 },
      { nombre: "Americano", precioCh: 35, precioG: 45 },
      { nombre: "Latte", precioCh: 50, precioG: 60 },
      { nombre: "Mocaccino", precioCh: 55, precioG: 65 },
    ],
  },
  {
    id: "frios",
    nombre: "Café frío",
    descripcion: "Perfectos para los días de sol en Calera.",
    items: [
      { nombre: "Cold brew", precio: 40 },
      { nombre: "Iced latte", precio: 55 },
      { nombre: "Frappuccino", precio: 55 },
      {
        nombre: "Frappe",
        precio: 60,
        nota: "Fresa, chocolate, galleta oreo",
      },
    ],
  },
  {
    id: "reposteria",
    nombre: "Repostería y Postres",
    descripcion: "Postres hechos en casa.",
    items: [
      { nombre: "Rebanada de pastel", precio: 50 },
      { nombre: "Pay de queso", precio: 45 },
      { nombre: "Flan napolitano", precio: 40 },
      { nombre: "Chocoflan", precio: 45 },
      { nombre: "Pan", precio: 16 },
    ],
  },
  {
    id: "alimentos",
    nombre: "Alimentos",
    descripcion: "Para comer algo más.",
    items: [
      {
        nombre: "Croissant relleno",
        precio: 55,
        nota: "Jamón de pavo, queso, jitomate, lechuga, aderezo y cebolla",
      },
      {
        nombre: "Molletes",
        precio: 50,
        nota: "Frijoles rojos, queso y pico de gallo",
      },
    ],
  },
  {
    id: "otras",
    nombre: "Otras bebidas",
    descripcion: "Sin cafeína, pero igual de buenas.",
    items: [
      { nombre: "Agua", precio: 18 },
      { nombre: "Refresco", precio: 20 },
    ],
  },
];
