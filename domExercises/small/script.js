const h1 = document.getElementById("heading");
//console.log(h1);
h1.innerText = "Toppings";

const burger = document.querySelector("#burger");
console.log(burger);
burger.className = "list-item"

const addPickles = document.createElement("li");
const burgerList = document.getElementById("list");
addPickles.id = "pickles";
addPickles.innerText = "Pickles";
burgerList.append(addPickles);

