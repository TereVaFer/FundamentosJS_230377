// Objetos

const producto = {
    Nombre:"Table 9\"",
    Marca: "Ford",
    Modelo: "Tremor",
    Costo_Compra: 500000,
    Costo_Venta: 85500,
    Disponible: true,
    SKU: Symbol("La mejor camioneta"),
    Colores: ["Negro" , "Rojo", "Azul Marino"]

}

//Imprimir el objeto 
console.warn("---OBJETO ---");
console.log(producto);

// Los objetos también pueden presentarse en formato de tabla utilizando la función console.table

console.table(producto);

// Acceder a las prioridades de un objeto
console.warn("---Leyendo las Propiedades de un Objeto y sus tipos de dato")
console.log(`Nombre del Producto: ${(producto.Nombre)}, que es de tipo: ${typeof(producto.Nombre)}`)
console.log(`Marca del Producto: ${(producto.Marca)}, que es de tipo: ${typeof(producto.Marca)}`)
console.log(`Modelo del Producto: ${(producto.Modelo)}, que es de tipo: ${typeof(producto.Modelo)}`)
console.log(`Costo_Venta del Producto: ${(producto.Costo_Compra)}, que es de tipo: ${typeof(producto.Costo_Compra)}`)
console.log(`Disponible: ${(producto.Disponible)}, que es de tipo: ${typeof(producto.Disponible)}`)
console.log(`SKU: ${(String(producto.SKU))}, que es de tipo: ${typeof(producto.SKU)}`)
console.log(`Colores: ${(producto.Colores)}, que es de tipo: ${typeof(producto.Colores)}`)