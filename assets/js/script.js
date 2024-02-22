let titleValue = document.querySelector ("#title");
let currentValue = 0;

const decrement = document.querySelector("#decrement_btn");
const increment = document.querySelector("#increment_btn");
const reset = document.querySelector("#reset_btn");
 

increment.addEventListener('click', () => {
  currentValue++;
  titleValue.textContent = currentValue;
});

decrement.addEventListener('click', () => {
  currentValue--;
  titleValue.textContent = currentValue;
});

reset.addEventListener('click', () => {
  currentValue = 0;
  titleValue.textContent = currentValue;
});
