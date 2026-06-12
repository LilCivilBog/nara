# NARA · Un respiro con sabor ☕

Sitio web de la cafetería NARA, hecho con **React + Vite** y publicado gratis en **GitHub Pages**.

## 1. Correr el proyecto en tu computadora

Abre una terminal **dentro de esta carpeta** y ejecuta:

```bash
npm install     # descarga las dependencias (solo la primera vez)
npm run dev     # inicia el servidor local
```

Abre la dirección que aparece (normalmente `http://localhost:5173/nara/`).
Cada cambio que guardes en el código se refleja al instante.

## 2. Editar el contenido (sin tocar React)

| Quiero cambiar... | Edito este archivo |
|---|---|
| El menú y los precios | `src/data/menu.js` |
| Las fotos de la galería | `src/components/Galeria.jsx` (y pongo las fotos en `public/img/`) |
| Dirección, horario, redes | `src/components/Contacto.jsx` |
| Colores y tipografías | `src/styles.css` (variables al inicio) |

## 3. Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio inicial de NARA"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/nara.git
git push -u origin main
```

> Crea antes el repositorio vacío llamado **nara** en github.com (botón "New repository").

## 4. Publicar en GitHub Pages

```bash
npm run build    # genera la carpeta dist/ con el sitio optimizado
npm run deploy   # la sube a la rama gh-pages
```

Luego en GitHub: **Settings → Pages → Branch: gh-pages** y guarda.
En unos minutos tu sitio estará en:

```
https://TU_USUARIO.github.io/nara/
```

⚠️ Si tu repositorio se llama distinto a `nara`, cambia la línea `base: '/nara/'`
en `vite.config.js` por el nombre real de tu repo.
