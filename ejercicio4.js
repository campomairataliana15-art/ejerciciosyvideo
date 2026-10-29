class Profesional {
    #identificacion
    #nombre
    constructor(identificacion, nombre) {
        this.#identificacion = identificacion
        this.#nombre = nombre
        this.disponibilidad = "Disponible"
    }
    getIdentificacion() {
        return this.#identificacion
    }
    getNombre() {
        return this.#nombre
    }
    calcularDuracion() {
        return 20
    }
}

class MedicinaGeneral extends Profesional {
    calcularDuracion() {
        return 20
    }
}

class Especialista extends Profesional {
    calcularDuracion() {
        return 40
    }
}

let arregloProfesionales = []
let arregloCitas = []

arregloProfesionales.push(new MedicinaGeneral("101", "Laura"))
arregloProfesionales.push(new Especialista("102", "Carlos"))

for (let i = 0; i < arregloProfesionales.length; i++) {
    console.log("Identificación: " + arregloProfesionales[i].getIdentificacion())
    console.log("Profesional: " + arregloProfesionales[i].getNombre())
    console.log("Duración: " + arregloProfesionales[i].calcularDuracion() + " minutos")
    console.log("Disponibilidad: " + arregloProfesionales[i].disponibilidad)
    console.log("--------------------")
}

arregloCitas.push({ profesional: "101", hora: "9:00 AM" })
console.log("Citas registradas: " + arregloCitas.length)

// Verificar que el horario no esté ocupado
let horarios = ["08:00", "09:00", "10:00"]
let nuevaHora = "09:00"
let ocupado = false

for (let i = 0; i < horarios.length; i++) {
    if (horarios[i] === nuevaHora) {
        ocupado = true
    }
}

if (ocupado) {
    console.log("Error: El horario ya está ocupado")
} else {
    console.log("Horario disponible")
}


// Verificar que la fecha tenga un valor válido
let fecha = ""

if (fecha === "") {
    console.log("Error: Debe ingresar una fecha para la cita")
} else {
    console.log("Fecha registrada")
}

// Verificar que el profesional exista
let profesionales = ["MED01", "MED02"]
let profesionalBuscado = "MED05"
let encontrado = false

for (let i = 0; i < profesionales.length; i++) {
    if (profesionales[i] === profesionalBuscado) {
        encontrado = true
    }
}

if (encontrado === false) {
    console.log("Error: El profesional no existe")
}

// Verificar que no se repita el código del profesional
let codigos = ["MED01", "MED02"]
let nuevoCodigo = "MED01"

if (codigos.includes(nuevoCodigo)) {
    console.log("Error: El profesional ya está registrado")
} else {
    console.log("Registro correcto")
}