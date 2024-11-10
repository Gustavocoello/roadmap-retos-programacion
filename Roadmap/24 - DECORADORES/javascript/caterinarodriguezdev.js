/*
 * EJERCICIO:
 * Explora el concepto de "decorador" y muestra cómo crearlo
 * con un ejemplo genérico.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un decorador que sea capaz de contabilizar cuántas veces
 * se ha llamado a una función y aplícalo a una función de tu elección.
 */

/*  
Esta es la propuesta de decoradores de Javascript, aún en stage 3
function logger(value, context) {
    console.log(value, context);
}

@logger
class Persona {

    altura = 1.75;

    @logger
    getAltura() {
        return this.altura;
    }
} 
*/

// Implementación del Patrón Decorador sin sintaxis de decorador

function logger(metodo) {

    return function (...arg) {
    
        let result = metodo.apply(this, ...arg);
        console.log('El decorador se ha ejecutado');

        return result;
    };
}

class Persona {

    altura = 1.75;

    getAltura() {
        console.log('Altura', this.altura);
        return this.altura;
    }
}

p1 = new Persona();

p1.getAltura = logger(p1.getAltura);
p1.getAltura();