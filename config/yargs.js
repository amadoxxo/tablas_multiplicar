const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    },
};



const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar dependiendo el numero', opts)
    .command('crear', 'crea un archivo de la tabla de multiplicar dependiendo el digito', opts)
    .help()
    .argv;


module.exports = {
    argv,
};