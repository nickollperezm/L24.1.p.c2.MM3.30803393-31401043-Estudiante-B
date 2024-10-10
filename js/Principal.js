/*
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
promedio mínimo de 12 (1=beisbol - 2=fútbol).
Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
estudiante y reporte si es admitido en el equipo que solicita. 
*/

import Cl_equipo from "./Cl_equipo.js";
import Cl_deportista from "./Cl_deportista.js";

let equipo = new Cl_equipo();
let deportista = new Cl_deportista("Juan", 132, 8, 21, 1);
let deportista2 = new Cl_deportista("Félix", 110, 10, 20, 2);
equipo.procesarEstudiante(deportista);
equipo.procesarEstudiante(deportista2);

let salida = document.getElementById("salida");
salida.innerHTML = `
    Nombre del estudiante: ${deportista.nombre}
    <br>Acumulado de notas: ${deportista.notas}
    <br>Cantidad de materias: ${deportista.materias}
    <br>Deporte (1=beisbol - 2=fútbol): ${deportista.deporte}
    <br>Edad: ${deportista.edad}
    <br>Nota promedio: ${deportista.promedio()}
    <br>${deportista.admitido()}
    <br>
    <br>Nombre del estudiante: ${deportista2.nombre}
    <br>Acumulado de notas: ${deportista2.notas}
    <br>Cantidad de materias: ${deportista2.materias}
    <br>Deporte (1=beisbol - 2=fútbol): ${deportista2.deporte}
    <br>Edad: ${deportista2.edad}
    <br>Nota promedio: ${deportista2.promedio()}
    <br>${deportista2.admitido()}
`;