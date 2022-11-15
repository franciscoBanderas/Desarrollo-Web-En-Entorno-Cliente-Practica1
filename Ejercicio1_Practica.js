"use strict";



class Persona {
   
    constructor(nombre, ocupacion, faccion) {
    this.vida=100; 
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.faccion= faccion;
    }      

    jugadorSaludo(){
        console.log("Hola, me llamo " + this.nombre + " soy " + 
        this.ocupacion + " y pertenezo a la facción " + this.faccion+" y tengo "+ this.vida+" puntos de vida");
    }
}

let persona1 = new Persona("Paco", "guerrero", "imperial");
persona1.jugadorSaludo();
let persona2 = new Persona("Pepe", "caballero", "oscuro");
persona2.jugadorSaludo();