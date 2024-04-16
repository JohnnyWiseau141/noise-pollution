const sbeve = require('./sbeve.js')

console.log("Type a string to be repeated")

var chosenString = sbeve.input()

console.log("How many times would you like to repeat da chosen string?")

var usersNo
usersNo = sbeve.inputNumber()
var startingNo
startingNo = 1

while (startingNo <= usersNo ) {

  console.log(chosenString)

  startingNo = startingNo + 1

} 
