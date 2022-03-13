// ADD A PRIVATE FUNCTION CALLED CALCULATE
let privStr = 'calculator module has loaded'
function calculate() {
    console.log(privStr)
}
calculate()

// ADD FOUR PUBLIC FUNCTIONS BELOW
// ADD FUNCTION
const add = (x, y) => x + y 

// SUBTRACT FUNCTION
const sub = (x, y) => x - y

// MULTIPLY FUNCTION
const mult = (x, y) => x * y

// DIVIDE FUNCTION
const div = (x, y) => x / y

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, sub, mult, div}