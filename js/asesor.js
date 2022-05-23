import { Personaje } from "./Personaje.js";

export class Asesor extends Personaje{
    constructor(name, family, age, estatus, img = new Personaje()){
        super(name,family,age,estatus, img)
        this.message = "No sé porque, pero creo que voy a morir pronto"
    }
}