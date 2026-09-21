// Importamos la función que evalúa la categoría del servicio.
const evaluarCategoria = require("./evaluador");

// Importamos el módulo fs de Node.js para trabajar con archivos.
const fs = require("fs");

// Datos del servicio de Lateral Lab.
const producto = "Consultoría estratégica";
const precio = 100;

// Obtenemos la categoría usando la función del módulo externo propio.
const categoria = evaluarCategoria(precio);

// Creamos el contenido que se escribirá en info.txt.
const informacion = `Producto: ${producto}
Precio: ${precio}
Categoría: ${categoria}`;

// Creamos o sobrescribimos el archivo info.txt.
fs.writeFileSync("info.txt", informacion, "utf8");

console.log("El archivo info.txt fue generado correctamente.");
