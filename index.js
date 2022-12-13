//Cree un array vacío para luego, mediante prompts, realizar la entrada de datos y crear los objetos necesarios junto con sus claves y valores.

let amigos = []

let cantidadPersonas = prompt("Ingresa la cantidad de amigos entre los cuales se dividirá el gasto.")

for (let i = 0; i < cantidadPersonas; i++) {
    amigos[i] = new Object();
}

for (let i = 0; i < cantidadPersonas; i++) {
    amigos[i].nombre = prompt("Ingresa tu nombre o el de tu amigo");
}

for (let i = 0; i < cantidadPersonas; i++) {
    amigos[i].monto = Number(prompt("Ingresa los montos de cada amigo"));
}

//Mediante el método de Array Reduce() sumé los montos de cada usuario.

let sumaMontos = amigos.reduce((accumulator, obj) =>
    obj.monto += accumulator, 0)

// Cree la función montosDivididos() para dividir la suma de los montos de la función anterior por la cantidad de personas.

let montosDivididos = () => {
    return sumaMontos / cantidadPersonas;
}

//Con un bucle realicé la salida de los datos procesados, los cuales son mostrados mediante console.log().

for (let i = 0; i < cantidadPersonas; i++) {
    console.log(`La suma de los montos es ${sumaMontos}, ${amigos[i].nombre} debería poner $${montosDivididos()}`)
}

// Mediante una estructura condicional que compara los valores de la función montosDivididos() con los parametros que seleccioné para el sistema de puntos, logré retornar la cantidad de puntos obtenidos por cada usuario mediante un console.log().

if (montosDivididos() > 0 && (montosDivididos()) <= 500) {
    console.log(`Cada uno sumó 100 puntos. Sigan sumando y obtené grandes beneficios.`)
}
else if (montosDivididos() > 500 && (montosDivididos()) <= 1000) {
    console.log(`Cada uno sumó 500 puntos. Sigan sumando y obtené grandes beneficios.`)
}
else if (montosDivididos() > 1000 && (montosDivididos()) <= 1500) {
    console.log(`Cada uno sumó 1000 puntos. Sigan sumando y obtené grandes beneficios.`)
}
else if (montosDivididos() > 1500) {
    console.log(`Cada uno sumó 1500 puntos. Sigan sumando y obtendrán grandes beneficios.`)
}
else {
    console.log(`Error: Los valores no son los correctos.`)
}