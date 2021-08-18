require('colors')

const joinWith = (entries, glue='\n') => {
    return entries.join(glue)
}

const createHeading = (text, decorator='=') => {
    const spacing = 3
    const totalSize = text.length + (spacing * 2)
    const decoratorPart = decorator.repeat(totalSize).green
    const spacingPart = " ".repeat(spacing)

    return joinWith([
        decoratorPart,
        `${spacingPart}${text}${spacingPart}`.green,
        decoratorPart,
    ])
}

const createPause = () => {
    const rl = require('readline')
    const interface = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    interface.question(`\nClick ${'Enter'.bgBlue.white} to continue\n`, (_) => {
        interface.pause()
    })
}

const createMenu = () => {
    console.clear()

    // show menu heading
    console.log(createHeading('Choose an option') + '\n')

    console.log(`${'1.'.green} Crear tarea`)
    console.log(`${'2.'.green} Listar tareas`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar tarea(s)`)
    console.log(`${'6.'.green} Borrar tarea`)
    console.log(`${'0.'.green} Salir\n`)

    // getting input and showing output with readline
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    // ask questions to get data from the terminal
    console.log('question')
    readline.question('Choose an option from the menu: ', (ans) => {
        console.log({ ans })
        readline.close()
    })
}

module.exports = {
    createHeading,
    createMenu,
    createPause
}