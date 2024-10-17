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


console.log("%c4. Manejo de Excepciones (TRY / CATCH)",style_console)

//En algunas ocaciones existiran errores que nos son culpa del programa, si no del usuario,la red, el so o incluso de un middleware,
// pero si duda debemos controlar para evitar las fallas de ejecucion
console.log("Intentamos dividir: 0/10, el resultado es: ")

try{
    let result = 0/10;
    console.log(result)
}
catch (error)
{
    console.log("Ocurrio un error: " +error.message);
}

console.log("Intentamos dividir: 10/0, el resultado es: ")
try{
    let result = 10/0;
    console.log(result)
}
catch (error)
{
    console.log("Ocurrio un error: " +error.message);
}


console.log("Intentamos dividir: a/10, el resultado es: ")
try{
    let result = "a"/10;
    console.log(result)
}
catch (error)
{
    console.log("Ocurrio un error: " +error.message);
}

console.log("Intentamos dividir: la variable a / 10, el resultado es: ")
try{
    let result= a/10;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error :" +error.message)
}


console.log("Intentamos dividir :el valor de la variable x / entre el valor de la variable y, el resultado es: ")
try{
    let x=8, y=2, result= x/y;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrió un error: " +error.message)
}

console.log("%c5. Control de Ciclos (BREAK / CONTINUE) " ,style_console)

//En algunas ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10")
for( let num = 1; num <= 10; num++){
    console.log(num)
}
console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo hoy es de mala suerte")

for (let num=1; num <=10; num++){
    if(num === 7)
        break;
    else
    console.log(num);
}

console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continues")
for (let num=1; num <=10; num++){
    if(num === 7){
        continue;
    }
    console.log(num);
}

console.log("%c6. Ciclo Iterativo - (FOR)", style_console);
//Recorre de manera iterativa  (i) de incrementar o decrementar

console.log( "Los dias de la semana son: " )
let dias= ["Domingo", "Lunes ", "Martes ", "Miercoles", "Jueves", "Viernes", "Sábado"]

for ( i=0; i<dias.length; i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendentes")

const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

for(let i=meses.length-1; i>=0; i--)
    console.log(meses[i]);

console.log("%c7. Ciclo Condicionales - (WHILE)", style_console)

//Estos ciclos (BUCKLE) dependen de una condicion ejecutansose 
let finDeSemaana= false;
let mensaje = "";
let j=0;

while (j < dias.length){
    switch(j){
        case 0:
            finDeSemaana = true;
            mensaje = "Mormingooooo , ZZZzzzZz";
            break;
        case 1:
            finDeSemaana= false;
            mensaje= "San Lunes a chambiar"
            break;
        case 2:
            finDeSemaana = false;
            mensaje = "Segundo dia chambiar a darle..."
            break;
        case 3:
            finDeSemaana = false;
            mensaje = "Ombligo de semana..."
            break;
        case 4:
            finDeSemaana = false;
            mensaje = "Juebebesss ..."
            break;
        case 5:
            finDeSemaana = false;
            mensaje = "Viernes, y el puercower lo sabe ..."
            break;
        case 6:
            finDeSemaana = true;
            mensaje = "Ya cagó el águila..."
            break;
    }
    if(!finDeSemaana)
    {
        console.log(`Dia: ${dias[j]}`);
        console.log(`Mensaje del dia: ${mensaje}`)
    }
    j++

}

console.log("%c8. Ciclo Condicionales, que se ejecuta al menos una vez - (DO-WHILE) ", style_console)

let episodios = [
    "Episodio 1 : Infancia problemática ",
    "Episodio 2 : Primeros asesinatos ",
    "Episodio 3 : Métodos de captura",
    "Episodio 4 : Arresto en 1991",
    "Episodio 5 : Juicio y condena"
];

let indice = 0
let continuarViendo= true // ? esta variable simula la desición delusuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    //Simulamos la reproduccion del episodio
    indice ++;

    if(indice < episodios.length){
        continuarViendo= confirm("¿Deseas continuar viendp el siguiente episodio?");

    }else{
        continuarViendo= false; // Cuando se acaba la lista de episodioas 
    }
}while(continuarViendo && indice < episodios.length);

