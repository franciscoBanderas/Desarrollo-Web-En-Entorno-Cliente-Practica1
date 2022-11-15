"use strict";
class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre); // ponemos super xq llamamos al nombre de la clase consumible
        this.poder = poder;
    }
 
    consumir(jugador) { 
        if((this.poder + jugador.puntosVida) > jugador.maxPuntosVida){
            /*Si esta condición se cumple es porque el jugador tiene el Máximo de Puntos de Vida. */
            //Implementar
            jugador.puntosVida = jugador.maxPuntosVida;
        }else{
           /* En este caso los Puntos de Vida del jugador se incrementan con su poder.*/
            //Implementar

            jugador.puntosVida = jugador.puntos+this.poder;
        }
           //Implementar: Muestra por consola el nombre del jugador, el nombre de la PlantaCurativa que consume y los puntos de vida que tiene.    }

           console.log(`El jugador ${jugador.nombre} consume  ${this.nombre} y tiene ${jugador.puntosVida} puntos de vida.`)
}

}

let wisky = new PlantaCurativa("wisky", 10);
wisky.consumir(ricardo);