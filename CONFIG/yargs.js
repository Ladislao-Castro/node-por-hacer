const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualzia el estado completado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marcar como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra un tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}