const sbeve = require('./sbeve.js')

console.log("How wide do you want this rectangle?")
var width

width = sbeve.inputNumber()

console.log("How tall do you want this rectangle?")

var height
height = sbeve.inputNumber()

var widthCount
widthCount = 1

var squarePiece
squarePiece = "*"

var mixDimension = ""

while (widthCount <= width) {
    

    mixDimension = mixDimension + squarePiece

    widthCount = widthCount + 1
}

var heightCount = 1

while (heightCount <= height) {

    heightCount = heightCount + 1

    console.log(mixDimension)
}