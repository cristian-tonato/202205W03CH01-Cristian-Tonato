import { Personaje } from "./Personaje.js";
import { Personaje } from "./Personaje.js";

export class Escudero extends Personaje{
    constructor(name, family, age, estatus, img = new Personaje()){
        super(name, family,age,estatus,img);
        this.message = "Soy un loser";
        this.pelota = this.pelota
    }
}