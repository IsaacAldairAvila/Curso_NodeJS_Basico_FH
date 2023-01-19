const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de multiplicar'
    })
    .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Lista la tabla de multiplicar'
    }
    )
    .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta donde listar'
    }
    )
    .check(
        (argv, options) => {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un número'
            }
            return true
        }
    )
    .argv

module.exports = argv