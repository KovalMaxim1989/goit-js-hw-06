function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');

inputEl.addEventListener('change', quantity);
let amount = 0;
function quantity(evt) { 
  amount = Number.parseInt(evt.currentTarget.value);
 
  return amount;

};
 

btnCreate.addEventListener('click', createBoxes);
function createBoxes(amount) { 
  // let color = '#eb4034';
  console.log(amount);
  // for (let i = 1; i <= 5; i += 1 ) { 
  //   color = getRandomHexColor();
  //   console.log(amount);
  // };
 
 
}