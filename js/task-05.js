const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');
console.log(spanElem);
inputElem.addEventListener('input', onInput)
function onInput(evt) {
   spanElem.textContent = evt.currentTarget.value;
  if(!evt.currentTarget.value) {
    spanElem.textContent = "Anonymous";}
};
