---
version: alpha
name: jonmircha
description: >-
  Sistema de diseño personal de jonmircha: estética moderna, enérgica y docente,
  construida sobre naranjas vibrantes, carbones profundos, alto contraste y
  tipografía con propósito.

colors:
  # Naranjas de marca
  primary: "#E7562E"
  primary-strong: "#D0440F" # REVISAR: nuevo tono para fondos con texto blanco (4.65:1)
  primary-hover: "#C63C0A" # REVISAR: era #D94D1F; se oscureció para cumplir contraste
  primary-active: "#A83208" # REVISAR: nuevo tono para el estado presionado
  secondary: "#E7762E"
  # Azules de interacción
  link: "#0088CC"
  accent-cyan: "#73CFFA"
  # Superficies
  surface: "#FCFCFC"
  surface-alt: "#F7F7F7"
  surface-muted: "#EEEEEE"
  white: "#FFFFFF"
  # Texto
  on-surface: "#202225"
  on-surface-muted: "#808080"
  on-primary: "#FFFFFF"
  # Carbones y modo oscuro
  charcoal: "#2B3A42"
  charcoal-mid: "#20252C"
  charcoal-deep: "#202B38"
  on-surface-dark: "#F7F7F7"
  on-surface-dark-muted: "#A9B2BA" # REVISAR: gris secundario para fondos oscuros
  # Estados
  disabled-bg: "#CCCCCC"
  disabled-text: "#555555" # REVISAR: era #808080; se oscureció para alcanzar 4.64:1
  overlay: "rgba(0, 0, 0, 0.5)"

typography:
  display:
    fontFamily: Raleway
    fontSize: 40px
    fontWeight: 900
    lineHeight: 48px
    letterSpacing: -0.01em # REVISAR: interletraje no definido en el documento
  h1:
    fontFamily: PT Sans
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px # REVISAR: interlineado inferido (1.2)
  h2:
    fontFamily: Raleway
    fontSize: 40px
    fontWeight: 900
    lineHeight: 48px # REVISAR: interlineado inferido (1.2)
  h3:
    fontFamily: PT Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px # REVISAR: interlineado inferido (1.5)
  body:
    fontFamily: PT Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
  list-item:
    fontFamily: Raleway
    fontSize: 20px
    fontWeight: 400 # REVISAR: peso no definido en el documento
    lineHeight: 30px # REVISAR: interlineado inferido (1.5)
  nav:
    fontFamily: PT Sans
    fontSize: 20px
    fontWeight: 400 # REVISAR: peso no definido en el documento
    lineHeight: 30px # REVISAR: interlineado inferido (1.5)
  link:
    fontFamily: PT Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
  small:
    fontFamily: Raleway
    fontSize: 16px
    fontWeight: 400 # REVISAR: peso no definido en el documento
    lineHeight: 24px # REVISAR: interlineado inferido (1.5)
  button:
    fontFamily: Raleway
    fontSize: 19.216px
    fontWeight: 500 # REVISAR: peso no definido en el documento
    lineHeight: 24px # REVISAR: interlineado inferido
  label:
    fontFamily: PT Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px # REVISAR: interlineado inferido (1.5)
  chip:
    fontFamily: Raleway # REVISAR: familia no definida para chips
    fontSize: 13px
    fontWeight: 500 # REVISAR: peso no definido en el documento
    lineHeight: 16px # REVISAR: interlineado inferido
  meta:
    fontFamily: Roboto Mono
    fontSize: 16px # REVISAR: tamaño no definido para fechas y metadatos
    fontWeight: 400
    lineHeight: 24px # REVISAR: interlineado inferido (1.5)

spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 92px
  6xl: 136px
  gutter-mobile: 12px
  gutter-tablet: 48px
  gutter-desktop: 48px
  container-max: 1440px
  section-gap: 92px
  section-gap-compact: 48px
  section-gap-mobile: 24px

