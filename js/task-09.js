function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButton = document.querySelector(".change-color");
const body = document.querySelector('body');
const colorOutput = document.querySelector('.color');
changeButton.addEventListener('click', changeColor);
function changeColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorOutput.textContent = currentColor;
}
