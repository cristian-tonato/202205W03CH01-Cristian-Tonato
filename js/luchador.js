import { Personaje } from "./Personaje.js"

export class Luchador extends Personaje{
    constructor (name, family, age,estatus, img = new Personaje()){
        super(name, family,age,estatus,img, weapon)
        this.weapon= weapon;
        this.message = "Primero pego y luego pregunto"
    }
}