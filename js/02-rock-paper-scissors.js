let compChoice
let userChoice

document.write('welcome to the `rock, paper, scissors` game ✂️')

// phase 1
function promptUser() {
    userChoice = prompt('what do you select (r/p/s)?')
    if (userChoice == 'r' || userChoice == 'p' || userChoice == 's') {
        console.log(`the user's choice is ${userChoice}`)
        return true
    } else {
        alert('try again. you must enter one of the following letters: r, p, s')
        return false
    }
}

// phase 2
function getRandom(min, max) {
    let compInt = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
    switch (compInt) {
        case 1:
            compChoice = 'r'
            break;
        case 2:
            compChoice = 'p'
            break;
        default:
            compChoice = 's'
    }
}

// phase 3
function checkMatch(userChoice, compChoice) {
    console.log(`the computer's choice is ${compChoice}`)
    if ((userChoice == 'r' && compChoice == 's') || (userChoice == 'p' && compChoice == 'r') || (userChoice == 's' && compChoice == 'p')) {
        alert('you win!')
    } else if (userChoice == compChoice) {
        alert('you tied!')
    } else {
        alert('you lost ☹️')
    }
}

// main
function main() {
    x = promptUser()
    if (x == true) {
        getRandom(1, 3)
        checkMatch(userChoice, compChoice)
    }
    else {
        return
    }
}

main()