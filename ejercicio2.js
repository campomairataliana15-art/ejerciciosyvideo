class Producto {
    #identificador
    #nombre
    #precio
    constructor(identificador, nombre, precio, cantidad) {
        this.#identificador = identificador
        this.#nombre = nombre
        this.#precio = precio
        this.cantidad = cantidad
    }
    // Encapsulacion
    getIdentificador() {
        return this.#identificador
    }
    getNombre() {
        return this.#nombre
    }
    getPrecio() {
        return this.#precio
    }
    // Calcular el costo sin envio
    calcularTotal() {
        return this.#precio * this.cantidad
    }
}
// Herencia: producto fisico
class ProductoFisico extends Producto {
    constructor(identificador, nombre, precio, cantidad) {
        super(identificador, nombre, precio, cantidad)
        this.tipo = "Fisico"
    }
    // Polimorfismo: agrega el costo del envio
    calcularTotal() {
        return super.calcularTotal() + (2000 * this.cantidad)
    }
}

// Herencia: producto digital
class ProductoDigital extends Producto {
    constructor(identificador, nombre, precio, cantidad) {
        super(identificador, nombre, precio, cantidad)
        this.tipo = "Digital"
    }
    calcularTotal() {
        return super.calcularTotal()
    }
}

// Arreglo para guardar los productos
let arregloProductos = []

// Agregar producto al carrito
function agregarProducto() {
    let identificador = document.getElementById("identificador").value
    let nombre = document.getElementById("nombre").value
    let precioTexto = document.getElementById("precio").value
    let cantidadTexto = document.getElementById("cantidad").value

    let precio = Number(precioTexto)
    let cantidad = Number(cantidadTexto)

    let tipo = document.getElementById("tipo").value
    let mensaje = document.getElementById("mensaje")

    // Validar campos vacios
    if (identificador === "" || nombre === "" ||
        precioTexto === "" || cantidadTexto === "") {
        mensaje.innerHTML = "Complete todos los campos"
    }

    // Validar precio negativo
    else 
    if (precio < 0) {
        mensaje.innerHTML = "El precio no puede ser negativo"
    }

    // Validar cantidad en cero o negativa
    else 
    if (cantidad <= 0) {
        mensaje.innerHTML = "La cantidad debe ser mayor que cero"
    }

    // Validar que la cantidad sea entera
    else if (cantidad % 1 !== 0) {
        mensaje.innerHTML = "La cantidad debe ser un numero entero"
    }

    else {
        let repetido = false

        // Verificar si el identificador ya existe
        for (let i = 0; i < arregloProductos.length; i++) {
            if (arregloProductos[i].getIdentificador() === identificador) {
                repetido = true
            }
        }

        if (repetido === true) {
            mensaje.innerHTML = "Ya existe un producto con ese identificador"
        }

        else {
            if (tipo === "Fisico") {
                arregloProductos.push(
                    new ProductoFisico(identificador, nombre, precio, cantidad)
                )
            }
            else {
                arregloProductos.push(
                    new ProductoDigital(identificador, nombre, precio, cantidad)
                )
            }

            mensaje.innerHTML = "Producto agregado correctamente"

            // Limpiar los campos
            document.getElementById("identificador").value = ""
            document.getElementById("nombre").value = ""
            document.getElementById("precio").value = ""
            document.getElementById("cantidad").value = ""

            mostrarCarrito()
        }
    }
}

// Mostrar productos y calcular el total
function mostrarCarrito() {
    let tabla = document.getElementById("tabla")
    let total = 0

    tabla.innerHTML = ""

    for (let i = 0; i < arregloProductos.length; i++) {
        let producto = arregloProductos[i]
        let subtotal = producto.calcularTotal()

        total = total + subtotal

        tabla.innerHTML = tabla.innerHTML + `
            <tr>
                <td>${producto.getIdentificador()}</td>
                <td>${producto.getNombre()}</td>
                <td>${producto.tipo}</td>
                <td>$${producto.getPrecio()}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal}</td>
                <td>
                    <button onclick="quitarProducto('${producto.getIdentificador()}')">
                        Quitar
                    </button>
                </td>
            </tr>
        `
    }

    document.getElementById("total").innerHTML = "Total: $" + total

    return total
}

// Quitar un producto del carrito
function quitarProducto(identificador) {
    let encontrado = false
    let mensaje = document.getElementById("mensaje")

    for (let i = 0; i < arregloProductos.length; i++) {
        if (arregloProductos[i].getIdentificador() === identificador) {
            arregloProductos.splice(i, 1)
            encontrado = true
            break
        }
    }

    if (encontrado === true) {
        mensaje.innerHTML = "Producto eliminado correctamente"
        mostrarCarrito()
    }
    else {
        mensaje.innerHTML = "El producto que intenta eliminar no existe"
    }
}

// Verificar si el total calculado es correcto
function verificarTotal(totalEsperado) {
    let totalCalculado = mostrarCarrito()

    if (totalCalculado === totalEsperado) {
        document.getElementById("mensaje").innerHTML = "El total es correcto"
    }
    else {
        document.getElementById("mensaje").innerHTML = "Error en el total. Esperado: $" + totalEsperado + " - Calculado: $" + totalCalculado
    }
}

