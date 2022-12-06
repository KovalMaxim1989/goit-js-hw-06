const body = document.body;
const numberOfCategories = body.querySelector("#categories").children.length;
console.log(`Number of categories: ${numberOfCategories}`);
const liItems = body.querySelectorAll(".item");
liItems.forEach((liItem) => {  console.log(`Category: ${liItem.firstElementChild.textContent}`)
 console.log(`Elements: ${liItem.lastElementChild.children.length}`)})
