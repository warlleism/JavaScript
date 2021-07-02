const betterDeveloper = 'warllei'

function whoIsBetterCallback() {
    return new Promise((resolve, reject) => {
        if (betterDeveloper != 'warllei') {
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Realy'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best'
            })
        }
    })
}

whoIsBetterCallback()
    .then((result) => {
        console.log(result.name + ' yeah ' + result.message)
    }).catch((erro) => {
        console.log(erro.name + '? yeah ' + erro.message)
    })