const MODULOS_INICIALES = [
  {
    id: "MOD-01",
    nombre: "Fundamentos de programación",
    docente: "Profesor Javier Mineros",
    periodo: "Período académico por confirmar",
    descripcionCorta: "Lógica, algoritmos y estructuras esenciales para resolver problemas mediante código.",
    resumen: "Introducción a la resolución sistemática de problemas: analizar una necesidad, diseñar un algoritmo y expresarlo con instrucciones claras antes de implementarlo en un lenguaje de programación.",
    aprendizajes: [
      "Descomponer un problema en entradas, procesos y salidas.",
      "Representar soluciones mediante pseudocódigo y diagramas de flujo.",
      "Usar variables, decisiones, ciclos y funciones en programas pequeños."
    ],
    instrumentos: [
      { nombre: "Guía de ejercicios de lógica", tipo: "Guía", descripcion: "Prácticas graduadas de análisis, secuencias y estructuras de control." },
      { nombre: "Rúbrica de algoritmo", tipo: "Rúbrica", descripcion: "Valora claridad, orden, casos de prueba y correspondencia con el problema." }
    ],
    programas: [
      { nombre: "Visual Studio Code", uso: "Edición de pseudocódigo y programas de práctica." },
      { nombre: "IntelliJ IDEA Community", uso: "Escritura y ejecución de ejercicios introductorios en Java." }
    ],
    herramientas: [
      { nombre: "Java", uso: "Implementación de algoritmos y estructuras básicas." },
      { nombre: "Python", uso: "Práctica complementaria de lógica y automatización sencilla." }
    ],
    recursos: [
      { titulo: "Aprender Java", tipo: "Documentación", url: "https://dev.java/learn/" },
      { titulo: "Tutorial oficial de Python", tipo: "Tutorial", url: "https://docs.python.org/3/tutorial/" },
      { titulo: "JavaScript en MDN", tipo: "Documentación", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ],
    evidencias: [
      { tipo: "proyecto", titulo: "Ficha de estudio del módulo en HUB 3DS·B", descripcion: "Vista del módulo en el portal; la evidencia de una práctica de clase se añadirá cuando esté disponible.", url: "https://renecitoiii.github.io/Ultimo-de-javier/#modulo-MOD-01" }
    ],
    quiz: [
      {
        pregunta: "¿Qué representa un algoritmo?",
        opciones: ["Una secuencia finita y ordenada de pasos para resolver un problema.", "Un lenguaje que solo puede ejecutarse en una página web.", "Una colección de datos sin instrucciones."],
        respuestaCorrecta: 0,
        explicacion: "Un algoritmo define pasos precisos y finitos que transforman entradas en una solución."
      },
      {
        pregunta: "¿Para qué se usa una estructura condicional?",
        opciones: ["Para repetir instrucciones siempre el mismo número de veces.", "Para elegir qué instrucciones ejecutar según una condición.", "Para guardar permanentemente un programa."],
        respuestaCorrecta: 1,
        explicacion: "Una condición permite bifurcar el flujo del algoritmo cuando una expresión resulta verdadera o falsa."
      },
      {
        pregunta: "¿Qué característica debe tener una variable?",
        opciones: ["Su valor nunca puede cambiar.", "Debe contener siempre texto.", "Tiene un nombre y almacena un valor que el programa puede consultar."],
        respuestaCorrecta: 2,
        explicacion: "Una variable identifica un espacio de almacenamiento cuyo valor puede leerse y, según el lenguaje, actualizarse."
      }
    ],
    badges: ["Algoritmos", "Pseudocódigo", "Java"],
    estado: "Ficha de estudio"
  },
  {
    id: "MOD-02",
    nombre: "Desarrollo de aplicaciones web",
    docente: "Profesor Javier Mineros",
    periodo: "Período académico por confirmar",
    descripcionCorta: "Construcción de experiencias web con estructura semántica, estilos y programación del navegador.",
    resumen: "Recorrido por las tecnologías principales del front-end para crear páginas semánticas, adaptables e interactivas, organizando estructura, presentación y comportamiento.",
    aprendizajes: [
      "Estructurar contenido con elementos HTML semánticos y formularios accesibles.",
      "Aplicar CSS para organizar, diseñar y adaptar una interfaz a distintos tamaños.",
      "Usar JavaScript y el DOM para responder a acciones de la persona usuaria."
    ],
    instrumentos: [
      { nombre: "Lista de cotejo de página web", tipo: "Lista de cotejo", descripcion: "Comprueba estructura semántica, navegación, estilos y adaptación móvil." },
      { nombre: "Rúbrica de proyecto front-end", tipo: "Rúbrica", descripcion: "Evalúa funcionalidad, accesibilidad, presentación y legibilidad del código." }
    ],
    programas: [
      { nombre: "Visual Studio Code", uso: "Edición de archivos HTML, CSS y JavaScript." },
      { nombre: "Navegador con DevTools", uso: "Prueba de la página, inspección del DOM y depuración de estilos." }
    ],
    herramientas: [
      { nombre: "HTML5", uso: "Estructura y significado del contenido." },
      { nombre: "CSS3 y JavaScript", uso: "Presentación adaptable e interactividad del lado del navegador." }
    ],
    recursos: [
      { titulo: "Estructurar contenido con HTML", tipo: "Tutorial", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content" },
      { titulo: "Fundamentos de estilos CSS", tipo: "Tutorial", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics" },
      { titulo: "Guía de JavaScript", tipo: "Documentación", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
    ],
    evidencias: [
      { tipo: "proyecto", titulo: "Ficha de estudio del módulo en HUB 3DS·B", descripcion: "Vista del módulo en el portal; la evidencia de un sitio desarrollado en clase se añadirá cuando esté disponible.", url: "https://renecitoiii.github.io/Ultimo-de-javier/#modulo-MOD-02" }
    ],
    quiz: [
      {
        pregunta: "¿Cuál es la responsabilidad principal de HTML?",
        opciones: ["Definir la estructura y el significado del contenido.", "Administrar usuarios del servidor.", "Crear únicamente animaciones visuales."],
        respuestaCorrecta: 0,
        explicacion: "HTML organiza el contenido mediante elementos y semántica; no reemplaza los estilos ni la lógica de servidor."
      },
      {
        pregunta: "¿Qué mecanismo permite que CSS se adapte a distintos anchos de pantalla?",
        opciones: ["Las consultas de medios (media queries).", "Las etiquetas title.", "Los comentarios HTML."],
        respuestaCorrecta: 0,
        explicacion: "Las media queries aplican reglas según características del dispositivo o del viewport, como su ancho."
      },
      {
        pregunta: "¿Qué es el DOM en una página web?",
        opciones: ["Una base de datos remota.", "La representación estructurada del documento que JavaScript puede consultar y modificar.", "Un formato de imagen."],
        respuestaCorrecta: 1,
        explicacion: "El navegador expone el documento como un árbol de nodos, el DOM, que los scripts pueden recorrer y actualizar."
      }
    ],
    badges: ["HTML5", "CSS3", "JavaScript"],
    estado: "Ficha de estudio"
  },
  {
    id: "MOD-03",
    nombre: "Diseño de interfaces digitales",
    docente: "Profesor Javier Mineros",
    periodo: "Período académico por confirmar",
    descripcionCorta: "Principios de diseño visual y organización de interfaces claras, consistentes y accesibles.",
    resumen: "Planificación de interfaces centradas en las personas: organización de información, jerarquía visual, consistencia de componentes y comprobación de accesibilidad antes de implementar.",
    aprendizajes: [
      "Identificar necesidades de las personas usuarias y organizar contenido por prioridad.",
      "Crear wireframes y prototipos con componentes y patrones consistentes.",
      "Revisar contraste, legibilidad, navegación por teclado y etiquetas."
    ],
    instrumentos: [
      { nombre: "Lista de cotejo de accesibilidad", tipo: "Lista de cotejo", descripcion: "Revisa contraste, jerarquía de encabezados, controles y navegación." },
      { nombre: "Rúbrica de prototipo UI", tipo: "Rúbrica", descripcion: "Valora claridad del flujo, consistencia visual, legibilidad y respuesta al objetivo." }
    ],
    programas: [
      { nombre: "Figma", uso: "Creación colaborativa de wireframes, prototipos y componentes." },
      { nombre: "Penpot", uso: "Diseño y prototipado de interfaces con una herramienta abierta." }
    ],
    herramientas: [
      { nombre: "Wireframes y prototipos", uso: "Representación de estructura e interacción antes de programar." },
      { nombre: "HTML y CSS", uso: "Implementación semántica y visual de las decisiones de interfaz." }
    ],
    recursos: [
      { titulo: "Centro de aprendizaje de Figma", tipo: "Tutorial", url: "https://help.figma.com/hc/en-us/categories/360002051613-Get-started" },
      { titulo: "Introducción a la accesibilidad web", tipo: "Guía", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
      { titulo: "Fundamentos de estilos CSS", tipo: "Tutorial", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics" }
    ],
    evidencias: [
      { tipo: "proyecto", titulo: "Ficha de estudio del módulo en HUB 3DS·B", descripcion: "Vista del módulo en el portal; se incorporará el enlace al prototipo del equipo cuando sea publicado.", url: "https://renecitoiii.github.io/Ultimo-de-javier/#modulo-MOD-03" }
    ],
    quiz: [
      {
        pregunta: "¿Qué conviene hacer antes de diseñar las pantallas finales de una interfaz?",
        opciones: ["Definir necesidades, tareas y estructura de contenido.", "Elegir animaciones al azar.", "Implementar todos los colores sin probar el flujo."],
        respuestaCorrecta: 0,
        explicacion: "Entender las tareas y prioridades de las personas usuarias permite que la interfaz resuelva el problema correcto."
      },
      {
        pregunta: "¿Por qué se crea un prototipo?",
        opciones: ["Para validar el flujo y la interacción antes de construir el producto final.", "Para reemplazar permanentemente las pruebas.", "Para convertir automáticamente el diseño en una base de datos."],
        respuestaCorrecta: 0,
        explicacion: "Un prototipo permite comunicar y probar una propuesta temprana con menos costo que modificar una implementación terminada."
      },
      {
        pregunta: "¿Cuál es una práctica útil para la accesibilidad?",
        opciones: ["Usar solo color para comunicar errores.", "Asegurar contraste legible y controles utilizables con teclado.", "Eliminar los nombres accesibles de los botones."],
        respuestaCorrecta: 1,
        explicacion: "El contraste adecuado y la operación por teclado ayudan a que más personas puedan percibir y usar la interfaz."
      }
    ],
    badges: ["UI", "Accesibilidad", "Figma"],
    estado: "Ficha de estudio"
  },
  {
    id: "MOD-04",
    nombre: "Gestión de bases de datos",
    docente: "Profesor Arcides Canales",
    periodo: "Período académico por confirmar",
    descripcionCorta: "Modelado de información y consultas para almacenar y recuperar datos de forma organizada.",
    resumen: "Introducción al diseño de bases de datos relacionales, sus tablas y relaciones, y al uso de SQL para definir estructuras, insertar información y consultar resultados.",
    aprendizajes: [
      "Distinguir entidades, atributos, registros y claves en un modelo relacional.",
      "Representar relaciones y reducir duplicación mediante normalización básica.",
      "Escribir consultas SQL para insertar, filtrar, ordenar y relacionar datos."
    ],
    instrumentos: [
      { nombre: "Guía práctica de consultas SQL", tipo: "Guía", descripcion: "Ejercicios de creación de tablas y consultas con filtros y relaciones." },
      { nombre: "Rúbrica de modelo entidad-relación", tipo: "Rúbrica", descripcion: "Evalúa entidades, atributos, claves y cardinalidades del modelo." }
    ],
    programas: [
      { nombre: "MySQL Workbench", uso: "Diseño visual de esquemas y administración de bases MySQL." },
      { nombre: "DBeaver Community", uso: "Conexión y consulta de bases de datos desde una interfaz gráfica." }
    ],
    herramientas: [
      { nombre: "SQL", uso: "Definición, consulta y modificación de datos relacionales." },
      { nombre: "Diagramas entidad-relación", uso: "Planificación visual de entidades, claves y relaciones." }
    ],
    recursos: [
      { titulo: "Tutorial interactivo de SQL", tipo: "Tutorial", url: "https://sqlbolt.com/lesson/select_queries_introduction" },
      { titulo: "Tutorial de PostgreSQL y conceptos relacionales", tipo: "Documentación", url: "https://www.postgresql.org/docs/current/tutorial.html" },
      { titulo: "Documentación de SQL Server", tipo: "Documentación", url: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17" }
    ],
    evidencias: [
      { tipo: "proyecto", titulo: "Ficha de estudio del módulo en HUB 3DS·B", descripcion: "Vista del módulo en el portal; se añadirá el enlace al esquema o proyecto de base de datos del equipo cuando esté disponible.", url: "https://renecitoiii.github.io/Ultimo-de-javier/#modulo-MOD-04" }
    ],
    quiz: [
      {
        pregunta: "¿Qué función cumple una clave primaria?",
        opciones: ["Identificar de forma única cada fila de una tabla.", "Ordenar siempre las filas alfabéticamente.", "Almacenar exclusivamente contraseñas."],
        respuestaCorrecta: 0,
        explicacion: "La clave primaria identifica cada registro y no debe repetirse ni ser nula."
      },
      {
        pregunta: "¿Qué consulta recupera filas de una tabla?",
        opciones: ["SELECT", "DROP", "ALTER"],
        respuestaCorrecta: 0,
        explicacion: "SELECT define las columnas y filas que se desean recuperar de una o varias tablas."
      },
      {
        pregunta: "¿Qué representa una clave foránea?",
        opciones: ["Una referencia que relaciona un registro con una clave de otra tabla.", "Una copia de seguridad automática.", "Un índice que siempre contiene texto."],
        respuestaCorrecta: 0,
        explicacion: "La clave foránea referencia una clave candidata, normalmente primaria, y ayuda a mantener la integridad referencial."
      }
    ],
    badges: ["SQL", "Modelado", "MySQL"],
    estado: "Ficha de estudio"
  },
  {
    id: "MOD-05",
    nombre: "Desarrollo de aplicaciones móviles",
    docente: "Profesor Arcides Canales",
    periodo: "Período académico por confirmar",
    descripcionCorta: "Conceptos y herramientas para planificar y desarrollar aplicaciones para dispositivos móviles.",
    resumen: "Diseño y construcción inicial de aplicaciones móviles, considerando pantallas pequeñas, interacción táctil, navegación, ciclo de vida y pruebas en dispositivos o emuladores.",
    aprendizajes: [
      "Planificar pantallas y recorridos de navegación para un caso de uso móvil.",
      "Reconocer componentes de interfaz y patrones de interacción táctil.",
      "Ejecutar y comprobar una aplicación en un emulador o dispositivo de prueba."
    ],
    instrumentos: [
      { nombre: "Lista de cotejo de interfaz móvil", tipo: "Lista de cotejo", descripcion: "Comprueba legibilidad, navegación, estados y adaptación al dispositivo." },
      { nombre: "Rúbrica de prototipo funcional", tipo: "Rúbrica", descripcion: "Valora flujo, respuesta de controles, estabilidad y presentación." }
    ],
    programas: [
      { nombre: "Android Studio", uso: "Edición, compilación y prueba de aplicaciones Android." },
      { nombre: "Visual Studio", uso: "Desarrollo de aplicaciones multiplataforma con .NET MAUI." }
    ],
    herramientas: [
      { nombre: "Kotlin", uso: "Lenguaje moderno para crear aplicaciones Android." },
      { nombre: "C# y .NET MAUI", uso: "Desarrollo de interfaces multiplataforma con .NET." }
    ],
    recursos: [
      { titulo: "Cursos oficiales de Android", tipo: "Curso", url: "https://developer.android.com/courses" },
      { titulo: "Documentación de .NET MAUI", tipo: "Documentación", url: "https://learn.microsoft.com/en-us/dotnet/maui/" },
      { titulo: "Primeros pasos con Kotlin", tipo: "Tutorial", url: "https://kotlinlang.org/docs/getting-started.html" }
    ],
    evidencias: [
      { tipo: "proyecto", titulo: "Ficha de estudio del módulo en HUB 3DS·B", descripcion: "Vista del módulo en el portal; se añadirá el enlace al prototipo o aplicación del equipo cuando esté disponible.", url: "https://renecitoiii.github.io/Ultimo-de-javier/#modulo-MOD-05" }
    ],
    quiz: [
      {
        pregunta: "¿Qué permite comprobar un emulador móvil?",
        opciones: ["El comportamiento de una aplicación en un dispositivo virtual.", "La velocidad de conexión física del teléfono sin ejecutar la app.", "Que el código no necesita compilarse."],
        respuestaCorrecta: 0,
        explicacion: "Un emulador reproduce un entorno de dispositivo para ejecutar y revisar la aplicación durante el desarrollo."
      },
      {
        pregunta: "¿Qué es importante al diseñar una interfaz para móvil?",
        opciones: ["Controles táctiles claros y contenido legible en una pantalla pequeña.", "Requerir siempre un mouse.", "Usar texto diminuto para mostrar más información."],
        respuestaCorrecta: 0,
        explicacion: "El tamaño de pantalla y la entrada táctil condicionan la disposición, el tamaño de controles y la legibilidad."
      },
      {
        pregunta: "¿Qué es la navegación de una aplicación?",
        opciones: ["El recorrido entre pantallas o secciones según las tareas del usuario.", "La descarga de imágenes del dispositivo.", "Una copia de la aplicación en la nube."],
        respuestaCorrecta: 0,
        explicacion: "La navegación conecta vistas y acciones para que las personas completen sus tareas dentro de la aplicación."
      }
    ],
    badges: ["Android", "Interfaces", "Prototipos"],
    estado: "Ficha de estudio"
  },
  {
    id: "MOD-06",
    nombre: "Ingeniería y calidad de software",
    docente: "Profesor Arcides Canales",
    periodo: "Período académico por confirmar",
    descripcionCorta: "Organización del trabajo de software, control de versiones y prácticas iniciales de verificación.",
    resumen: "Prácticas para desarrollar software de manera ordenada: registrar cambios, colaborar mediante repositorios, definir criterios de calidad y comprobar que el producto cumple sus requisitos.",
    aprendizajes: [
      "Usar control de versiones para registrar cambios y colaborar con un equipo.",
      "Distinguir pruebas unitarias, de integración y de extremo a extremo.",
      "Relacionar requisitos con casos de prueba y reportar defectos reproducibles."
    ],
    instrumentos: [
      { nombre: "Lista de cotejo de revisión de código", tipo: "Lista de cotejo", descripcion: "Comprueba legibilidad, cambios acotados, mensajes de commit y documentación." },
      { nombre: "Matriz de casos de prueba", tipo: "Instrumento de evaluación", descripcion: "Relaciona requisitos, pasos, datos de prueba y resultados esperados." }
    ],
    programas: [
      { nombre: "Git", uso: "Registro local del historial de cambios y trabajo por ramas." },
      { nombre: "GitHub", uso: "Alojamiento de repositorios, colaboración, revisión y publicación." }
    ],
    herramientas: [
      { nombre: "Git y GitHub", uso: "Control de versiones y colaboración en equipo." },
      { nombre: "Playwright", uso: "Automatización de pruebas de extremo a extremo para sitios web." }
    ],
    recursos: [
      { titulo: "Libro Pro Git", tipo: "Libro", url: "https://git-scm.com/book/en/v2" },
      { titulo: "¿Qué es GitHub?", tipo: "Documentación", url: "https://docs.github.com/en/get-started/start-your-journey/what-is-github" },
      { titulo: "Introducción a Playwright", tipo: "Documentación", url: "https://playwright.dev/docs/intro" }
    ],
    evidencias: [
      { tipo: "proyecto", titulo: "Ficha de estudio del módulo en HUB 3DS·B", descripcion: "Vista del módulo en el portal; se añadirá el repositorio del equipo cuando esté disponible.", url: "https://renecitoiii.github.io/Ultimo-de-javier/#modulo-MOD-06" }
    ],
    quiz: [
      {
        pregunta: "¿Qué información conserva el control de versiones?",
        opciones: ["El historial de cambios del proyecto y quién los registró.", "Solo una captura de pantalla final.", "Únicamente la configuración del monitor."],
        respuestaCorrecta: 0,
        explicacion: "Un sistema de control de versiones registra cambios y permite revisar o comparar estados anteriores del proyecto."
      },
      {
        pregunta: "¿Qué comprueba principalmente una prueba unitaria?",
        opciones: ["Una unidad pequeña y aislada del código.", "Todo el comportamiento de producción con usuarios reales.", "La apariencia de todos los dispositivos físicos."],
        respuestaCorrecta: 0,
        explicacion: "Una prueba unitaria verifica una unidad de trabajo concreta; las pruebas de integración cubren la colaboración entre componentes."
      },
      {
        pregunta: "¿Qué hace una prueba de extremo a extremo?",
        opciones: ["Simula un flujo completo de uso a través de la aplicación.", "Comprueba solo el nombre de una variable.", "Sustituye el control de versiones."],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas end-to-end ejercitan la aplicación desde la perspectiva del usuario y verifican recorridos completos."
      }
    ],
    badges: ["Git", "Pruebas", "Documentación"],
    estado: "Ficha de estudio"
  }
];
