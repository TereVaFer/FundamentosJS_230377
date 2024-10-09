// Repaso de Arreglos

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prácitca 06: Arreglos en Java Script")

//DECLARACIÓN DE UN ARREGLO
//Para declarar un arreglo (array) de datos en JavaScript basta con  agregar [], y dentro los datos que contendra el arrego.

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("%c1.- Declaración de un Arreglo (Array)", style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valos de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos.  siendo el límite inferior 0 y el superior tamaño -1 

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El úlitmo mes del año es: ${mesesAnio[mesesAnio.length-1]}`)
// No se pueden accedes a elementos con posiciones negativas o posiciones superiores al tamaño definido.

console.log(`El mes del año en la posición -1 es:  ${mesesAnio[-1]}`)

console.log(`El treceavo mes del año en la posición es:  ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)


//Al ser JavaScript un leguaje débilmente tipado podremos crear arreglos mixtos de tipos de Datos
console.log("Declarando un Arrego Mixto")
const saludar =  function(nombre){return `Hola, ${nombre}!`}

let arregloMixto = ["String", 5,45.26,-200, -.16854, Symbol("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, {latidud: "20° 18' 0\" N" , longitud: "97° 58' 00\" W", altitud: 796}, saludar, null ]

//Mostramos el contenido del objeto
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")


console.log(`El dato en la posicion[0] = ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`);
console.log(`El dato en la posicion[1] = ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`);
console.log(`El dato en la posicion[2] = ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`);
console.log(`El dato en la posicion[3] = ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`);
console.log(`El dato en la posicion[4] = ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`);
console.log(`El dato en la posicion[5] = ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`);
console.log(`El dato en la posicion[6] = ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`);
console.log(`El dato en la posicion[7] = ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`);
console.log(`El dato en la posicion[8] = ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`);
console.log(`El dato en la posicion[9] = ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`);
console.log(`El dato en la posicion[10] = ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`);
console.log(`El dato en la posicion[11] = ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`);
console.log(`El dato en la posicion[12] = ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`);



console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);

console.log("Declarando una matriz regular.")
//Una matriz es una estructura de datos multidensional (tabla) de n columnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
//esta es una matríz regular de 4 x 4

console.log(matriz)
console.table(matriz)

console.log("Declarando una matriz irregular.")

