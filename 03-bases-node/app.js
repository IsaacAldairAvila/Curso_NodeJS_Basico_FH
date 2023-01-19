const argv = require('./config/yargs')
const { multiplicar } = require('./helpers/multiplicar');
const colors = require('colors/safe');

console.clear();

multiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo, 'creado')))
    .catch(err => console.log(err))
