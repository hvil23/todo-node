const opts1 = {}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion tareas por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca pendiente o completada la tarea'
    }
}

const argv = require('yargs')
   .command('crear','Crear una tarea por hacer', opts2)
   .command('listar','Listar todas las tareas por hacer', opts1)
   .command('actualizar','Actualiza una tarea', opts2)
   .command('borrar','Borrar una tarea', opts2)
   .help()
   .argv;

module.exports = {
    argv
}