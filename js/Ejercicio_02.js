//Tiposde Datos en JS   

// 1. Undefined 
console.warn("--------- Tipo de Dato: UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}` ); //La manera de mostrar textos fijos con el valor actual de las variables se le conoce como: 
//interpolación y deben iniciar y finalizar on un  backtic - tilde inversa
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

cliente = "Juan Romero";
console.log(`El cliente es: ${cliente}` );
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

cliente = 180823
console.log(`El cliente es: ${cliente}` );
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

//Undefined es el tipo que por defecto se asigna a variables no inicializadas o no declaradas.

// 2. BOOLEAN
console.warn("--------- Tipo de Dato: BOOLEAN (Boleano - True/ False")

let esPremium = "No lo sé ";
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`);

esPremium= "true";
console.log(`Asignando el valor "true" a la variable` );
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`);

esPremium= true;
console.log(`¿Es el cliente Premium? : ${typeof(esPremium)}`);
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`);
console.log(`Asignando el valor true a la variable` );

if (esPremium){
    console.log("El cliente pagó por usar el servicio");
}else{
    console.log("El cliente que recibe los servicios gratuitos")
}


// 3. Number

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_trasaccion;

console.warn("------ Tipo de Dato - NUMBER (Numeros, positivos, ngativos, decimales, flotantes"),
console.log(`Tu saldo del dia de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta, ${costo_producto}`);
cantidad= 8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${cantidad*costo_producto} `);

saldo_cuenta=saldo_cuenta- (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de:  ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_trasaccion=1500; 
console.log(`Tu abono de : ${monto_trasaccion} ha sido recibido, tu nuevo saldo es de : ${(saldo_cuenta+monto_trasaccion)}`) ;



//Strings o cadenas de texto
const alumno = "Teresa Vargas Fernández"
let producto;

console.warn("--- Tipo de dato - String (Cadena o caractéres");
console.log(`El nombre del alumno es : ${alumno}, que es un tipo de dato ${typeof alumno}`)
producto = "Monitor 20 pulgadas"
console.log(`El nombre del producto es : ${prducto}, que es un tipo de dato ${typeof producto}`)

//Manipulando los Strings
console.log(`Más adelante podremos transformar el contenido de los String usando funciones especificas como convertir a mayusculas: ${alumno} => ${alumno.toUpperCase()}`)
console.log(`o en su defecto a minusculas: ${producto} => ${producto.toLowerCase()}`);

//BigInt (Entero de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos físicos o especiales donde se requiere de una excelente precición numerica
console.warn("---Tipo de Dato - BigInt (Número amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
const numeroGrande3 = 123456789012345678901234567890
const numeroGrande4 = 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es ${numeroGrande}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande2}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande3}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande4}, que si es soportado por NUMBER, y su tipoo de dato es: ${typeof(numeroGrande4)}`)
