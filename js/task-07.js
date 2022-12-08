const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');
inputElem.addEventListener('change', setFontSize);
function setFontSize(evt) {
        spanElem.style.fontSize = `${evt.currentTarget.value}px`;

}