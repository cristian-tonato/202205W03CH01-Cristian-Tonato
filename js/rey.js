import { Personaje } from "./Personaje.js";

export class Rey extends Personaje{
    constructor (name,family,age,status){
        super(name, family,age)
        this.massage = "Vais a morir todos"
    }
}