class Producto {
    #nombre
    #precio
    constructor(nombre, precio) {
        this.#nombre = nombre
        this.#precio = precio
        this.disponibilidad = "Disponible"
    }
    getNombre() {
        return this.#nombre
    }
    getPrecio() {
        return this.#precio
    }
    calcularPrecio() {
        return this.#precio
    }
}

class Plato extends Producto {
    calcularPrecio() {
        return super.getPrecio() + 3000
    }
}

class Bebida extends Producto {
    calcularPrecio() {
        return super.getPrecio() + 1000
    }
}

let arregloMenu = []
let arregloPedidos = []
arregloMenu.push(new Plato("salchipapa con pollo", 15000))
arregloMenu.push(new Bebida("cerezada", 7000))

for (let i = 0; i < arregloMenu.length; i++) {
    console.log("Producto: " + arregloMenu[i].getNombre())
    console.log("Precio final: $" + arregloMenu[i].calcularPrecio())
    console.log("Disponibilidad: " + arregloMenu[i].disponibilidad)
    console.log("--------------------")
}

arregloPedidos.push({ mesa: 1, producto: "salchipapa con pollo" })
console.log("Pedidos registrados: " + arregloPedidos.length)

// Verificar precios negativos
let producto = "Hamburguesa"
let precio = -8000
if (precio < 0) {
    console.log("El precio de " + producto + " no puede ser negativo")
} else {
    console.log("Precio válido")
}

// Verificar productos agotados
let nombreProducto = "Pizza"
let disponible = false
if (disponible === false) {
    console.log("El producto " + nombreProducto + " está agotado")
} else {
    console.log("El producto " + nombreProducto + " está disponible")
}

// Verificar cantidades inválidas
let productoPedido = "Jugo"
let cantidad = 0
if (cantidad <= 0) {
    console.log("La cantidad del producto " + productoPedido + " debe ser mayor que cero")
} else {
    console.log("Cantidad válida")
}

// Verificar pedidos vacíos
let pedido = []
if (pedido.length === 0) {
    console.log("No se puede realizar un pedido vacío")
} else {
    console.log("Pedido registrado correctamente")
}

// Verificar productos inexistentes en el menú
let menu = ["Hamburguesa", "Pizza", "Jugo"]
let productoBuscado = "Sushi"

if (menu.includes(productoBuscado) === false) {
    console.log("El producto " + productoBuscado + " no existe en el menú")
} else {
    console.log("Producto encontrado en el menú")
}