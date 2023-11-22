
            let a = prompt("Input number a");
            let b = prompt("Input number b");

            a = parseFloat(a)
            b = parseFloat(b)   

            prompt(a + b)


let number = 6.35;
let roundedNumber = Math.round(number * 10) / 10;
alert(roundedNumber.toFixed(1));


function readNumber() {
    var userInput;

    do {
        userInput = prompt("Please enter a number:");

        if (userInput === null || userInput === "") {
            return null;
        }

        var numericValue = parseFloat(userInput);

        if (!isNaN(numericValue)) {
            return numericValue;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    } while (true); 
}


function random(min, max) {
    var randomValue = Math.random();

    var result = min + randomValue * (max - min);

    return result;
}

var randomNumber = random(5, 10);
console.log(randomNumber);



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
var randomNum = randomInteger(5, 10);
console.log(randomNum);



