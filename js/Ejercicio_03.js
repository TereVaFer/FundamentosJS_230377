//Objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 5 - Repaso de Objetos en Java Script")
console.log('%c1. Variables Independientes', style_console)

let Producto_Nombre = "Camioneta"
let Producto_Marca = "Ford"
let Producto_Modelo = "Lobo"
let Producto_Precio=  350000
let Producto_Disponible = true
let Producto_Sku = Symbol("RRF12")
let Producto_Stock = 20
let Producto_Imagen = null
let Producto_Barcode;
let Producto_Categorias = ["Camionetas", "Automotriz", "Mejores precios", "Nuevo Lanzamiento"]

//Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del PRODUCTO son: 
    Nombre: ${Producto_Nombre}, Tipo de Dato: ${typeof(Producto_Nombre)}
    Marca: ${Producto_Marca}, Tipo de Dato: ${typeof(Producto_Marca)}
    Modelo: ${Producto_Modelo}, Tipo de Dato: ${typeof(Producto_Modelo)}
    Precio: ${Producto_Precio}, Tipo de Dato: ${typeof(Producto_Precio)}
    Disponible: ${Producto_Disponible}, Tipo de Dato: ${typeof(Producto_Disponible)}
    Stock: ${Producto_Stock}, Tipo de Dato: ${typeof(Producto_Stock)}
    Imagen: ${Producto_Imagen}, Tipo de Dato: ${typeof(Producto_Imagen)}
    Categorias: ${Producto_Categorias}, Tipo de Dato: ${typeof(Producto_Categorias)}`);    

console.log("En el caso del SKU anterior, no se puede concatenar a la cadena de la impresion anterior")
console.log(Producto_Sku)
console.log(typeof(Producto_Sku))

console.log('%c2. Objeto', style_console)
//Ahora se declara como un OBJETO
const producto = {
    Producto_Nombre: " Televisión",
    Producto_Marca: "Samsung",
    Producto_Modelo: "Smart TV",
    Producto_Precio: 12000,
    Producto_Disponible: true,
    Producto_Sku: Symbol("TVRR125"),
    Producto_Stock: 23,
    Producto_Imagen: null,
    Producto_Barcode: null,
    Producto_Categorias:["Electronicos", " Mejores precios", " Electronicos", " Nuevo Lanzamiento"]
}

console.warn("--- Ahora el mismo producto como un OBJETO ---")
//Imprimir el objeto
console.log(producto)
console.table(producto)

//Acceder a las propiedades de un objeto
console.warn("Leyendo las propiedades especificas del objeto.")  
console.log(`Nombre del producto: ${producto.Producto_Nombre}`)
console.log(`Nombre de la marca: ${producto.Producto_Marca}`)
console.log(`Nombre del modelo: ${producto.Producto_Modelo}`)
console.log(`Precio del producto: ${producto.Producto_Precio}`)
if(producto.Producto_Disponible == 0){
    console.log(`Estatus: Agotado`)
}else{
    console.log(`Estatus: ${Producto_Stock} unidades disponibles.`)
}


//Destructuracion
console.log('%c3. Destructuracion', style_console)

let Producto2 = {
    Clave: 285,
    Nombre: "iPhone 14",
    Marca: "Apple",
    Modelo: 14,
    Precio: 10500,
    Disponibilidad: true,
    Stock: 200,
    SKU: "AP-IPHONE-14",
    Imagen: "../Assets/iphonee14.jpg",
    Barcode: "194253244962",
    Categorias: ["Electrónica", "Teléfonia", "Fotografia", "iPhone", "Rendimiento"]
}

let Comprador = {
    Clave: 1808,
    Nombres: "Teresa ",
    Apellidos: "Vargas Fernández",
    Tipo: "Nuevo",
    Correo: "terevf@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 35000.00
}

let Pedido = {
    Producto_Clave: 285,
    Comprador_Clave: 1808,
    Cantidad: 3,
    Estatus: "Carrito de Compra",
    TipoPago: "Efectivo"
}

//En base a los 3 objetos necesitamos calcular el casto de compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2} = Producto2
let {Cantidad: Pedido_Cantidad} = Pedido
let {SaldoActual: Cliente_SaldoActual} = Comprador
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra}`)
if(Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")

console.log('%c4. Actualizacion de los valores de las propiedades de un Objeto', style_console)

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2)) //stringify encadena lo que se imprime

//Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
Producto2.Precio = 15000
console.log("Los nuevos valores del producto son: ")
console.log(Producto2);

//¿Puedo cambiar no solo el valor, sino el tipo de dato ded un objeto en Js?
console.log(`-----------------------------------------`)
console.log(`El objeto actual tiene los siguientes valores`)
let tipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2));
Producto2.Disponibilidad="Si";
let nuevoTipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(Producto2)
console.log(Producto2)
console.log(`El nuevo tipo de dato de la disponibilidad es:${nuevoTipoDisponibilidad}`)
















































// // Objetos

// const producto = {
//     Nombre:"Table 9\"",
//     Marca: "Ford",
//     Modelo: "Tremor",
//     Costo_Compra: 500000,
//     Costo_Venta: 85500,
//     Disponible: true,
//     SKU: Symbol("La mejor camioneta"),
//     Colores: ["Negro" , "Rojo", "Azul Marino"]

// }

// //Imprimir el objeto 
// console.warn("---OBJETO ---");
// console.log(producto);

// // Los objetos también pueden presentarse en formato de tabla utilizando la función console.table

// console.table(producto);

// // Acceder a las prioridades de un objeto
// console.warn("---Leyendo las Propiedades de un Objeto y sus tipos de dato")
// console.log(`Nombre del Producto: ${(producto.Nombre)}, que es de tipo: ${typeof(producto.Nombre)}`)
// console.log(`Marca del Producto: ${(producto.Marca)}, que es de tipo: ${typeof(producto.Marca)}`)
// console.log(`Modelo del Producto: ${(producto.Modelo)}, que es de tipo: ${typeof(producto.Modelo)}`)
// console.log(`Costo_Venta del Producto: ${(producto.Costo_Compra)}, que es de tipo: ${typeof(producto.Costo_Compra)}`)
// console.log(`Disponible: ${(producto.Disponible)}, que es de tipo: ${typeof(producto.Disponible)}`)
// console.log(`SKU: ${(String(producto.SKU))}, que es de tipo: ${typeof(producto.SKU)}`)
// console.log(`Colores: ${(producto.Colores)}, que es de tipo: ${typeof(producto.Colores)}`)