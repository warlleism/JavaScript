const betterDeveloper = 'warllei'

function whoIsBetterCallback(callback, erroCallback) {
    if (betterDeveloper != 'warllei' && betterDeveloper != 'rafael') {
        erroCallback({
            name: 'This is wrong',
            message: betterDeveloper + '? Realy'
        })
    } else {
        callback({
            name: betterDeveloper,
            message: 'CDFs are the best'
        })
    }
}

whoIsBetterCallback((result) =>{
    console.log(result.name + '? Yeah' + result.message)
},(erro) =>{
    console.log(erro.name + ' ' + erro.message)
})

