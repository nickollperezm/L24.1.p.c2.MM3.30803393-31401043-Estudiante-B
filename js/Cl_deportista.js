import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_deportista extends Cl_estudiante {
    constructor(nombre, notas, materias, edad, deporte) {
        super(nombre, notas, materias);
        this.edad = edad;
        this.deporte = deporte;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set deporte(deporte) {
        this._deporte = deporte;
    }
    get deporte() {
        return this._deporte;
    }
    admitido() {
        if (this.deporte == 1) {
            if (this.promedio() > 14 && this.edad >= 21)
                return this.nombre + " es admitido en beisbol";
            else
                return this.nombre + " no es admitido en beisbol";
        } else
            if (this.promedio() >= 12 && this.edad >= 19)
                return this.nombre + " es admitido en fútbol";
            else
                return this.nombre + " no es admitido en fútbol";
    }
}