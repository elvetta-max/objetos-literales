
/***
 *EJERCICIO 1
 */

console.log("================ EJERCICIO 1 ================")

let persona = {
    nombre: "Pedro",
    edad: 26,
    ciudad: "Bilbao"
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

/***
 *EJERCICIO 2
 */

console.log("================ EJERCICIO 2 ================")

persona.ciudad = "Vitoria Gasteiz";
persona.profesion = "barbero";

console.log(`El objeto persona actualizado: `)
console.log(persona)




/***
 *EJERCICIO 3
 */

console.log("================ EJERCICIO 3 ================")

let libro = {
    autor: "The Bridge",
    titulo: "Javascript PRO-Tips",
    anioPublicacion: 2001,
    resumen: function () {

        let resumen = `El libro ${this.titulo} fue escrito por ${this.autor}  en ${this.anioPublicacion}.`
        console.log(resumen)
    }
}
libro.resumen();

/***
 *EJERCICIO 4
 */

console.log("================ EJERCICIO 4 ================")

let estudiantes = [
    {
        nombre: "ana",
        edad: 16,
        notaFinal: 8
    },
    {
        nombre: "sara",
        edad: 15,
        notaFinal: 5
    },
    {
        nombre: "laura",
        edad: 14,
        notaFinal: 7
    }
]
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre}  nota: ${estudiante.notaFinal} /10`)
});

/***
 *EJERCICIO 5
 */

console.log("================ EJERCICIO 5 ================")
let personaa = {
    nombre: "juan",
    anioNacimiento: 2001,
    calcularEdad: function () {
        let edad = new Date().getFullYear() - this.anioNacimiento

        console.log(`${this.nombre} nacio en ${this.anioNacimiento} tiene  ${edad} años`)
    }
}
personaa.calcularEdad();

/***
 *EJERCICIO 6
Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual.
 Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro 
 método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que 
 la velocidad no sea negativa.
 */

console.log("================ EJERCICIO 6 ================")

let coche = {
    marca: "BMW",
    modelo: "320d",
    anio: 2003,
    velocidadActual: 23,
    acelerar: function () {
        nuevaVelocidad = this.velocidadActual += 10;
        console.log(`Accelerando => ${nuevaVelocidad} Km/h`);
    },
    frenar: function () {

        nuevaVelocidad = this.velocidadActual -= 10;

        if (nuevaVelocidad <= 0) {
            this.velocidadActual = 0;
            console.log(`Frenando => El coche ya esta parado`);
        } else {
            console.log(`Frenando => ${nuevaVelocidad} Km/h`);
        }

    },
}
console.log(`Velocidad coche : ${coche.velocidadActual}Km/h`)
coche.acelerar();
coche.frenar();
coche.frenar();
coche.frenar();
coche.frenar();
coche.acelerar();


/***
 *EJERCICIO 7

 Crea un objeto producto con las propiedades nombre, precio, cantidad.
 Usa un ciclo for...in para imprimir todas las propiedades y sus valores.
 */

console.log("================ EJERCICIO 7 ================")

let producto = {
    nombre: "Pantalon corto",
    precio: 19,
    cantidad: 120
}
for (llave in producto) {
    console.log(`${llave} : ${producto[llave]}`);
}

/***
 *EJERCICIO 8

Crea un objeto animal con al menos cinco propiedades.
Luego, escribe una función que cuente y devuelva el número de propiedades
 que tiene el objeto.
 */

console.log("================ EJERCICIO 8 ================")
let animal = {
    nombre: "tito",
    tipo: "perro",
    edad: 6,
    peso: 4,
    color: "marron",
    salvaje: false,
    cuente: function () {
        console.log(animal)
        let numeroPropriedades = 0;
        for (propriedad in animal) {
            numeroPropriedades += 1;
        }
        console.log(`Numero de propriedades que tiene el objeto : ${numeroPropriedades} propriedades`)
    }
}

animal.cuente();

/***
 *EJERCICIO 9
Crea un objeto empresa que tenga las propiedades nombre y direccion.
La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal.
Luego, accede a las propiedades del objeto anidado e imprímelas.
 */

console.log("================ EJERCICIO 9 ================")

let empresa = {
    nombre: "The Bridge",
    direccion: {
        calle: "Florida",
        ciudad: "Vitoria-Gasteiz",
        codigoPostal: 20192
    }

}
console.log(`Nombre de empresa : ${empresa.nombre}`);
console.log(`Direccion : calle ${empresa.direccion.calle} ${empresa.direccion.ciudad}, codigo postal : ${empresa.direccion.codigoPostal}`);

/***
 *EJERCICIO 10
Crea un objeto cuentaBancaria con las propiedades titular, saldo.
Añade métodos depositar y retirar que modifiquen el saldo según sea necesario.
El método retirar debe asegurarse de que no se pueda 
retirar más dinero del que hay disponible.
 */

console.log("================ EJERCICIO 10 ================")

let cuentaBancaria = {
    titular: "Sara rodriguez",
    saldo: 1000,
    depositar: function (cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad
            console.log(`Has depositado ++${cantidad}$, tu saldo actual:  ${this.saldo}$`)
        }
    },
    retirar: function (cantidad) {

        if (this.saldo === 0 || cantidad <= 0) {
            console.log(`Operacion Rechazada; tu saldo actual: ${this.saldo}$`)
        }
        else if (cantidad > this.saldo) {
            console.log(`Operacion Rechazada; No puede retirar mas de : ${this.saldo}$`)
        } else {
            this.saldo -= cantidad;
            console.log(`Has tirado -${cantidad}$, tu saldo actual: ${this.saldo}$`)
        }
    }
}
console.log(`Saldo Inicial: ${cuentaBancaria.saldo}$`);
cuentaBancaria.retirar(500);
cuentaBancaria.retirar(300);
cuentaBancaria.retirar(300);
cuentaBancaria.retirar(200);
cuentaBancaria.retirar(20);
cuentaBancaria.depositar(150);
cuentaBancaria.retirar(-20);