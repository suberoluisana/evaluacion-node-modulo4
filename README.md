# Informe – Evaluación Módulo 4

## ¿Qué hace el script?

Desarrollé una herramienta sencilla con Node.js para Lateral Lab. El script `generador.js` contiene el nombre del servicio y su precio, utiliza una función de `evaluador.js` para determinar automáticamente si el servicio pertenece a la categoría Premium o Estándar y finalmente genera el archivo `info.txt`. En este caso, el servicio es “Consultoría estratégica”, tiene un precio de 100 y por ser igual o superior a 50 se clasifica como Premium.

## ¿Qué aprendiste de Node.js?

Aprendí a ejecutar JavaScript desde la terminal utilizando Node.js y a trabajar con módulos. También aprendí a utilizar el módulo `fs` para crear y escribir archivos y a separar una función en otro archivo para reutilizarla mediante `module.exports` y `require()`.

## ¿Tuviste errores o dificultades? ¿Cómo los resolviste?

La principal dificultad fue comprender cómo conectar los dos archivos JavaScript y utilizar correctamente la función exportada. Lo resolví revisando la ruta del archivo, verificando el uso de `module.exports` y realizando pruebas desde la terminal hasta comprobar que `info.txt` se generaba correctamente.

## ¿Cómo lo ejecutarías en otra máquina?

Primero instalaría Node.js en la computadora. Después descargaría o clonaría el repositorio y abriría una terminal dentro de la carpeta del proyecto. Finalmente ejecutaría:

`node node-tools/generador.js`

El comando generaría o sobrescribiría automáticamente el archivo `info.txt`.
