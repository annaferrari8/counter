//body 

inizializer_function("wrapper","div",document.body,"pageWrapper");

// counter
inizializer_function("counterContainer","section",wrapper,"counter_container");


// display of the counter
inizializer_function("displayContainer","section",counterContainer,"display_container");
inizializer_function("displayTitle","h2",displayContainer,"display_container","display","0");

// variabili
let counter = 0;
let display = document.getElementById("display");

// button wrapper
inizializer_function("buttonContainer","section",counterContainer,"button_container");


// +, -, reset
inizializer_function("decrementButton","div",buttonContainer,"decrement_div");
inizializer_function("incrementButton","div",buttonContainer,"increment_div");
inizializer_function("resetButton","div",buttonContainer,"reset_div");
inizializer_function("buttonmeno","button",decrementButton,"decrement_button");

// creazione bottoni
createButton(buttonmeno,"-", change);
inizializer_function("buttonpiu","button",incrementButton,"increment_button");
createButton(buttonpiu,"+", change);
inizializer_function("buttonstartover","button",resetButton,"reset_button");
createButton(buttonstartover,"Start Over", change);


// functions
function createButton(button, text, event) {
    button.innerHTML = text;
    if(event) {
        button.addEventListener("click", event);
    }
    return button;
}

//inizializer

function inizializer_function(varName,element,appendToObj,className,id = "",content = "",callback = null){
	window[varName] = document.createElement(element);
  window[varName].className = className;
  if(id != ""){
  	displayTitle.id = id;
  }
  if(content != ""){
  	displayTitle.textContent = content;
  }
	appendToObj.appendChild(window[varName]);
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
