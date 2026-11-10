# Landing CV · jonmircha

**Autor:** Jonathan MirCha (jonmircha)

Este repositorio reúne la landing del CV de Jonathan MirCha y la referencia visual de su sistema de diseño. La landing es una página adaptable a móvil, tableta y escritorio, construida con HTML, CSS y JavaScript sin librerías externas: el contenido y la arquitectura salen de [`CV.md`](https://github.com/jonmircha/ltei-grupo-4/blob/main/CV.md), y la identidad visual —colores, tipografía, espaciado, formas y componentes— sale de [`DESIGN.md`](https://github.com/jonmircha/ltei-grupo-4/blob/main/DESIGN.md). Incluye tema claro y oscuro, navegación móvil, estilos de impresión y criterios de accesibilidad AA.

## Páginas publicadas

- [Landing del CV](https://jonmircha.github.io/ltei-grupo-4/)
- [Sistema de diseño](https://jonmircha.github.io/ltei-grupo-4/design.html)

## Documentos

- [CV.md](https://github.com/jonmircha/ltei-grupo-4/blob/main/CV.md)
- [DESIGN.md](https://github.com/jonmircha/ltei-grupo-4/blob/main/DESIGN.md)
- [Arquitectura del CV (PDF)](https://jonmircha.github.io/ltei-grupo-4/assets/pdf/arquitectura-cv.pdf)
- [Sistema de diseño (PDF)](https://jonmircha.github.io/ltei-grupo-4/assets/pdf/design.pdf)

## Contenido del repositorio

- [`index.html`](index.html) — landing del CV.
- [`design.html`](design.html) — referencia visual del sistema de diseño.
- [`assets/css/cv.css`](assets/css/cv.css) — estilos, temas, responsive e impresión.
- [`assets/js/cv.js`](assets/js/cv.js) — tema, menú móvil y sección activa.
- [`assets/pdf/`](assets/pdf) — documentos PDF del proyecto.

## Cómo verlo localmente

Abre `index.html` directamente en el navegador o levanta un servidor local:

```sh
python3 -m http.server 8765
```

Después visita `http://localhost:8765/`.

## Accesibilidad

La landing incluye navegación por teclado, enlace para saltar al contenido, foco visible, contraste AA, movimiento reducido y estilos de impresión. La auditoría de Lighthouse reporta 100 en accesibilidad, buenas prácticas y SEO.
