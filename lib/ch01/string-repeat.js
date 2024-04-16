const sbeve = require('./sbeve.js')

console.log('What string do you want to repeat?')

var string = sbeve.input()

console.log('How many times do you want to repeat it?')

var numRepeat = sbeve.inputNumber()

var i = 1

while (i <= numRepeat) {

  console.log(string)

  i = i + 1

}
