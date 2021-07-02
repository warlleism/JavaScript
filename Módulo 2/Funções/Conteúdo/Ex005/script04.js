
//Recursividade

function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n  * fatorial(n-1)//chamada para a mesma função
    }
}

console.log(fatorial(5))

// 5! = 5x4x3x2x1 = 120
// 5! = 5x4! 
//Fatorial de um número pode ser calculado baseado no fatorial de outro

//n! = n x n(-1)!
//1! = 1