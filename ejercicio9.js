class Reserva {
    #codigo
    #cliente
    #fecha
    #precio
    constructor(codigo, cliente, fecha, precio) {
        this.#codigo = codigo
        this.#cliente = cliente
        this.#fecha = fecha
        this.#precio = precio
    }
    getCodigo(){
        return this.#codigo
    }
    getCliente(){
        return this.#cliente
    }
    calcularCosto(){
        return this.#precio
    }
    cancelar(){
        return "Reserva cancelada"
    }
}

class ReservaHotel extends Reserva {
    calcularCosto() {
        return super.calcularCosto() + 20000
    }

    cancelar() {
        return "Cancelación de hotel: se cobra una tarifa de $10000"
    }
}

class RecorridoTuristico extends Reserva {
    calcularCosto() {
        return super.calcularCosto() + 10000
    }

    cancelar() {
        return "Recorrido turístico cancelado"
    }
}

let arregloReservas = []

arregloReservas.push(new ReservaHotel("R001", "Maira", "30/10/2026", 100000))
arregloReservas.push(new RecorridoTuristico("R002", "Laura", "31/10/2026", 50000))

for (let i = 0; i < arregloReservas.length; i++) {
    console.log("Código: " + arregloReservas[i].getCodigo())
    console.log("Cliente: " + arregloReservas[i].getCliente())
    console.log("Costo: $" + arregloReservas[i].calcularCosto())
    console.log("--------------------")
}

// Verificar fechas pasadas
let reserva = "RES01"
let fechaReserva = new Date("2020-01-01")
let fechaActual = new Date()

if (fechaReserva < fechaActual) {
    console.log("La reserva " + reserva + " tiene una fecha pasada")
} else {
    console.log("Fecha válida")
}

// Verificar reservas duplicadas
let reservas = ["RES01", "RES02"]
let nuevaReserva = "RES01"
if (reservas.includes(nuevaReserva)) {
    console.log("La reserva " + nuevaReserva + " ya existe")
} else {
    console.log("Reserva registrada correctamente")
}

// Verificar cancelaciones de reservas inexistentes
let codigoReserva = "RES05"
let reservasRegistradas = ["RES01", "RES02"]
let encontrada = false
for (let i = 0; i < reservasRegistradas.length; i++) {
    if (reservasRegistradas[i] === codigoReserva) {
        encontrada = true
    }
}
if (encontrada === false) {
    console.log("La reserva " + codigoReserva + " no existe")
} else {
    console.log("Reserva encontrada")
}

// Verificar falta de capacidad
let hotel = "Hotel Central"
let capacidad = 10
let personasReservadas = 10
if (personasReservadas >= capacidad) {
    console.log("No hay capacidad disponible en " + hotel)
} else {
    console.log("Hay cupos disponibles en " + hotel)
}

// Verificar precios inválidos
let tipoReserva = "Tour turístico"
let precioReserva = -50000
if (precioReserva < 0) {
    console.log("El precio de " + tipoReserva + " no puede ser negativo")
} else {
    console.log("Precio válido")
}
