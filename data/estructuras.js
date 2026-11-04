const ESTRUCTURAS_DATOS = [
  {
    id: "arreglo",
    nombre: "Arreglo",
    categoria: "Lineal",
    resumen: "Colección ordenada de elementos a los que se accede mediante un índice numérico.",
    funcionamiento: "Los elementos ocupan posiciones consecutivas y se consultan por índice. El acceso por índice es O(1); buscar un valor sin conocer su posición suele requerir O(n).",
    ventajas: ["Acceso directo a una posición.", "Adecuado para recorrer colecciones en orden."],
    consideraciones: ["Insertar o quitar elementos al inicio o en medio puede desplazar otros valores.", "En algunos lenguajes, su tamaño se fija al crearlo."],
    ejemplo: {
      lenguaje: "JavaScript",
      codigo: "const notas = [8, 9, 10];\nnotas.push(7);\nconst primeraNota = notas[0];\nconsole.log(primeraNota);"
    }
  },
  {
    id: "lista-enlazada",
    nombre: "Lista enlazada",
    categoria: "Lineal",
    resumen: "Secuencia de nodos donde cada elemento guarda un valor y una referencia al siguiente.",
    funcionamiento: "Para recorrerla se sigue la referencia de cada nodo. Insertar al inicio puede ser O(1); acceder a una posición o buscar un valor requiere recorrer nodos y suele ser O(n).",
    ventajas: ["Puede crecer o reducirse durante la ejecución.", "Insertar al comienzo no requiere desplazar todos los elementos."],
    consideraciones: ["No ofrece acceso directo por índice.", "Cada nodo necesita espacio adicional para sus referencias."],
    ejemplo: {
      lenguaje: "JavaScript",
      codigo: "const nodoTres = { valor: 3, siguiente: null };\nconst nodoDos = { valor: 2, siguiente: nodoTres };\nconst cabeza = { valor: 1, siguiente: nodoDos };\nconsole.log(cabeza.siguiente.valor);"
    }
  },
  {
    id: "pila",
    nombre: "Pila",
    categoria: "Lineal",
    resumen: "Colección que sigue la regla LIFO: el último elemento agregado es el primero en salir.",
    funcionamiento: "Se agrega y retira desde el mismo extremo, llamado tope. push y pop suelen operar en O(1).",
    ventajas: ["Modela acciones de deshacer y llamadas de funciones.", "Sus operaciones principales son simples y eficientes."],
    consideraciones: ["No permite retirar directamente un elemento que esté debajo del tope.", "Conviene comprobar si está vacía antes de retirar."],
    ejemplo: {
      lenguaje: "JavaScript",
      codigo: "const historial = [];\nhistorial.push(\"Inicio\");\nhistorial.push(\"Módulos\");\nconst pantallaAnterior = historial.pop();\nconsole.log(pantallaAnterior);"
    }
  },
  {
    id: "cola",
    nombre: "Cola",
    categoria: "Lineal",
    resumen: "Colección que sigue la regla FIFO: el primer elemento agregado es el primero en salir.",
    funcionamiento: "Los elementos nuevos se agregan al final y se atienden desde el frente. Una cola implementada con nodos puede encolar y desencolar en O(1).",
    ventajas: ["Representa turnos, tareas pendientes y solicitudes en orden de llegada.", "Separa la llegada de elementos de su atención."],
    consideraciones: ["Retirar del inicio de un arreglo puede implicar mover elementos.", "Una cola necesita controlar correctamente su frente y su final."],
    ejemplo: {
      lenguaje: "JavaScript",
      codigo: "const turnos = [];\nturnos.push(\"Ana\");\nturnos.push(\"Luis\");\nconst siguienteTurno = turnos.shift();\nconsole.log(siguienteTurno);"
    }
  }
];
