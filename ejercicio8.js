class Servicio {
    #codigo
    #descripcion
    #tarifa
    constructor(codigo, descripcion, tarifa) {
        this.#codigo = codigo
        this.#descripcion = descripcion
        this.#tarifa = tarifa
    }
    getCodigo() {
        return this.#codigo
    }
    getDescripcion() {
        return this.#descripcion
    }
    calcularCosto() {
        return this.#tarifa
    }
}

class Electricidad extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 20000
    }
}

class Plomeria extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 15000
    }
}

class Mantenimiento extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 10000
    }
}

let arregloServicios = []
let arregloOrdenes = []
arregloServicios.push(new Electricidad("E001", "Reparar cable", 50000))
arregloServicios.push(new Plomeria("P001", "Reparar tubería", 40000))
arregloServicios.push(new Mantenimiento("M001", "Arreglo general", 30000))

for (let i = 0; i < arregloServicios.length; i++) {
    console.log("Código: " + arregloServicios[i].getCodigo())
    console.log("Servicio: " + arregloServicios[i].getDescripcion())
    console.log("Costo: $" + arregloServicios[i].calcularCosto())
    console.log("--------------------")
}

arregloOrdenes.push({ codigo: "E001", cliente: "Maira" })
console.log("Órdenes registradas: " + arregloOrdenes.length)


// Verificar tarifas negativas
let servicio = "Electricidad"
let tarifa = -30000
if (tarifa < 0) {
    console.log("La tarifa del servicio " + servicio + " no puede ser negativa")
} else {
    console.log("Tarifa válida")
}
// Verificar órdenes de trabajo sin cliente
let cliente = ""
let orden = "ORD01"

if (cliente === "") {
    console.log("La orden " + orden + " debe tener un cliente")
} else {
    console.log("Orden registrada correctamente")
}
// Verificar servicios inexistentes
let servicios = ["Electricidad", "Plomería", "Mantenimiento"]
let servicioBuscado = "Pintura"

if (servicios.includes(servicioBuscado) === false) {
    console.log("Error: El servicio " + servicioBuscado + " no existe")
} else {
    console.log("Servicio encontrado")
}
// Verificar órdenes duplicadas
let ordenes = ["ORD01", "ORD02"]
let nuevaOrden = "ORD01"

if (ordenes.includes(nuevaOrden)) {
    console.log("La orden " + nuevaOrden + " ya existe")
} else {
    console.log("Orden registrada correctamente")
}
