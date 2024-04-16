const sbeve = require('./sbeve.js')


console.log("Time to pick a number and this dope af computer will fizzbuzz all the way to that number that YOU, the user, chose!")


var initial = 1
var userNumber
userNumber = sbeve.inputNumber()

while (initial <= userNumber) {
  if (initial % 3 == 0 && initial % 5 == 0) {
    console.log('Fizzbuzz')
  }
  else if (initial % 3 == 0) {
      console.log('Fizz')
    }
    else if (initial % 5 == 0) {
        console.log('Buzz')
      }
      else {
        console.log(initial)
      }
  initial = initial + 1
}
  

  
