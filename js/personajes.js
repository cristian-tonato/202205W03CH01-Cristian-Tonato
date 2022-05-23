import { Asesor } from "./asesor,js";
import { Escudero } from "./escudero.js";
import { Luchador } from "./luchador.js";
import { Rey } from "./rey.js";


const jeoffrey = new Rey(
    'Joffrey Baratheon',
    'Lannister',
    '14',
    '2',
    './img/joffrey.jpg'
);
const jaime = new Luchador(
    'Jaime Lannister',
    'Lannister',
    '32',
    'sword',
    '9',
    './img/jaime.jpg'
);
const daenerys = new Luchador(
    'Daenerys Targaryen',
    'Targaryen',
    '16',
    'dragons',
    '9',
    './img/daenerys.jpg'
);
const tyrion = new Asesor(
    'Tyrion Lannister',
    'Lannister',
    '28',
    daenerys.name,
    './img/tyrion.jpg'
);
const bronn = new Squire(
    'Bronn',
    'unknown',
    '36',
    jaime.name,
    '2',
    './img/Bronn.jpg'
);