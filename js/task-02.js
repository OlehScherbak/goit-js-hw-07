const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liArray = [];
ingredients.forEach(element => {
  liArray.push(document.createElement('li'));
  liArray[liArray.length - 1].textContent = element;
  liArray[liArray.length - 1].classList.add("item");
});

document.querySelector('#ingredients').append(...liArray);