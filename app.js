//const { require } = require('yargs');
const porHacer = require('./por-hacer/por-hacer');
const argv = require('./CONFIG/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listarTareas = porHacer.getListado();
        console.log('============tareas por hacer============================'.green);
        for (let tarea of listarTareas) {

            console.log(tarea);

        }
        console.log('========================================================'.green);
        //console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.Actualiza(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let elimina = porHacer.Elimina(argv.descripcion);
        console.log(elimina);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}