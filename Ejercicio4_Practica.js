"use strict";

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

for(let elemento of puntuaciones)

{
    console.log(elemento.nombre + "tiene una puntuación de " + elemento.puntuacion+" Puntos" );
}

function mejorPuntuacionJugadores(puntos)

{
    let clasificacion = puntos.filter(punto=>punto.puntuacion>100)

    for(let puntuacionMaxima of clasificacion)


    {
        console.log("El jugador" + puntuacionMaxima.nombre + " tiene " + puntuacionMaxima.puntuacion + "puntos.")
    }
}

mejorPuntuacionJugadores(puntuaciones);