const counterValue = document.querySelector("#value");
counterValue.textContent = 0;
const btnDecrementElem = document.querySelector('button[data-action="decrement"]');
const btnIncrementElem = document.querySelector('button[data-action="increment"]');

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
 }
btnDecrementElem.addEventListener('click', onDecrementClick);
btnIncrementElem.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counter.decrement();
    counterValue.textContent = counter.value;
  };

function onIncrementClick() {
    counter.increment();
    counterValue.textContent = counter.value;
  
};