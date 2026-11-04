# HUB 3DS·B

Portal de estudio para 3.º BTV Desarrollo de Software «B» del INDEL. La versión actual es **v0.6**: fichas de módulos, cuestionarios, seguimiento del progreso y una guía de estructuras de datos.

**Portal publicado:** <https://renecitoiii.github.io/Ultimo-de-javier/>

## Módulos

| Docente | Módulos |
| --- | --- |
| Profesor Javier Mineros | Fundamentos de programación; Desarrollo de aplicaciones web; Diseño de interfaces digitales |
| Profesor Arcides Canales | Gestión de bases de datos; Desarrollo de aplicaciones móviles; Ingeniería y calidad de software |

Cada ficha incluye resumen, aprendizajes, instrumentos, programas, herramientas, recursos y un cuestionario de tres preguntas. Los períodos académicos aún están pendientes de confirmación. Las evidencias identifican páginas de estudio del portal; no sustituyen capturas o proyectos entregados en clase.

## Estructuras de datos

La sección de estructuras explica arreglos, listas enlazadas, pilas, colas y árboles binarios. Cada tema presenta su funcionamiento, ventajas, consideraciones y un ejemplo en JavaScript. Usa el filtro para alternar entre estructuras lineales y jerárquicas.

## Progreso y cuestionarios

- Cada respuesta correcta gana una copa; la retroalimentación explica la respuesta.
- El resumen al final del portal presenta copas, preguntas respondidas y avance por módulo.
- Las respuestas se guardan en el almacenamiento local del navegador, en el dispositivo actual; no se envían a un servidor.
- **Reiniciar cuestionario** borra las respuestas de ese módulo. **Borrar todo mi progreso** borra las respuestas de todos los módulos en este dispositivo.

## Historial de versiones

Las versiones publicadas se conservan dentro del sitio:

- [v0.2 · Cimientos del HUB](https://renecitoiii.github.io/Ultimo-de-javier/versiones/v0.2/)
- [v0.4 · El portal cobra vida](https://renecitoiii.github.io/Ultimo-de-javier/versiones/v0.4/)
- [v0.5 · Estudio y progreso](https://renecitoiii.github.io/Ultimo-de-javier/versiones/v0.5/)
- [v0.6 · Estructuras de datos](https://renecitoiii.github.io/Ultimo-de-javier/)

Cada nueva entrega se publica como la versión actual y se agrega al historial sin reemplazar los archivos históricos.

## Archivos del portal

- `index.html`: estructura de la página, historial y resumen final.
- `css/styles.css`: diseño minimalista negro y adaptación a móviles.
- `data/modulos.js`: catálogo de seis fichas, recursos y cuestionarios.
- `data/estructuras.js`: contenido de las cinco estructuras.
- `js/app.js`: renderizado de fichas, calificación, copas y persistencia local del progreso.
- `versiones/`: ediciones archivadas v0.2 y v0.5, y registro de entrega v0.4.

## Ejecutar localmente

Se necesita Node.js instalado. Desde la raíz del proyecto:

```powershell
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};http.createServer((req,res)=>{let url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(url==='/')url='/index.html';const file=path.resolve(root,'.'+url);if(!file.startsWith(root)){res.writeHead(403).end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end('No encontrado');return}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'}).end(data)})}).listen(8000)"
```

Abre <http://localhost:8000/>.

## Pruebas de esta versión

- Sintaxis de `data/modulos.js` y `js/app.js` verificada con `node --check`.
- Validación de los campos, enlaces y tres preguntas de cada una de las seis fichas.
- Pruebas de navegador para tarjetas, diálogo, cierre con `Escape`, feedback del quiz, copas y persistencia del progreso.
- Revisión del diseño en móvil y escritorio.
- Revisión de las cinco estructuras, sus ejemplos y el filtro de categorías.
