//STEP 1
function halfNumber(num) {
    half = num / 2
    console.log(`half of ${num} is ${half}.`)
}

//STEP 2
function squareNumber(num) {
    square = num ** 2
    console.log(`the result of squaring the number ${num} is ${square}`)
}

//STEP 3
function percentOf(num1, num2) {
    per = num1 / num2 * 100
    console.log(`${num1} is ${per}% of ${num2}`)
}

//STEP 4
function findModulus(num1, num2) {
    mod = num2 % num1
    console.log(`${mod} is the modulus of ${num1} & ${num2}`)
}

//STEP 5
function addList(numbers) {
    let base = 0
    for (let i = 0; i < arguments.length; i++) {
        base += Number(arguments[i])
    }
    console.log(base)
}


//  test functions
halfNumber(6)
squareNumber(4)
percentOf(6, 12)
findModulus(4, 10)
addList(1, 5, 5, 20, 100)