rounded:
  none: 0px
  sm: 8px
  md: 16px
  pill: 50px
  full: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
    height: 48px # REVISAR: alto no definido; derivado del espacio interno
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  button-primary-disabled:
    backgroundColor: "{colors.disabled-bg}"
    textColor: "{colors.disabled-text}"
  button-icon:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 32px
  button-icon-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.link}"
    rounded: "{rounded.none}"
    padding: 8px 0 # REVISAR: espacio interno no definido
  button-ghost-hover:
    textColor: "{colors.primary}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body}"
  link-inline-hover:
    textColor: "{colors.primary}"
  link-title:
    textColor: "{colors.primary}"
    typography: "{typography.h2}"
  nav-bar:
    backgroundColor: transparent
    height: 64px
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.nav}"
  nav-link-hover:
    textColor: "{colors.primary}"
  nav-link-active:
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px # REVISAR: el documento solo define 12px en horizontal
  chip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: 4px 12px # REVISAR: espacio interno no definido
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px # REVISAR: alto no definido; mínimo exigido de 40px
  input-placeholder:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body}"
  form-label:
    textColor: "{colors.on-surface}"
    typography: "{typography.label}"
  avatar:
    rounded: "{rounded.full}"
    width: 200px
    height: 200px
  social-icon:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    size: 32px
  social-icon-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
  contact-button:
    backgroundColor: "{colors.white}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: 12px 16px # REVISAR: espacio interno no definido
    height: 48px # REVISAR: alto no definido
  contact-button-hover:
    textColor: "{colors.primary}"
  course-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: 16px # REVISAR: espacio interno no definido
  experience-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: 16px 24px # REVISAR: espacio interno no definido
  hero:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    padding: 92px 48px
  modal:
    backgroundColor: "{colors.white}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 24px # REVISAR: espacio interno no definido
  modal-overlay:
    backgroundColor: "{colors.overlay}"
  # Variantes de modo oscuro
  section-alt:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
  section-dark:
    backgroundColor: "{colors.charcoal-deep}"
    textColor: "{colors.on-surface-dark}"
  card-dark:
    backgroundColor: "{colors.charcoal-mid}"
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px
  card-dark-raised:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-surface-dark}"
    rounded: "{rounded.none}"
    padding: 16px
  chip-dark:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  input-dark:
    backgroundColor: "{colors.charcoal-mid}"
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px
  input-dark-placeholder:
    textColor: "{colors.on-surface-dark-muted}"
    typography: "{typography.body}"
  nav-link-dark:
    textColor: "{colors.on-surface-dark}"
    typography: "{typography.nav}"
  link-dark:
    backgroundColor: "{colors.charcoal-deep}"
    textColor: "{colors.accent-cyan}"
    typography: "{typography.link}"
---

# jonmircha — Sistema de diseño

## Overview

La marca jonmircha encarna una estética moderna, enérgica y centrada en la docencia, que tiende un puente entre la experiencia técnica y la calidez cercana. Se apoya en naranjas vibrantes y carbones profundos, y transmite confianza, creatividad y pasión por la enseñanza digital.

La filosofía es minimalista: layouts limpios, mucho espacio en blanco y tipografía con propósito. El sistema está pensado para creadores y desarrolladores, y respeta el tiempo y la carga cognitiva de quien lo usa. En una frase: **un acento audaz pero sin abrumar, alto contraste y componentes sin ornamentación innecesaria**.

Tres principios gobiernan cada decisión:

1. **El contenido manda.** El espacio en blanco no es un hueco a rellenar, es lo que permite leer.
2. **La jerarquía se construye con tamaño, peso y color.** Nunca con opacidad.
3. **Un solo acento por elemento.** Si algo ya grita en naranja, el resto calla.

## Colors

La paleta se construye sobre dos naranjas de marca y una base de neutros de alto contraste.

### Naranjas de marca