console.log("Fin de la reproducción")





// Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos.
console.log("%c9. Ciclos para recorrer elementos finitos (FOR.... OF) ",style_console)

let seriesTrending = [
    {nombre: "Jeffrey Dharmer ", temporadas: 1, totalViewers: "3.5M"},
    {nombre: "El Chapo ", temporadas: 3, totalViewers: "7.4M"},
    {nombre: "Vis a vis ", temporadas: 5, totalViewers: "3,7M"},
    {nombre: "Loki", temporadas: 2 , totalReprods: "250k"},
    {nombre: "Breaking Bad  ", temporadas: 5}
]

//Usando FOR ....OF para recorrer la lista
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try
{
    console.log(`La utlima serie leida fué: ${serie.nombre}`); //No va funcionar por la variable serie ya no existe ya que su alcance solo estuvo durante el ciclo
}
catch(error){
    console.log("Ocurrio un error: " +error.mensaje)
}


console.log("%c10. Ciclos para recorrer las propiedades de elementos finitos- (FOR... IN", style_console)

//Usando for...in para recorrer cada serie
//El for...in es una estructura de control en JavaScript (y otros lenguajes de programación) que se utiliza para iterar sobre las propiedades de un objeto o los índices de un array.
for( let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+ 1}`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);

    }
    console.log(`----------`)
}

console.log("%c11. Ciclos interrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console)

//Lista de series de TV trending con temporadas, viewers y reproducciobnes

let seriesTrending2 = [
    {nombre: "Jeffrey Dharmer ", temporadas: 1, totalViewers: 820640, reproducciones: 560000},
    {nombre: "El Chapo ", temporadas: 3,  totalViewers: 25000, reproducciones: 5000000},
    {nombre: "Vis a vis ", temporadas: 5,  totalViewers: 200201, reproducciones: 63850000},
    {nombre: "Loki", temporadas: 2 ,  totalViewers: 9500021, reproducciones: 2000002},
    {nombre: "Breaking Bad  ",  totalViewers: 5000000, reproducciones: 5005000}
]

//Usando ForEach para recorrer cada serie y calcular la calificación

seriesTrending2.forEach((serie, index) => {
    let calificación = (serie.reproducciones / serie.totalViewers).toFixed(2);


    let seriesTrending2 = [
        {nombre: "Jeffrey Dharmer ", temporadas: 1, totalViewers: 820640, reproducciones: 560000},
        {nombre: "El Chapo ", temporadas: 3, totalViewers: 25000, reproducciones: 5000000},
        {nombre: "Vis a vis ", temporadas: 5, totalViewers: 200201, reproducciones: 63850000},
        {nombre: "Loki", temporadas: 2 , totalViewers: 9500021, reproducciones: 2000002},
        {nombre: "Breaking Bad  ", totalViewers: 5000000, reproducciones: 5005000}
    ]
    
    // Usando ForEach para recorrer cada serie y calcular la calificación
    seriesTrending2.forEach((serie, index) => {
        let calificación = (serie.reproducciones / serie.totalViewers).toFixed(2);
    
        console.log(`Serie ${index + 1}:`);
        console.log(`Nombre: ${serie.nombre}`);
        console.log(`Temporadas: ${serie.temporadas}`);
        console.log(`Viewers: ${serie.totalViewers}`);
        console.log(`Reproducciones: ${serie.reproducciones}`);
        console.log(`Calificación: ${calificación}`);
        console.log(`--------------------------`);
    });
    
});

//Usando filter para filtrar y map para transformar la informacion
//Lista de series que queremos verificar

let seriesDeseadas = ["Jeffrey Dharmer", "El Chapo", "Vis a vis"];

// Usando filter y map para transformar la información
let seriesConTresTemporadas = seriesTrending2
    .filter(serie => serie.temporadas <= 3) // Filtramos las series que tienen 3 temporadas
    .map(serie => serie.nombre.trim()) // Obtenemos solo los nombres de esas series y eliminamos espacios
    .filter(nombre => seriesDeseadas.includes(nombre)); // Filtramos las que están en la lista de series deseadas

// Mostrar los resultados
console.log("Series con 3 temporadas que están en la lista deseada: ");
console.log(seriesConTresTemporadas);
