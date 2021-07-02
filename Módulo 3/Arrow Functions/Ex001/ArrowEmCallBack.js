        //Sem Arrow

//document.addEventListener('click',function(){
//    console.log('clicked')
//})

        //Com Arrow

document.addEventListener('click', () => console.log('clicked'))

document.addEventListener('click', () => {//Com chaves pois há mais de uma instrunção
    console.log('Clicked')
    tofixed()
})