- **Naranja de acción** (`{colors.primary}` · #E7562E): color de identidad. Se usa en acentos, títulos, íconos y todo lo que deba leerse como marca, nunca como fondo de texto blanco.
- **Naranja fuerte** (`{colors.primary-strong}` · #D0440F): el naranja de los botones con texto blanco. Es un paso más profundo que el de marca y alcanza 4.65:1 de contraste, por encima del mínimo AA.
- **Naranja alterno** (`{colors.secondary}` · #E7762E): variante sutil del naranja, para énfasis puntual.
- **Naranja hover** (`{colors.primary-hover}` · #C63C0A) y **naranja activo** (`{colors.primary-active}` · #A83208): estados del botón principal, un paso más oscuros cada uno.

> **Por qué hay dos naranjas.** El naranja de marca (#E7562E) con texto blanco da 3.64:1: se ve bien, pero no alcanza el mínimo de accesibilidad. Ningún tono de blanco lo resuelve, porque el blanco puro ya es el máximo posible contra ese fondo. La solución profesional es oscurecer un poco el fondo del botón, no aclarar el texto: así el naranja de marca sigue intacto en títulos, íconos y acentos, y los botones ganan legibilidad sin cambiar de familia cromática.

### Azules de interacción

- **Azul cielo** (`{colors.link}` · #0088CC): enlaces y elementos interactivos secundarios.
- **Cian claro** (`{colors.accent-cyan}` · #73CFFA): azul más claro para fondos o estados hover.

### Neutros y superficies

- **Fondo base** (`{colors.surface}` · #FCFCFC): casi blanco, el fondo por defecto.
- **Fondo alterno** (`{colors.surface-alt}` · #F7F7F7): fondo suave alternativo.
- **Gris de botón** (`{colors.surface-muted}` · #EEEEEE): fondo de botones secundarios, fantasma e íconos sociales.
- **Blanco** (`{colors.white}` · #FFFFFF): blanco puro para máximo contraste.

### Texto y profundidad

- **Negro casi puro** (`{colors.on-surface}` · #202225): texto principal y color de mayor contraste.
- **Gris medio** (`{colors.on-surface-muted}` · #808080): texto terciario y placeholders.
- **Gris deshabilitado** (`{colors.disabled-text}` · #555555): texto de los controles deshabilitados. Es más oscuro que el gris medio para que siga siendo legible sobre el fondo gris claro del botón inactivo (4.64:1).
- **Carbón oscuro** (`{colors.charcoal}` · #2B3A42): fondos profundos o texto secundario.
- **Carbón medio** (`{colors.charcoal-mid}` · #20252C): neutro oscuro para capas.
- **Carbón profundo** (`{colors.charcoal-deep}` · #202B38): el más profundo, para overlays de alto contraste.
- **Velo de modal** (`{colors.overlay}`): negro al 50 % detrás de los modales.

### Modo oscuro

Los carbones no son solo texto: son la base del tema oscuro. La lógica es invertir la relación de superficies, no simplemente cambiar el fondo.

- **Fondo oscuro** (`{colors.charcoal-deep}` · #202B38): superficie base del tema oscuro.
- **Superficie oscura** (`{colors.charcoal-mid}` · #20252C): tarjetas y campos sobre el fondo oscuro.
- **Superficie elevada** (`{colors.charcoal}` · #2B3A42): capas que se levantan sobre una tarjeta, como chips o tarjetas dentro de una sección oscura.
- **Blanco cálido** (`{colors.on-surface-dark}` · #F7F7F7): el texto del tema oscuro. No es blanco puro: es el mismo blanco roto de tu paleta clara, que baja el brillo y evita el efecto de halo sin perder contraste (13.39:1 sobre el fondo oscuro).
- **Gris oscuro secundario** (`{colors.on-surface-dark-muted}` · #A9B2BA): texto terciario, placeholders y fechas en modo oscuro (6.67:1).
- **Cian de enlace** (`{colors.accent-cyan}` · #73CFFA): enlaces en modo oscuro. El azul #0088CC no alcanza contraste sobre carbón, así que se sube al cian de la paleta (8.22:1).

> **Pendiente de revisar:** el gris #A9B2BA y el blanco cálido #F7F7F7 para modo oscuro son propuestas, no valores del documento original. El resto de los carbones ya existían y ahora tienen un rol concreto.

### Regla de convivencia

El naranja y el azul **no se mezclan en un mismo elemento interactivo**. El naranja es acción y marca; el azul es navegación y enlace. Elegir uno por elemento es lo que mantiene la lectura inequívoca.

## Typography

Se usan tres familias con roles claros:

- **PT Sans** es la fuente principal: cuerpo de texto, navegación y contenido general.
- **Raleway** es la secundaria: títulos, botones y énfasis.
- **Raleway Black** (peso 900) se reserva para los títulos más importantes.
- **Roboto Mono** se usa para fragmentos de código y metadatos como las fechas.

### Escala

| Nivel | Token | Familia | Tamaño | Peso | Interlineado |
|---|---|---|---|---|---|
| Display | `{typography.display}` | Raleway Black | 40px | 900 | 48px |
| Título 1 | `{typography.h1}` | PT Sans | 40px | 700 | 48px |
| Título 2 | `{typography.h2}` | Raleway Black | 40px | 900 | 48px |
| Título 3 | `{typography.h3}` | PT Sans | 16px | 700 | 24px |
| Cuerpo | `{typography.body}` | PT Sans | 20px | 400 | 30px |
| Ítem de lista | `{typography.list-item}` | Raleway | 20px | 400 | 30px |
| Navegación | `{typography.nav}` | PT Sans | 20px | 400 | 30px |
| Enlace | `{typography.link}` | PT Sans | 20px | 400 | 30px |
| Texto pequeño | `{typography.small}` | Raleway | 16px | 400 | 24px |
| Etiqueta de botón | `{typography.button}` | Raleway | 19.216px | 500 | 24px |
| Etiqueta de campo | `{typography.label}` | PT Sans | 16px | 700 | 24px |
| Chip | `{typography.chip}` | Raleway | 13px | 500 | 16px |
| Metadato / fecha | `{typography.meta}` | Roboto Mono | 16px | 400 | 24px |

### Reglas tipográficas

La jerarquía **siempre** se logra con tamaño, peso y color, nunca con opacidad. El cuerpo nunca baja de 16px en ningún tamaño de pantalla, y en escritorio se mantiene en 20px. Raleway Black se usa con moderación: solo para los titulares más importantes; abusar de él aplana la jerarquía en lugar de crearla.

En modo oscuro la escala es idéntica: cambian los colores, no los tamaños. El texto pasa a `{colors.on-surface-dark}` (blanco cálido) y los secundarios a `{colors.on-surface-dark-muted}`.

> **Pendiente de revisar:** el documento no define el interletraje, el peso exacto de los ítems de lista, la navegación, el texto pequeño, los botones ni los chips, ni la familia y el tamaño de los metadatos. Los valores marcados con `REVISAR` en los tokens son una propuesta razonable, no una decisión documentada.

## Layout

El espaciado se basa en una **unidad de 8px**. La escala va de 4px (microespaciado) a 8, 12, 16, 24, 32, 40, 48, 92 y 136px, expuesta en los tokens `spacing.xs` a `spacing.6xl`.

### Aplicación del espaciado

- Botones y campos: 12–16px de espacio interno (`{spacing.md}` a `{spacing.lg}`).
- Tarjetas: 12–24px (`{spacing.md}` a `{spacing.xl}`).
- Secciones mayores: 48–92px verticales (`{spacing.4xl}` a `{spacing.5xl}`).

### Retícula y anchos

- Ancho máximo del contenido: `{spacing.container-max}` (1440px), centrado.
- **Escritorio:** rejilla de 12 columnas, márgenes laterales de 48px.
- **Tableta:** 8 columnas, márgenes de 48px.
- **Móvil:** una sola columna, márgenes de 12–16px.

### Aire

El espacio en blanco es generoso e intencional. El contenido nunca va apretado y las secciones se separan por **al menos 92px** para crear zonas visuales claras. Si una pantalla se siente llena, falta aire antes que sobrar contenido.

### Comportamiento responsivo

El diseño es **mobile-first** y se adapta en cuatro rangos:

| Rango | Ancho | Columnas | Márgenes | Separación entre secciones |
|---|---|---|---|---|
| Móvil | 320–599px | 1 | 12px | 24px |
| Tableta | 600–1023px | 2–3 | 48px | 48px |
| Escritorio | 1024–1439px | 3 o más | 48–92px | 92px |
| Escritorio amplio | 1440px+ | 3 o más | centrado a 1440px | 92–136px |

Los elementos interactivos miden **mínimo 44×44px** para ser cómodos al tacto, y los campos de formulario mínimo 40px de alto. En móvil la navegación se apila o se convierte en menú hamburguesa, las tarjetas pasan a una columna, los titulares pueden bajar un poco pero nunca de 24px, y el cuerpo se mantiene entre 18 y 20px.

> **Pendiente de revisar:** el documento menciona márgenes de 48–92px en escritorio sin indicar cuándo usar cada extremo. La propuesta es 48px hasta 1439px y 92px a partir de 1440px.

## Elevation & Depth

El diseño es **mayormente plano**. Las sombras son suaves y difusas, y aparecen solo cuando hay interacción o apilamiento. No existen sombras decorativas.

| Nivel | Sombra | Uso |
|---|---|---|
| Plano | ninguna | Tarjetas en reposo, campos y navegación |
| Sutil | `0 2px 4px` al 8 % | Hover de tarjetas |
| Media | `0 4px 12px` al 12 % | Tarjetas elevadas, modales y popovers |
| Alta | `0 8px 24px` al 16 % | Botones flotantes |
| Velo | negro al 50 % (`{colors.overlay}`) | Fondo de modales |

Nunca se usan sombras más profundas que `0 8px 24px`. La profundidad comunica jerarquía temporal —algo que se levanta porque estás interactuando—, no decoración permanente.

En modo oscuro las sombras casi no se perciben. Allí la elevación se expresa con **superficies más claras**: `{colors.charcoal-mid}` para las tarjetas y `{colors.charcoal}` para las capas elevadas. Es el mismo principio de profundidad, resuelto con luz en lugar de sombra.

## Shapes

Las esquinas por defecto son **rectas (0px)**, para una estética nítida y moderna. Esa nitidez es parte de la identidad: la mayoría de los componentes no se redondea.

- `{rounded.none}` · 0px — valor por defecto en tarjetas, campos, botones de contacto y contenedores.
- `{rounded.sm}` · 8px — redondeo sutil opcional para elementos flotantes.
- `{rounded.md}` · 16px — reservado para componentes especiales.
- `{rounded.pill}` · 50px — botones principales tipo píldora.
- `{rounded.full}` · 9999px — círculos perfectos para botones de ícono, fotos de perfil y badges. Equivale al 50 % que describe el documento original.

El motivo de marca es el **logo del búho**, construido con el degradado naranja.

> **Pendiente de revisar:** `{rounded.full}` se expresa como 9999px porque el formato oficial solo admite px, em y rem; visualmente produce el mismo círculo perfecto que un 50 %.

## Components

### Botones

**Principal.** Fondo `{colors.primary-strong}` y texto `{colors.on-primary}`, en `{typography.button}`, con esquinas tipo píldora (`{rounded.pill}`) y espacio interno de 12px por 24px. Al pasar el cursor se oscurece a `{colors.primary-hover}`; al presionarlo pasa a `{colors.primary-active}` y encoge ligeramente. Deshabilitado, va en `{colors.disabled-bg}` con texto `{colors.disabled-text}`.

El fondo del botón no usa el naranja de marca sino su versión profunda, porque el blanco sobre #E7562E no alcanza el contraste mínimo. Es el único lugar donde el naranja cambia de tono; el resto de la identidad no se toca.

**Secundario (ícono).** Botón circular de 32×32px con fondo `{colors.surface-muted}` e ícono `{colors.primary}`, con `{rounded.full}`. En hover invierte: fondo `{colors.primary-strong}`, ícono blanco.

**Fantasma.** Se comporta como un enlace: sin fondo, texto `{colors.link}` en `{typography.link}`. En hover pasa a naranja con subrayado.

Ningún botón baja de 32px (circulares) ni de 40px de alto (rectangulares).

### Tarjetas y contenedores

Las tarjetas de contenido tienen fondo transparente o `{colors.surface}`, texto `{colors.on-surface}` en `{typography.body}`, esquinas rectas y espacio interno horizontal de 12px. En hover ganan la sombra sutil descrita en *Elevation & Depth*.

La sección **hero** ocupa el ancho completo con fondo blanco o `{colors.surface}`, 48px de espacio horizontal y 92px vertical, hasta un máximo de 1440px.

La **barra de navegación** es transparente, con texto `{colors.on-surface}`, 64px de alto y, opcionalmente, un borde inferior `{colors.surface-muted}`.

### Campos y formularios

Fondo blanco, texto `{colors.on-surface}` en `{typography.body}`, espacio interno de 12px por 16px y borde gris de 2px `{colors.surface-muted}` con esquinas rectas. Al enfocar, el borde pasa a `{colors.primary}` con un halo suave. El placeholder va en `{colors.on-surface-muted}` y las etiquetas en `{typography.label}`.

### Navegación y enlaces

Los enlaces del menú van en `{typography.nav}` y color `{colors.on-surface}`. En hover pasan a naranja con subrayado de 2px; el activo lleva subrayado de 3px.

Los enlaces dentro del texto van en `{colors.link}` sin subrayado; el subrayado aparece en hover, en naranja. Los enlaces que funcionan como título van en Raleway Black, color `{colors.primary}`, y bajan su opacidad a 0.8 en hover —la única excepción deliberada a la regla de no usar opacidad para la jerarquía.

### Íconos sociales

Botones circulares de 32×32px con fondo `{colors.surface-muted}` e ícono `{colors.on-surface}`. En hover, fondo naranja e ícono blanco.

### Etiquetas, avatar y tarjetas de contenido

- **Chips:** píldoras para tecnologías, categorías o marcas; fondo `{colors.surface-muted}`, texto oscuro, letra de 13px y esquinas totalmente redondeadas.
- **Avatar:** recorte circular (`{rounded.full}`) a 200px (160px en móvil), con borde gris claro de 4px.
- **Botones de contacto:** fondo blanco, texto oscuro, ícono naranja, borde gris de 1px y esquinas rectas. En hover, borde y texto pasan a naranja.
- **Tarjetas de curso:** en columna, con ícono arriba, título en Raleway 700 a 19px y un enlace “Ver →” en azul. Fondo blanco, borde gris y esquinas rectas; en hover el borde se pone naranja y aparece una sombra sutil.
- **Listas de habilidades:** ícono de acento naranja seguido del texto, dentro de una tarjeta blanca con borde gris.
- **Educación y experiencia:** tarjetas con acento lateral de 4px en naranja, fondo blanco, borde gris y esquinas rectas. Llevan una fila superior con título o rol y, a la derecha, la fecha en `{typography.meta}` en gris, seguida de la descripción.

> **Pendiente de revisar:** los espacios internos de chips, botones fantasma, botones de contacto y tarjetas de curso/experiencia no están definidos en el documento; se propusieron valores coherentes con la escala de 8px.

### Modo oscuro

El tema oscuro no es una inversión automática: mantiene formas, tipografía y espaciado, y cambia solo la relación entre superficie y texto.

- **Secciones:** fondo `{colors.charcoal-deep}` con texto `{colors.on-surface-dark}`.
- **Tarjetas:** fondo `{colors.charcoal-mid}`; las que se elevan pasan a `{colors.charcoal}`.
- **Campos:** fondo `{colors.charcoal-mid}`, texto blanco cálido y placeholder en `{colors.on-surface-dark-muted}`.
- **Chips:** fondo `{colors.charcoal}` con texto blanco cálido.
- **Enlaces:** cian `{colors.accent-cyan}`, porque el azul de marca se pierde sobre carbón.
- **Botones:** conservan el naranja fuerte y el texto blanco; el contraste ya está resuelto y no cambia entre temas.

La regla es simple: en claro la jerarquía se construye con sombra; en oscuro, con superficies un escalón más claras.

## Do's and Don'ts

### Sí

- Usa `{colors.primary-strong}` como fondo de los botones con texto blanco y reserva `{colors.primary}` para títulos, íconos y acentos.
- Usa `{colors.primary}` para el énfasis de marca y los títulos.
- Mantén 20px como tamaño base del cuerpo en escritorio; nunca bajes de 16px.
- Aplica 48–92px de espaciado vertical entre secciones mayores.
- Usa PT Sans para cuerpo y navegación, y Raleway Black solo para títulos de nivel superior.
- Combina el naranja con fondos blancos y gris claro para máximo contraste.
- Usa botones de ícono circulares (`{rounded.full}`) para enlaces sociales y acciones secundarias.
- Mantén tarjetas y componentes a 0px de radio para una apariencia nítida.
- Implementa los estados hover con cambios de color o subrayados, nunca con opacidad sola.

### No

- No uses el naranja y el azul juntos en un mismo elemento interactivo; elige uno.
- No uses sombras más profundas que `0 8px 24px`.
- No uses grises más claros que `{colors.on-surface-muted}` para texto.
- No apliques tipografías serif en la jerarquía principal.
- No hagas botones menores a 32px (circulares) o 40px de alto (rectangulares).
- No escondas navegación crítica tras menús desplegables en móvil sin necesidad.
- No uses imágenes de fondo o texturas que compitan con la legibilidad.
