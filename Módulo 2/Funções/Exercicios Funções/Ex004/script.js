function resto (dividendo, divisor) {
    console.log(`${dividendo} / ${divisor} = ${Math.floor(dividendo/divisor)} `);
    return `Resto = ${Math.floor(dividendo/divisor)}`
}

console.log(resto(10, 5))