function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const parentDiv = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  destroyBoxes();
  for (let i = 0; i < boxesNumber.value; i += 1) {
    const currentDiv = document.createElement('div');
    currentDiv.style.width = `${30 + 10 * i}px`;
    currentDiv.style.height = `${30 + 10 * i}px`;
    currentDiv.style.backgroundColor = getRandomHexColor();
    currentDiv.classList.add('box');
    parentDiv.append(currentDiv);
  }
}

function destroyBoxes() {
  parentDiv.innerHTML = '';

  // alternative
  // const allBoxes = document.querySelectorAll('.box');
  // if (allBoxes) {
  //   for (const box of allBoxes) {
  //     box.remove();
  //   }
  // }

}
