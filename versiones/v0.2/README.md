# HUB 3DS·B - Portal de Repaso

Portal estático del Día 1 para 3.º BTV Desarrollo de Software «B» del INDEL. La versión `v0.2` establece la estructura visual, el equipo y un mapa inicial de módulos, todos presentados como provisionales.

**GitHub Pages:** <https://renecitoiii.github.io/Ultimo-de-javier/>

## Contenido

- `index.html`: página semántica y secciones de inicio, módulos, equipo y bitácora.
- `css/styles.css`: identidad visual adaptable a pantallas móviles y de escritorio.
- `data/modulos.js`: catálogo inicial de seis módulos.
- `js/app.js`: renderizado de tarjetas sin librerías externas.
- `comandos.sh`: comandos de primera publicación en GitHub.

## Equipo y responsabilidades

Los nombres no fueron proporcionados al preparar esta versión; los espacios quedan señalados para completarlos con el equipo.

| Integrante | Rol |
| --- | --- |
| Por confirmar | Líder Git |
| Por confirmar | Diseñador UI |
| Por confirmar | Curador de contenido |
| Por confirmar | QA |

## Repartición provisional de módulos

La asignación y los contenidos deben validarse con los docentes y el equipo.

| Docente | Módulos |
| --- | --- |
| Profesor Javier Mineros | Fundamentos de programación; Desarrollo de aplicaciones web; Diseño de interfaces digitales |
| Profesor Arcides Canales | Gestión de bases de datos; Desarrollo de aplicaciones móviles; Ingeniería y calidad de software |

Los períodos también están pendientes de confirmación. Los datos se editan en `data/modulos.js`.

## Ejecución local

No se requiere instalar dependencias. Desde la carpeta del proyecto, inicia un servidor estático con Python:

```bash
python -m http.server 8000
```

Abre <http://localhost:8000/> en el navegador. También se puede abrir `index.html` directamente, aunque un servidor local ofrece una prueba más fiel a GitHub Pages.

## Publicación en GitHub Pages

1. Crea el repositorio vacío `Renecitoiii/Ultimo-de-javier` en GitHub (sin README, licencia ni archivos iniciales).
2. Desde la raíz de este proyecto, revisa `comandos.sh` y ejecútalo con Bash para crear el commit inicial, subir `main` y publicar la etiqueta `v0.2`.
3. En GitHub, abre **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/(root)`, y guarda.
4. Cuando termine la publicación, verifica <https://renecitoiii.github.io/Ultimo-de-javier/>.

El script está pensado para la primera publicación en un repositorio remoto vacío. Si `origin` ya existe, revisa su URL antes de ejecutar los comandos.

## Registro de Prompts de IA utilizados

| Uso | Prompt / alcance |
| --- | --- |
| Generación del portal v0.2 | Solicitud de crear el Día 1 de «Cimientos del HUB» con HTML semántico, CSS responsive, JavaScript nativo, seis módulos provisionales repartidos entre los docentes indicados, README y comandos para GitHub Pages. |
