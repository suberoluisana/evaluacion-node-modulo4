// Función que determina la categoría según el precio.
function evaluarCategoria(precio) {
    if (precio >= 50) {
        return "Premium";
    } else {
        return "Estándar";
    }
}

// Exportamos la función para utilizarla desde generador.js.
module.exports = evaluarCategoria;
