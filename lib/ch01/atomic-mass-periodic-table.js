const sbeve = require('./sbeve.js')

var elements = require('./elements.js')

// user inputs an element, and the program prints atomic mass of that element

// yell at user if they don't put in the element

print("Enter an element below!")
print("The computer will tell you the atomic mass and abbreviation:")

var elementalInput = input()


var isElemental =  false

for (var index = 0; index < elements.length; index+=1) {
    
    if (elements[index][0] === elementalInput || elements[index][2] === elementalInput ) {
        var daAbbreve
        
        daAbbreve = elements[index][2]

        if (daAbbreve.length > 1) {
            var splitFirst
            var splitSecond
            splitFirst = daAbbreve[0]
            splitSecond = daAbbreve[1]

            daAbbreve = splitFirst.toUpperCase() + splitSecond
        } else {
            daAbbreve = daAbbreve.toUpperCase()
        }

        
        print("The atomic mass of "+elements[index][0]+" is: "+elements[index][1]+" which is abbreviated as "+daAbbreve)
        isElemental = true
        break
    }
}

if (!isElemental) {
    print("You didn't type an element!")
}
