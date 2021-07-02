function olaMundo() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push('Hello World!')
    }
    return arr
}

console.log(olaMundo())

//Ou


function helloWorld() {
    let i = 0
    while (i < 10) {
        console.log('Hello World!!')
        i++
    }
}

helloWorld()