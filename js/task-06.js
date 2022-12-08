const inputElem = document.querySelector('#validation-input');
console.log(inputElem);
inputElem.addEventListener('blur', onBlur);
function onBlur() {
       console.log(inputElem.value.length);
       console.log(Number.parseInt(inputElem.getAttribute('data-length')));
       if(Number.parseInt(inputElem.getAttribute('data-length')) === inputElem.value.length ) {
        inputElem.classList.add('valid');
       }
       else {
        inputElem.classList.add('invalid');
       }
};
inputElem.addEventListener('focus', onFocus);
function onFocus() {
    inputElem.classList.remove('invalid');
    inputElem.classList.remove('valid');
}