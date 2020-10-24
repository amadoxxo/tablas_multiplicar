const { crearArchivo, crearLista } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        crearLista(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('El comando escrito no es correcto ');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];