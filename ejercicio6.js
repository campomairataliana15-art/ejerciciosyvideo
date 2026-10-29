class Recurso {
    #codigo
    #titulo
    constructor(codigo, titulo) {
        this.#codigo = codigo
        this.#titulo = titulo
        this.disponibilidad = "Disponible"
    }
    getCodigo() {
        return this.#codigo
    }
    getTitulo() {
        return this.#titulo
    }
    prestar() {
        this.disponibilidad = "Prestado"
    }
    devolver() {
        this.disponibilidad = "Disponible"
    }
    calcularPlazo() {
        return 7
    }
}

class LibroImpreso extends Recurso {
    calcularPlazo() {
        return 14
    }
}

class RecursoDigital extends Recurso {
    calcularPlazo() {
        return 7
    }
}

let arregloRecursos = []
let arregloPrestamos = []

arregloRecursos.push(new LibroImpreso("L001", "Cien años de soledad"))
arregloRecursos.push(new RecursoDigital("D001", "Curso de JavaScript"))

for (let i = 0; i < arregloRecursos.length; i++) {
    console.log("Código: " + arregloRecursos[i].getCodigo())
    console.log("Título: " + arregloRecursos[i].getTitulo())
    console.log("Disponibilidad: " + arregloRecursos[i].disponibilidad)
    console.log("Plazo: " + arregloRecursos[i].calcularPlazo() + " días")
    console.log("--------------------")
}

arregloRecursos[0].prestar()
arregloPrestamos.push({ codigo: "L001" })

console.log("Préstamos registrados: " + arregloPrestamos.length)


// Verificar que el libro esté disponible
let disponible = true

if (disponible === false) {
    console.log("Error: El recurso no está disponible para préstamo")
} else {
    console.log("Recurso disponible")
}

// Verificar que el recurso tenga un préstamo registrado
let prestado = false

if (prestado === false) {
    console.log("No existe un préstamo para realizar la devolución")
} else {
    console.log("Devolución realizada correctamente")
}

// Verificar que no se repita el código del libro
let libros = ["LIB01", "LIB02"]
let nuevoLibro = "LIB01"

if (libros.includes(nuevoLibro)) {
    console.log("El código del libro ya existe")
} else {
    console.log("Libro registrado correctamente")
}

// Verificar que el libro buscado exista
let tituloBuscado = "Matemáticas"
let titulos = ["Historia", "Ciencias", "Literatura"]
let encontrado = false

for (let i = 0; i < titulos.length; i++) {
    if (titulos[i] === tituloBuscado) {
        encontrado = true
    }
}

if (encontrado === false) {
    console.log("No se encontraron resultados")
}