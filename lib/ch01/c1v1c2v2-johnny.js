const sbeve = require('./sbeve.js')

// c1v1=c2v2
// you usually end up not knowing the v1 so it usually ends up being
// v1 = c2v2/c1

console.log("Yo dawg you need to figure out the desired volume of a 2L 4M saline solution from an initial 10M stock solution")
console.log("Watch where you calculating ya fool!")

console.log("Enter C1 (in M):")
var c1 = sbeve.inputNumber()

console.log("Enter C2 (in M):")
var c2 = sbeve.inputNumber()

console.log("Enter V2 (in L):")
var v2 = sbeve.inputNumber()

var v1

v1 = (c2 * v2)/c1

console.log("Calculations indicate this should be your desired V1 (in L)")
console.log(v1)