class Mascota {
    #identificador
    #nombre
    edad
    constructor(identificador, nombre, edad) {
        this.#identificador = identificador
        this.#nombre = nombre
        this.edad = edad
        this.estado = "Disponible para adopción"
    }
    getIdentificador() {
        return this.#identificador
    }
    getNombre() {
        return this.#nombre
    }
    getEdad() {
        return this.edad
    }
    cuidados() {
        return "Necesita alimentación y atención"
    }
}

class Perro extends Mascota {
    cuidados() {
        return "Necesita paseos y alimentación"
    }
}

class Gato extends Mascota {
    cuidados() {
        return "Necesita higiene y alimentación"
    }
}

let arregloMascotas = []
let arregloSolicitudes = []
arregloMascotas.push(new Perro("P001", "Max", 3))
arregloMascotas.push(new Gato("G001", "Michi", 2))

for (let i = 0; i < arregloMascotas.length; i++) {
    console.log("Identificador: " + arregloMascotas[i].getIdentificador())
    console.log("Nombre: " + arregloMascotas[i].getNombre())
    console.log("Edad: " + arregloMascotas[i].getEdad())
    console.log("Cuidados: " + arregloMascotas[i].cuidados())
    console.log("Estado: " + arregloMascotas[i].estado)
    console.log("--------------------")
}

arregloSolicitudes.push({ mascota: "P001", solicitante: "Maira" })
console.log("Solicitudes registradas: " + arregloSolicitudes.length)


// Verificar edades inválidas
let mascota = "Max"
let edad = -2
if (edad < 0) {
    console.log("La edad de " + mascota + " no puede ser negativa")
} else {
    console.log("Edad válida")
}

// Verificar identificaciones duplicadas
let mascotas = ["MAS01", "MAS02"]
let nuevaMascota = "MAS01"
if (mascotas.includes(nuevaMascota)) {
    console.log("La mascota con código " + nuevaMascota + " ya está registrada")
} else {
    console.log("Mascota registrada correctamente")
}

// Verificar mascotas que ya fueron adoptadas
let nombreMascota = "Max"
let estadoAdopcion = "Adoptada"
if (estadoAdopcion === "Adoptada") {
    console.log("La mascota " + nombreMascota + " ya fue adoptada")
} else {
    console.log("La mascota está disponible para adopción")
}

// Verificar solicitudes de mascotas inexistentes
let mascotasRegistradas = ["MAS01", "MAS02"]
let mascotaSolicitada = "MAS05"
if (mascotasRegistradas.includes(mascotaSolicitada) === false) {
    console.log("La mascota con código " + mascotaSolicitada + " no existe")
} else {
    console.log("Solicitud registrada correctamente")
}