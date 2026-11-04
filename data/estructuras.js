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
  }
];
