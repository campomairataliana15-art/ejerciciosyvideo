class Empleado {
    #identificacion
    #nombre
    #remuneracion
    constructor(identificacion, nombre, remuneracion) {
        this.#identificacion = identificacion
        this.#nombre = nombre
        this.#remuneracion = remuneracion
    }
    getIdentificacion() {
        return this.#identificacion
    }
    getNombre() {
        return this.#nombre
    }
    calcularPago() {
        return this.#remuneracion
    }
}

class EmpleadoPlanta extends Empleado {
    calcularPago() {
        return super.calcularPago() + 200000
    }
}

class Contratista extends Empleado {
    calcularPago() {
        return super.calcularPago() - 100000
    }
}

let arregloEmpleados = []
arregloEmpleados.push(new EmpleadoPlanta("101", "Sofia", 1500000))
arregloEmpleados.push(new Contratista("102", "Marta", 2000000))

for (let i = 0; i < arregloEmpleados.length; i++) {
    console.log("Identificación: " + arregloEmpleados[i].getIdentificacion())
    console.log("Nombre: " + arregloEmpleados[i].getNombre())
    console.log("Pago: $" + arregloEmpleados[i].calcularPago())
    console.log("--------------------")
}

// Verificar que el salario no sea negativo
let salario = -100000

if (salario < 0) {
    console.log("Error: El salario no puede ser negativo")
} else {
    console.log("Salario válido")
}


// Verificar que la tarifa del contratista sea válida
let tarifa = -5000

if (tarifa < 0) {
    console.log("Error: La tarifa no puede ser negativa")
} else {
    console.log("Tarifa válida")
}

// Verificar que no se repita la identificación
let empleados = ["EMP01", "EMP02"]
let nuevoEmpleado = "EMP01"

if (empleados.includes(nuevoEmpleado)) {
    console.log("Error: El empleado ya está registrado")
} else {
    console.log("Empleado registrado correctamente")
}

// Verificar que se ingresen los datos necesarios
let nombre = ""
let identificacion = "EMP03"

if (nombre === "" || identificacion === "") {
    console.log("Error: Faltan datos del empleado")
} else {
    console.log("Datos completos")
}

// Verificar que el pago calculado sea correcto
let pagoCalculado = 800000
let pagoEsperado = 1000000

if (pagoCalculado !== pagoEsperado) {
    console.log("Error: El cálculo de la nómina es incorrecto")
} else {
    console.log("Cálculo de nómina correcto")
}