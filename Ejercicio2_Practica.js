"use strict";

class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
 
    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

class Abominacion extends Zombi {
    constructor(nombre, puntosVida, potencia) {
        super (nombre, puntosVida, potencia);
    }
 
    ataqueMultiple(objetivo) {

        super.atacar(objetivo);
        super.atacar(objetivo);
        super.atacar(objetivo);
    }

}

let zombi1 = new Abominacion("Antonio", 100, 50);

zombi1.ataqueMultiple("Esther");