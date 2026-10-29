class Vehiculo {
    #identificador
    #capacidad

    constructor(identificador, capacidad) {
        this.#identificador = identificador
        this.#capacidad = capacidad
        this.estado = "Disponible"
    }

    getIdentificador() {
        return this.#identificador
    }

    getCapacidad() {
        return this.#capacidad
    }

    calcularCosto(distancia) {
        return distancia * 1000
    }
}

class Automovil extends Vehiculo {
    calcularCosto(distancia) {
        return distancia * 3000
    }
}

class Motocicleta extends Vehiculo {
    calcularCosto(distancia) {
        return distancia * 1500
    }
}

class Bicicleta extends Vehiculo {
    calcularCosto(distancia) {
        return distancia * 500
    }
}

// Arreglos
let arregloVehiculos = []
let arregloViajes = []

// Registrar vehículos
arregloVehiculos.push(new Automovil("A001", 4))
arregloVehiculos.push(new Motocicleta("M001", 2))
arregloVehiculos.push(new Bicicleta("B001", 1))

// Mostrar vehículos
for (let i = 0; i < arregloVehiculos.length; i++) {
    console.log("Identificador: " + arregloVehiculos[i].getIdentificador())
    console.log("Capacidad: " + arregloVehiculos[i].getCapacidad())
    console.log("Estado: " + arregloVehiculos[i].estado)
    console.log("Costo de viaje de 10 km: $" + arregloVehiculos[i].calcularCosto(10))
    console.log("--------------------")
}

// Registrar un viaje
arregloViajes.push({
    identificador: "V001",
    distancia: 10,
    costo: arregloVehiculos[0].calcularCosto(10)
})

console.log("Viajes registrados: " + arregloViajes.length)

// Verifique capacidades inválidas
console.log("PRUEBA 1: Capacidad inválida")
let capacidad = 0

if (capacidad <= 0) {
    console.log("Error: la capacidad debe ser mayor que cero")
} else {
    console.log("Capacidad válida")
}

// identificadores repetidos
console.log("PRUEBA 2: Identificador repetido")

let identificadorNuevo = "A01"
let repetido = false

for (let i = 0; i < arregloVehiculos.length; i++) {
    if (arregloVehiculos[i].getIdentificador() == identificadorNuevo) {
        repetido = true
    }
}

if (repetido == true) {
    console.log("Error: el vehículo ya existe")
} else {
    console.log("Identificador disponible")
}

// Verificar que el vehículo esté disponible
let estadoVehiculo = "Ocupado"

if (estadoVehiculo === "Ocupado") {
    console.log("Error: No se puede asignar el viaje porque el vehículo está ocupado")
} else {
    console.log("Viaje asignado correctamente")
}


// Verificar que el costo del viaje no sea negativo
let costo = -20000

if (costo < 0) {
    console.log("Error: El costo del viaje no puede ser negativo")
} else {
    console.log("Costo válido")
}



