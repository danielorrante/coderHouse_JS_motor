
//Es el cotizador tomando en cuenta zonas

let nombreCliente;
let destino;
let pax;
let total = 0;


function motorFormulario() {
    let destino = prompt('Ingrese su destino: Cancun, PDC o Tulum');
    let pax = +prompt ('¿Cuántas personas nos acompañan? 1 a 10');
}

function motorCotizador (destino, pax) {
    if (destino == 'Cancun') {
        let total = pax * $65;
        alert('Su transporte a Cancun tiene un precio de $' + total)
    } else if (destino == 'PDC'){
        let total = pax * $99;
        alert('Su transporte a PDC tiene un precio de $' + total)
    } else if (destino == 'TTulum'){
        let total = pax * $159;
        alert('Su transporte a Tulum tiene un precio de $' + total)
    } 
}

alert ("Bienvenido al Cotizador de transporte");

motorFormulario ();

do {
    alert ("Ingrese un dato válido");
    motorFormulario ();
} while ( ((destino == 'Cancun') || (destino == 'PDC') || (destino == 'TULUM')) && ((pax > 0)|| (pax >= 10))) {
    motorCotizador ();
}

