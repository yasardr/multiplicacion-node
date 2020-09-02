/*
Realiza una tabla de multiplicar de acuerdo a la base introducida y 
se planea guardarlo en un archivo haciendo uso de File System de Node
...*/
const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);
/*let argv2 = process.argv;
let parametro = argv2[2];
let base = parametro.split('=')[1];*/