const matrizIrregular= [["Rafael", "Jose", "Francisco", "Marco"],
[true,false,null],
[9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de una matriz

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elemento en la posicion [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posicion [1][2]: ${matriz[1][2]}`)


// Accediendo a los valores de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elemento en la posicion [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemento en la posicion [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posicion [1][2] (¿Es María mayor de edad?): ${matrizIrregular[1]
[2]}`)

// Funciones y Métodos de Arreglos
// Los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un método sino una propiedad

// Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
console.log("%c4.-Funciones o metodos de los arrreglos (Array Methos or Array Functions)",  style_console);
console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMisto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Qué pasa con los arreglos multidimensionales?`)
console.log(`Matriz es un arreglo de tamaño: ${matriz.length}`)
console.log(`mmm, eso me da el tamaño de número de filas de la matriz, pero como saber el numero de columnas?: ${arregloMixto.length}`)
console.log(`la matriz regular tiene un numero de ${matriz[0].length}`)
console.log("Y para las  irregulares?")

//Para saber la dimensión de una matriz irregulas podemos hacer el uso de ciclo
let numeroFilas=matrizIrregular.length
for(let i = 0; i < numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)

    console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);

    let estudiantes = ["Francisco Garcia", "Teresa Vargas", "Rafael Flores", "Jose Cruz", "Edwin Campos"]
    console.log("Los elementos actuales del arreglo son: ")
    console.table(estudiantes)
    console.log("Agregamos a un nuevo estudiante llamado: Obed Guzmán")
    estudiantes.push("Obed Guzmán")
    console.log("Despues de agregar los elementos del arreglo son: ")
    console.table(estudiantes)
    console.log("¿Qué pasa con los Mixtos?")
    console.log("El arregloMixto actualmente tiene los siguientes elementos: ")
    console.table(arregloMixto)
    console.log("Agregamos la palabra: \"Hola\", como nuevo elemento")
    arregloMixto.push("Hola")
    console.log("Y también agregamos el numero -123456789012345678901234567.123456552, siendo este un BigInt")
    arregloMixto.push(BigInt(-123456789012345678901234567.123456552));
    console.log("Después de estas dos operaciones el arreglo queda con los siguientes elementos: ")
    console.table(arregloMixto)


console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT)", style_console);

console.table(estudiantes)
console.log("Ahora agregamos a Jesús Artiaga, al comienza del arreglo.")
estudiantes.unshift("Jesús Artiaga")
console.log("La lista actual es: ")
console.table(estudiantes)



console.log("%c7.- Eliminar elementos de un arreglo en la última posición (POP)", style_console);
console.log("El arreglo tiene los siguientes elemntos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a  Obed Guzman, en la posición última")
estudiantes.pop()
console.log("Despues de eliminar el elemento el arreglo queda de la siguiente manera: ")
console.table(estudiantes)

console.log("%c8.- Eliminar elemento de un arreglo en la primera posición (SHIFT)", style_console);
console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Jesus Artiaga, en la posición primera")
estudiantes.shift()
console.log("Despues de eliminar el elemento el arreglo queda de la sig manera: ")
console.table(estudiantes)

console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);
console.log("El arreglo original tiene los elementos: ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición ")

//Cuando la función splice recibe un solo parámetro eliminará los elementos de esa posición en adelante
estudiantes.splice(2);
console.table(estudiantes)

//Cuando la función splice recibe dos parámetros, se eliminan todos los elementos que no estes en ese rango

estudiantes.push("Jose Hernandez")
estudiantes.push("Martin Vargas")
estudiantes.push("Pedro Fernández")
estudiantes.push("Gustavo Marquez ")
estudiantes.push("Adriana Perez")
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos suficientes para aplicar el metodo splice con dos parámetros que serán 3,5")
estudiantes.splice(3,5)
console.log("Resultando en: ")
console.table(estudiantes)

//splice sirve tambien para insertar elementos en posiciones especificos, ahora necesitamos insertar a : "Rafael Ruíz" entre a "Francisco " y "Teresa"
console.log("Ahora vamos a insertar a \" Rafael Ruiz\" en los elementos dela posición 0 y 1")
estudiantes.splice(1,0, "Rafael Ruiz")
console.log("Resultando en:")
console.table(estudiantes)

//También splice sirve para reemplazar elementos por otros, en este caso remplazaremos a "Francisco Garcia" por "Rodrigo Perez"
console.log("Ahora vamos a remplazar a \Francisco García\" en los elementos de la posición por \" Rodrigo Perez\"")
estudiantes.splice(0,1, "Rodrigo Perez")
console.log("Resultando en:")
console.table(estudiantes)


console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES ", style_console);
let signosZodiacales = ["Aries", "Tauro", "Geminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Picis"]

//Cogelamos  el arreglo volviendolo inmutable
Object.freeze(signosZodiacales);


//Ninguna se ejecuta por que nuestro objeto es inmutable 
// signosZodiacales.push("Ofiuco");
// signosZodiacales.unshift();
// signosZodiacales.splice(6,2);


let [signo1,,signo3,,,,signo7,,,,,] = signosZodiacales
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El tercer signo zodiacal es: ${signo3}`)
console.log(`El septimo signo zodiacal es: ${signo7}`)



console.log("%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER", style_console);

console.table(estudiantes);
//Antes de filtrar datos llenemos el arreglo con 10 elementos
estudiantes.push("Alberto Montiel ");
estudiantes.push("Joaquin Martinez ")
estudiantes.push("Kevin Fernandez ")
estudiantes.push("Adriana Vargas ")
estudiantes.push("Luis Luna")
estudiantes.push("Regina Fernandez")
console.table(estudiantes)

Object.freeze(estudiantes)

//Filter es un método que recorre los elementos de un arreglo haciendo alguna tarea en específico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que pueda ser mutable.

console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiantes = estudiantes.filter((estudiante, index) => index<5);
console.table(nuevoEstudiantes);

console.table(filtraPrimeros5(estudiantes));

//filtrar a los estudiantes que su nombre tenga más de 15 carácteres
let nuevoEstudiantesNombre = estudiantes.filter((estudiante) => estudiante.length>15);
console.table(nuevoEstudiantesNombre);


//Intentamos modificar el arreglo inmutable
/*estudiantes.pop()
console.table(estudiantes)*/


//Intentamos modificar el nuevo arreglo que no ha sido congelado

nuevoEstudiantes.unshift("Guadalupe Hernández")
console.table(nuevoEstudiantes);

function filtraPrimeros5 (arregloEstudiantes){

    let listaFiltrada=[]
    for(let i=0; i<5; i++){
        listaFiltrada.push(arregloEstudiantes[i]);
 
    }
    return listaFiltrada;
    
}

//Filtrado de Datos - Transformando los datos.
console.log("%c12.- Filtrado de Elemento dentro de un arreglo utilizando el método MAP, en el que necesitamos transformarlos", style_console);

console.log("Imprimimos los elementos actuales de signosZodiacales:")
console.log(signosZodiacales);


//que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYUSCULAS

console.table(signosZodiacales.map(signoZodiacal => signoZodiacal.toUpperCase()))


//Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticos o cuantitativas a un arreglo, como obtener totales, la idea es reducir la lista a un valor más simplificado.

const costosListaCompras= [15, 52.50,16.90,32.50,28,105,45.2,94.10]

//como podemos calcular el total de una lista de costos de un carrito de compras

console.log("Los precios son: ")
console.table(costosListaCompras)
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio)=> total+precio, 0).toFixed(2)}`)