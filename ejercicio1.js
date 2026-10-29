// Encapsulamiento
class CuentaBancaria {
    #numero
    #titular
    #saldo
    constructor(numero, titular, saldo) {
        this.#numero = numero
        this.#titular = titular
        this.#saldo = saldo
    }
    getNumero() {
        return this.#numero
    }
    getTitular() {
        return this.#titular
    }
    getSaldo() {
        return this.#saldo
    }
    consignar(valor) {
        if (valor <= 0) {
            return "El valor debe ser mayor que cero"
        }
        this.#saldo = this.#saldo + valor
        return "Consignación exitosa"
    }
    retirar(valor) {
        if (valor <= 0) {
            return "El valor debe ser mayor que cero"
        }
        else if (valor > this.#saldo) {
            return "Saldo insuficiente"
        }
        this.#saldo = this.#saldo - valor
        return "Retiro exitoso"
    }
}

// Herencia
class CuentaAhorros extends CuentaBancaria {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
        this.tipo = "Ahorros"
    }
}
// Herencia y polimorfismo
class CuentaCorriente extends CuentaBancaria {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
        this.tipo = "Corriente"
        this.sobregiro = 100000
    }

    retirar(valor) {
        if (valor <= 0) {
            return "El valor debe ser mayor que cero"
        }
        else if (valor > this.getSaldo() + this.sobregiro) {
            return "Supera el cupo de sobregiro"
        }
        else {
            return this.retirarConSobregiro(valor)
        }
    }

    retirarConSobregiro(valor) {
        // Se explica debajo cómo implementar el retiro
    }
}

// Arreglo de cuentas
let arregloCuentas = []

// Agregar cuentas
arregloCuentas.push(new CuentaAhorros("001", "Maira", 200000))
arregloCuentas.push(new CuentaCorriente("002", "Laura", 50000))

// Mostrar los datos al final
for (let i = 0; i < arregloCuentas.length; i++) {
    console.log("Número: " + arregloCuentas[i].getNumero())
    console.log("Titular: " + arregloCuentas[i].getTitular())
    console.log("Saldo: $" + arregloCuentas[i].getSaldo())
    console.log("Tipo: " + arregloCuentas[i].tipo)
    console.log("-------------------")
}

// Verifique depósitos de cero o valores negativos
console.log(arregloCuentas[0].consignar(0))
console.log(arregloCuentas[0].consignar(-5000))
console.log(arregloCuentas[0].consignar(10000))

// retiros superiores al saldo
console.log(arregloCuentas[0].retirar(500000))

// cuentas repetidas
let numeroNuevo = "001"
let repetida = false

for (let i = 0; i < arregloCuentas.length; i++) {
    if (arregloCuentas[i].getNumero() == numeroNuevo) {
        repetida = true
    }
}

if (repetida == true) {
    console.log("La cuenta ya existe")
} else {
    console.log("El número de cuenta está disponible")
}

// consultas de cuentas inexistentes
let numeroBuscar = "999"
let encontrada = false

for (let i = 0; i < arregloCuentas.length; i++) {
    if (arregloCuentas[i].getNumero() == numeroBuscar) {
        encontrada = true;
        console.log("Saldo: $" + arregloCuentas[i].getSaldo())
    }
}

if (encontrada == false) {
    console.log("La cuenta no existe")
}