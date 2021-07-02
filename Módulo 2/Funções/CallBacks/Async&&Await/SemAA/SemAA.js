function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                sucesso: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            })
        } else {
            reject({
                sucesso: false,
                msg: 'I\'not so sure!'
            });
        }

    });
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response) {
            resolve(' Bohemiam Rhapsody by ' + response.bandName)
        } else {
            reject('Do you know Quenn?')
        }
    });
}

/*
bestRockBand('Queen')
    .then((response) => {
        console.log(response.msg)
    })
    .catch((err) => {
        console.log(err.msg)
    })

*/

//Async / await

async function doTheJob() {
    try {
        const bestRockBandresponse = await bestRockBand('Queen');
        console.log(bestRockBandresponse)
        const bestSong = await bestRockSong(bestRockBandresponse);
        console.log(bestSong)
    }
    catch (err) {
        console.log(err.msg)
    }
}

doTheJob()



