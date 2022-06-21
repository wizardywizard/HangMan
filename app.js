const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputContainer = document.getElementById("user-input-container");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
    friuts: [
        "Apple",
        "Blueberry",
        "Pineapple",
        "Watermelon",
        "Banana",
        "Orange",
    ],
    animals: [
        "Zebra",
        "Walrus",
        "Panther",
        "Rhinoceros",
        "Hedgehog",
        "Squirrel",
    ],
    states: [
        "California",
        "Florida",
        "Hawaii",
        "Mississippi",
        "Texas",
       "Washington",
    ],
};


let winCount = 0;
let count = 0;
let chosenWord = "";

const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
}

const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button) => {
        if (button,innerText.toLowerCase() === optionValue){
            button.classList.add("active";)
        }
        button.disabled = true;
    })
}

const initializer = () => {
    winCount = 0;
    count = 0;
    displayOptions();
}

newGameButton.addEventListener("click", initializer);
window.onload = initializer;





