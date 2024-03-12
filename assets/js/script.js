//body
const wrapper = document.createElement("div");
wrapper.className = "pageWrapper";
document.body.appendChild(wrapper);

// counter
const counterContainer = document.createElement("section");
counterContainer.className = "counter_container"
wrapper.appendChild(counterContainer);

// display of the counter
const displayContainer = document.createElement("section");
displayContainer.className = "display_container";
counterContainer.appendChild(displayContainer);
const displayTitle = document.createElement("h2");
displayTitle.id = "display";
displayTitle.textContent = "0";
displayContainer.appendChild(displayTitle);
let counter = 0;
let display = document.getElementById("display");

// button wrapper
const buttonContainer = document.createElement("section");
buttonContainer.className = "button_container";
counterContainer.appendChild(buttonContainer);

// +, -, reset

const decrementButton = document.createElement("div");
const incrementButton = document.createElement("div");
const resetButton = document.createElement("div");
buttonContainer.appendChild(decrementButton);
buttonContainer.appendChild(incrementButton);
buttonContainer.appendChild(resetButton);

let buttonmeno = createButton("-", change);
let buttonpiu = createButton("+", change);
let buttonstartover = createButton("Start Over", change);
decrementButton.appendChild(buttonmeno);
incrementButton.appendChild(buttonpiu);
resetButton.appendChild(buttonstartover);

// functions
function createButton(text, event) {
    let button = document.createElement("button");
    button.innerHTML = text;
    if(event) {
        button.addEventListener("click", event);
    }
    return button;
}

function change(option){
	if(option.currentTarget.innerText == "+"){
  	counter ++;
  }
  else if(option.currentTarget.innerText == "-" && counter > 0){
  	counter --;
  }
  else if(option.currentTarget.innerText =="Start Over"){
  	counter=0;
  }
	updateDisplay();
}

function updateDisplay() {
    display.innerHTML = counter;
}
