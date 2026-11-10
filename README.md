# Landing CV · jonmircha

Landing de una sola página con la información profesional de Jonathan MirCha (jonmircha), construida con HTML, CSS y JavaScript vanilla.

El contenido y la arquitectura salen de [`CV.md`](CV.md); la identidad visual —colores, tipografía, espaciado, formas y componentes— sale de [`DESIGN.md`](DESIGN.md) y de los recursos del proyecto.

## Archivos

- [`index.html`](index.html) — la landing.
- [`assets/css/cv.css`](assets/css/cv.css) — estilos, temas claro/oscuro, responsive e impresión.
- [`assets/js/cv.js`](assets/js/cv.js) — tema, menú móvil y sección activa.
- [`design.html`](design.html) — referencia visual del sistema de diseño.
- [`CV.md`](CV.md) — contenido y arquitectura del CV.
- [`DESIGN.md`](DESIGN.md) — tokens y reglas del sistema de diseño.

## Cómo verlo

Abre `index.html` directamente en el navegador o levanta un servidor local:

```sh
python3 -m http.server 8765
```

Después visita `http://localhost:8765/`.

## Accesibilidad

La landing incluye navegación por teclado, enlace para saltar al contenido, foco visible, contraste AA, movimiento reducido y estilos de impresión. La auditoría de Lighthouse reporta 100 en accesibilidad, buenas prácticas y SEO.
