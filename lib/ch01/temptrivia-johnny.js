const sbeve = require('./sbeve.js')


console.log("Enter a your starting unit of temperature (Kelvin, Fahrenheit, or Celsius):")

var userChosenTemp
userChosenTemp = sbeve.input()

while (userChosenTemp !== "kelvin"
        && userChosenTemp !== "k"
        && userChosenTemp !== "fahrenheit"
        && userChosenTemp !== "f"
        && userChosenTemp !== "celsius" 
        && userChosenTemp !== "c" ) {
            
            console.log ("Enter the right unit of temperature, please and thank you!")
            userChosenTemp =  sbeve.input()
        }

//these are the conditionals when the user chooses "Kelvin"
if (userChosenTemp === "kelvin" || userChosenTemp === "k") {
    console.log("You chose Kelvin. Now choose which unit you would like to convert to (Celsius or Fahrenheit):")
    var usersKelConvertUnit
    usersKelConvertUnit = sbeve.input()


    //the conditional to convert from kelvin to celsius
    if (usersKelConvertUnit === "celsius" || usersKelConvertUnit === "c") {
        console.log("You chose to convert to °C. Please type the temperature in °K:")
        var kelvinTemp
        kelvinTemp = sbeve.inputNumber()

        var celTemp

        celTemp = kelvinTemp - 273.15

        // conditionals to state trivia about specific celsius temperatures
        if (celTemp >= 100 && celTemp < 101) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That's the boiling point of water!")
        } else if (celTemp < -273.15) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That is physically impossible.")
        } else if (celTemp > -273.15 && celTemp <= -272) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That's very close to absolute zero!")
        } else if (celTemp === -273.15) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That's absolute zero! The coldest temperature possible!")
        } else if (celTemp >= 0 && celTemp < 1) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That's the freezing/melting point of water!")
        } else if (celTemp >= 20 && celTemp < 22) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That's average room temperature!")
        } else if (celTemp >= 37 && celTemp < 38) {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C. That's average body temperature!")
        } else {
            console.log(kelvinTemp+"°K converts to", celTemp+"°C.")
        }
    }
    //conditional to convert from kelvin to fahrenheit
    else if (usersKelConvertUnit === "fahrenheit" || usersKelConvertUnit === "f") {
        console.log("You chose to convert to °F. Please type the temperature in °K:")
        var kelvinTemp
        kelvinTemp = sbeve.inputNumber()

        var fahrTemp

        fahrTemp = (kelvinTemp - 273.15) * 9/5 + 32

        // conditionals to state trivia about specific fahrenheit temperatures
        if (fahrTemp >= 68 && fahrTemp < 69) {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F. That's average room temperature!")
        } else if (fahrTemp < -459.67) {
            console.log(kelvinTemp+"°L converts to", fahrTemp+"°F. That is physically impossible")
        } else if (fahrTemp === -459.67) {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F. That's absolute zero! The coldest temperature possible!")
        } else if (fahrTemp > -459.67 && fahrTemp <= -458) {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F. That's very close to absolute zero!")
        } else if (fahrTemp >= 32 && fahrTemp < 33) {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F. That's the freezing/melting point of water!")
        } else if (fahrTemp >= 98 && fahrTemp < 99) {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F. That's average body temperature!")
        } else if (fahrTemp >= 212 && fahrTemp < 213) {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F. That's boiling point of water!")
        } else {
            console.log(kelvinTemp+"°K converts to", fahrTemp+"°F.")
        }
    }
}
//conditionals if the user chooses fahrenheit
else if (userChosenTemp === "fahrenheit" || userChosenTemp === "f") {
    console.log("You chose Fahrenheit. Now choose which unit you would like to convert to (Celsius or Kelvin):")
    var usersFahrConvertUnit
    usersFahrConvertUnit = sbeve.input()


    //the conditional to convert from fahrenheit to celsius
    if (usersFahrConvertUnit === "celsius" || usersFahrConvertUnit === "c") {
        console.log("You chose to convert to °C. Please type the temperature in °F:")
        var fahrTemp
        fahrTemp = sbeve.inputNumber()

        var celTemp

        celTemp = (fahrTemp  - 32) * 5/9

        // conditionals to state trivia about specific celsius temperatures
        if (celTemp >= 100 && celTemp < 101) {
            console.log(fahrTemp+"°F converts to", celTemp+"°C. That's the boiling point of water!")
          } else if (celTemp >= 0 && celTemp < 1) {
            console.log(fahrTemp+"°F converts to", celTemp+"°C. That's the freezing/melting point of water!")
          } else if (celTemp >= 20 && celTemp < 22) {
            console.log(fahrTemp+"°F converts to", celTemp+"°C. That's average room temperature!")
          } else if (celTemp >= 37 && celTemp < 38) {
            console.log(fahrTemp+"°F converts to", celTemp+"°C. That's average body temperature!")
          } else {
            console.log(fahrTemp+"°F converts to", celTemp+"°C.")
          }

    }
    //conditional to convert from fahrenheit to kelvin
    else if (usersFahrConvertUnit === "kelvin" || usersFahrConvertUnit === "k") {
        console.log("You chose to convert to °K. Please type the temperature in °F:")
        var fahrTemp
        fahrTemp = sbeve.inputNumber()

        var kelvinTemp

        kelvinTemp = 5/9 * (fahrTemp + 459.67)

        // conditionals to state trivia about specific kelvin temperatures
        if (kelvinTemp === 373.15) {
            console.log(fahrTemp+"°F converts to", kelvinTemp+"°K. That's the boiling point of water!")
          } else if (kelvinTemp === 273.15) {
            console.log(fahrTemp+"°F converts to", kelvinTemp+"°K. That's the freezing/melting point of water!")
          } else if (kelvinTemp === 0) {
            console.log(fahrTemp+"°F converts to", kelvinTemp+"°K. That's absolute zero! The coldest temperature possible!")
          } else if (kelvinTemp >= 294.15 && kelvinTemp < 295) {
            console.log(fahrTemp+"°F converts to", kelvinTemp+"°K. That's average room temperature!")
          } else if (kelvinTemp ===310.15) {
            console.log(fahrTemp+"°F converts to", kelvinTemp+"°K. That's average body temperature!")
          } else {
            console.log(fahrTemp+"°F converts to", kelvinTemp+"°K.")
          }
    }
}
//conditionals if the user chooses celsius
else if (userChosenTemp === "celsius" || userChosenTemp === "c" ) {
    console.log("You chose Celsius. Now chose which unit you would like to convert to (Fahrenheit or Kelvin):")
    var usersCelConvertUnit
    usersCelConvertUnit = sbeve.input()



    //the conditional to convert from celsius to fahrenheit
    if (usersCelConvertUnit === "fahrenheit" || usersCelConvertUnit === "f") {
        console.log("You chose to convert to °F. Please type the temperature in °C:")
        var celTemp
        celTemp = sbeve.inputNumber()

        var fahrTemp

        fahrTemp = (celTemp * 9/5) + 32

        // conditionals to state trivia about specific fahrenheit temperatures
        if (fahrTemp >= 68 && fahrTemp < 69) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That's average room temperature!")
        } else if (fahrTemp < -459.67) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That is physically impossible")
        } else if (fahrTemp === -459.67) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That's absolute zero! The coldest temperature possible")
        } else if (fahrTemp > -459.67 && fahrTemp <= -458) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That's very close to absolute zero!")
        } else if (fahrTemp >= 32 && fahrTemp < 33) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That's the freezing/melting point of water!")
        } else if (fahrTemp >= 98 && fahrTemp < 99) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That's average body temperature!")
        } else if (fahrTemp >= 212 && fahrTemp < 213) {
            console.log(celTemp+"°C converts to", fahrTemp+"°F. That's boiling point of water!")
        } else {
            console.log(celTemp+"°C converts to", fahrTemp+"°F.")
        }

    }
    //conditional to convert from celsius to kelvin
    else if (usersCelConvertUnit === "kelvin" || usersCelConvertUnit === "k") {
        console.log("You chose to convert to °K. Please type the temperature in °C:")
        var celTemp
        celTemp = sbeve.inputNumber()

        var kelvinTemp

        kelvinTemp = celTemp + 273.15

        // conditionals to state trivia about specific kelvin temperatures
        if (kelvinTemp === 373.15) {
            console.log(celTemp+"°C converts to", kelvinTemp+"°K. That's the boiling point of water!")
          } else if (kelvinTemp === 0) {
            console.log(celTemp+"°C converts to", kelvinTemp+"°K. That's absolute zero! The coldest temperature possible!")
          } else if (kelvinTemp === 273.15) {
            console.log(celTemp+"°C converts to", kelvinTemp+"°K. That's the freezing/melting point of water!")
          } else if (kelvinTemp >= 294.15 && kelvinTemp < 295) {
            console.log(celTemp+"°C converts to", kelvinTemp+"°K. That's average room temperature!")
          } else if (kelvinTemp ===310.15) {
            console.log(celTemp+"°C converts to", kelvinTemp+"°K. That's average body temperature!")
          } else {
            console.log(celTemp+"°C converts to", kelvinTemp+"°K.")
          }
    }
}
