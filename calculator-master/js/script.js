let numberArray = []

const numberButton = document.getElementsByClassName("numbers");
for (let i = 0; i < numberButton.length; i++){
    for (let n = 0; n <= 2; n++){
        numberButton[i].children[n].addEventListener("click", event => handleClick(event));
    }
}

function handleClick(event) {
    console.log(event.target.innerHTML);
    numberArray.push(`${event.target.innerHTML}`)
}

console.log(numberArray)


let operatorArray = []

function handleClickTwo(event) {
    console.log(event.target.innerHTML);
    operatorArray.push(`${event.target.innerHTML}`)
}

const operatorButton = document.getElementsByClassName("operators");
for (let i = 0; i < operatorButton.length; i++) {
    for (let n = 0; n <= 3; n++){
        operatorButton[i].children[n].addEventListener("click", event => handleClickTwo(event)); 
    }
}

console.log(operatorArray);

