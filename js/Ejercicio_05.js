//Repaso de ciclos y sentencias de control


//Estilización en los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,199,45,2) 0%, rgba(199,244,26,1) 33%, rgba(192,244,26,2) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//personalización de salida de consola

console.warn("Practica 07: Arreglos en Java Script")
console.log("%c1. Condicionales - Si/Entonces .... (IF)", style_console)

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 

let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`)

//Y si la necesitamos en formato local(?)

const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año`)


//que pasa si la validación tiene varias operaciones 
const anio= fechaActual.getFullYear()
let inicioPrimavera= new Date(anio, 2, 21);
let inicioVerano= new Date(anio, 5, 21);
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);
let estacion;
let horarioVerano= false;

if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano)
{

    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floración de muchas plantas....")
    console.log("Los días son más largos y las noches son más cortas...")
    console.log("Muchos animales despiertan de la hibernación...")
    estacion="Primavera"
    horarioVerano=tue;

}
else if(fechaActual >= inicioVerano && fechaActual < inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada abundan los días soleados y calurosos")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realizr actividades al aire...")
    estacion="Verano"
    horarioVerano=true;
}
else if(fechaActual >= inicioOtonio && fechaActual < inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Esos árboles suelen cambiar de follage")
        console.log("Se registraran temperaturas mas templadas")
        console.log("Los animales comiezan con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran")
        estacion="Otoño"
        horarioVerano=true;
    }
    else
    {

        console.log("Estamos en INVIERNO")
        console.log("En esta temporada los dias son más cortos y las noches más largas...")
        console.log("En algunas regiones suele nevar...")
        console.log("Dado las bajas temperaturas, se recomienda abrigarse")
        estacion="Invierno"
        horarioVerano=false;

    }

console.log("%c2. Operador Ternario (Validación? Cumple:no_cumple", style_console)
//En Java Script existe una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayoriaEdadMX= 18;
const mayoriaEdadUS= 21;

let evaluarMayoriaEdad = (edad) =>
    edad=>18 ? "Eres mayor de dad. " : "No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación.

evaluarMayoriaEdad = (edad,pais) =>
(edad => 18 && pais==="MX") ? `En ${pais} eres mayor de edad` : `En ${pais} NO eres mayor de edad `;

console.log("Evaluando la Mayoria de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos ....")
console.log(evaluarMayoriaEdad(edadPersona, "US"));


console.log("%c3. SWITCH - CASE (Elección por valor definido", style_console)
//El switch-case es una estructura de control de flujo que permite evaluar una expresión 

//Calculando tu generación en base a tu edad

let asignaGeneracion = (anioNacimiento) => {
    switch(true){
        case anioNacimiento < 1968: //BabyBoomers
        return"Baby Boomers";
        
        case anioNacimiento > 1968 && anioNacimiento  < 1980: 
        return"Generación X";
        an;

        case anioNacimiento >1980 && anioNacimiento <= 1994:
            return "Millenials";
        
        case anioNacimiento > 1994 && anioNacimiento <= 2010:
            return "Centenials";
        
        case anioNacimiento > 2010:
            return "Cristalez"

    }
}
console.log(`Dado que nació en el año 2005 soy de la generación: ${asignaGeneracion(2005)}`)