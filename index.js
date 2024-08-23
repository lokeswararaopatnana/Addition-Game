let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let correctResult = "Congratulations! You got it right.";
let wrongResult = "Please Try Again!";

function restartGame(){
    let firstNumber = Math.random() * 100;
    let secondNumber = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstNumber);
    secondNumberElement.textContent = Math.ceil(secondNumber);

    userInputElement.textContent = "";
    gameResultElement.textContent = "";
}
restartGame();

function checkResult(){
    let firstRandomNumber = parseInt(firstNumberElement.textContent);
    let secondRandomNumber = parseInt(secondNumberElement.textContent);

    let sumOfTwoNumbers = firstRandomNumber + secondRandomNumber;

    let userInputValue = parseInt(userInputElement.value);

    if (userInputValue === sumOfTwoNumbers){
        gameResultElement.textContent = correctResult;
        gameResultElement.style.backgroundColor = "#028a0f";
    }else{
        gameResultElement.textContent = wrongResult;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}