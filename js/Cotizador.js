
//Es el cotizador tomando en cuenta zonas

let nombreCliente;
let destino;
let pax;
let total;
let ticket; 

function motorFormulario() {
    do {
        destino = prompt('Ingrese su destino: Cancun, PDC o Tulum');
        while ((destino != 'Cancun') && (destino != 'PDC') && (destino != 'Tulum')) {
            destino = prompt('Ingrese BIEN su destino: Cancun, PDC o Tulum');
        }
        pax = +prompt ('¿Cuántas personas nos acompañan? 1 a 10');
        while ((pax < 1) && (pax > 11)) {
        pax = +prompt('Ingrese Solamente de 1 a 10');
        }
    } while ((pax < 1) && (pax > 11));
}

function motorCotizador() {
    if (destino == 'Cancun') {
        return total = 15 * pax;
    } else if (destino == 'PDC') {
        return total = 25 * pax;
    } else {
        return total = 35 * pax;
    }
}


nombreCliente = prompt ('Bienvenido al Cotizador de transporte \n Ingrese su nombre: ');

motorFormulario();
motorCotizador();

alert ('Hola ' + nombreCliente + ', el precio por el transporte a ' + destino + ' para ' + pax + ' personas, es de $' + total + '\n Te pediría datos para confirmar pero estoy al límite :)');

/*do {
    destino = prompt('Ingrese su destino: Cancun, PDC o Tulum');
    while ((destino !== 'Cancun') && (destino !== 'PDC') && (destino !== 'TULUM')) {
        destino = prompt('Ingrese BIEN su destino: Cancun, PDC o Tulum');
    }
    pax = +prompt ('¿Cuántas personas nos acompañan? 1 a 10');
    while ((pax < 1) && (pax >= 10)) {
        pax = +prompt('Ingrese Solamente de 1 a 10');
    }
    nextStep = si
} while (nextStep == SI)



function motorCotizador (destino, pax) {
    if (destino == 'Cancun') {
        let total = pax * 65;
        alert('Su transporte a Cancun tiene un precio de $' + total)
    } else if (destino == 'PDC'){
        let total = pax * 99;
        alert('Su transporte a PDC tiene un precio de $' + total)
    } else if (destino == 'TTulum'){
        let total = pax * 159;
        alert('Su transporte a Tulum tiene un precio de $' + total)
    } 
} */