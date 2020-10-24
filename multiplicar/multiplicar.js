//requireds
const fs = require('fs');
const colors = require('colors');

let crearLista = (base, limite = 10) => {

    console.log('===================================================='.green);
    console.log(`La tabla de multiplicar del ${base} al ${limite} ha sido creada`.green);
    console.log('===================================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.bgGrey);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El dato insertado ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    crearLista,
};