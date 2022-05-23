import { Personaje } from "./Personaje.js"

export class Luchador extends Personaje{
    constructor (name, family, age,status){
        super(name, family,age,status)
        this.arma=arma
        this.message = "Primero pego y luego pregunto"
    }
}