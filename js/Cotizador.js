
//Es el cotizador tomando en cuenta zonas

let nombreCliente;
let apellidoCliente;
let correoCliente;
let telefonoCliente;
let destino;
let pax;
let precio;
let total;
let ticket;
let nextStep;

const destinoPrecio = {
    Cancun: 15,
    PDC: 25,
    Tulum: 35
}

const datosCliente = {
    nombreCliente: '',
    apellidoCliente: '',
    correoCliente: '',
    telefonoCliente: ''
}

const cliente = [];

function motorFormulario() {
    do {
        destino = prompt('Ingrese su destino: Cancun, PDC o Tulum');
        while ((destino != 'Cancun') && (destino != 'PDC') && (destino != 'Tulum')) {
            destino = prompt('Ingrese BIEN su destino: Cancun, PDC o Tulum');
        }
        pax = +prompt ('¿Cuántas personas nos acompañan? 1 a 10');
        while ((pax < 1) || (pax > 10)) {
        pax = +prompt('Ingrese Solamente de 1 a 10');
        }
    } while ((pax < 1) || (pax > 10));
}

function motorCotizador(destino, pax) {
    return total = pax * destinoPrecio[destino];
}

function controlCotizador() {
    do {
        nextStep = prompt (`¡Hola!, el precio por el transporte a ${destino} para ${pax} personas, es de $ ${total} USD. \n ¿Desea continuar con la reserva? Contesta si o no`);
        while ((nextStep != 'si') && (nextStep != 'no')) {
            nextStep = prompt ('Conteste si o no');
        }
    } while ((nextStep != 'si') && (nextStep != 'no'));
}

function carritoCotizador() {
    datosCliente.nombreCliente = prompt ('Empecemos la reserva, Ingrese su nombre: ');
    datosCliente.apellidoCliente = prompt ('Ingrese su apellido: ');
    datosCliente.correoCliente = prompt ('Su correo electrónico: ');
    datosCliente.telefonoCliente = prompt ('Teléfono: ');
    cliente.push(new Cliente(datosCliente));
}

function checkoutConfirmation() {

}


alert ('Bienvenido al Cotizador de transporte');
motorFormulario();
motorCotizador(destino, pax);
console.log (`El total es ${total}`);

controlCotizador();

if (nextStep == 'no') {
    alert ('Pues bye');
    location.reload(true);
} else {
    carritoCotizador();
    alert (`Su transporte a ${destino} para ${pax} personas está reservado a nombre de ${datosCliente.nombreCliente} ${datosCliente.apellidoCliente} , y se ha enviado al correo ${datosCliente.correoCliente}. Recuerde su pago de ${total} USD.`);
}



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