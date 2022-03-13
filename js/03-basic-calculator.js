// IMPORT THE MODULE
import * as calc from "./modules/calculator.js"

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1
let num2
let op
let val
let rerun

function promptUser() {
    num1 = parseFloat(prompt('enter a number'))
    num2 = parseFloat(prompt('enter another number'))
    op = prompt('would you like to add, subtract, multiply, or divide?')
    return op, num1, num2
}

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
function performOperation(op, num1, num2) {
    if (op == 'add') {
        val = calc.add(num1, num2)
    }
    else if (op == 'subtract') {
        val = calc.sub(num1, num2)
    }
    else if (op == 'multiply') {
        val = calc.mult(num1, num2)
    }
    else if (op == 'divide') {
        val = calc.div(num1, num2)
    }
    else {
        val = 'try again. you must enter one of the following options: add, subtract, multiply, or divide'
        rerun = true
    }
    alert(val)
}

function main() {
    op, num1, num2 = promptUser()
    performOperation(op, num1, num2)
}

main()

do {
    main()
}
while (rerun == true)