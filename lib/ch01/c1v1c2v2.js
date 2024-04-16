const sbeve = require('./sbeve.js')

console.log('The formula for calculating a dilution is (C1) (V1) = (C2) (V2) where...')
console.log('C1 is the concentration of the starting solution.')
console.log('V1 is the volume of the starting solution.')
console.log('C2 is the concentration of the final solution.')
console.log('V2 is the volume of the final solution.')
console.log('Example:')
console.log('We want to dilute a 5 molar (M) solution with water to make 1 liter (L) of a 1M')
console.log('solution. In this case, we know C1, the concentration of the starting solution,')
console.log('C2, the desired final concentration, and V2, the desired final volume. Using')
console.log('the formula we can find how much of the starting solution (V1) we need to make')
console.log('1 liter of a 1M final solution.')

console.log('Input C1 (in M):')
var c1 = sbeve.inputNumber()

console.log('Input C2 (in M):')
var c2 = sbeve.inputNumber()

console.log('Input V2 (in L):')
var v2 = sbeve.inputNumber()

console.log('We calculate V1 to be (in L):')
console.log(c2 * v2 / c1)
