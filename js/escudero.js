import { Personaje } from "./Personaje.js";
import { Personaje } from "./Personaje.js";

export class Escudero extends Personaje{
    constructor(name, family, age, estatus = new Personaje()){
        super(name, family,age,estatus);
        this.message = "Soy un loser";
        this.pelota = this.pelota
    }
}