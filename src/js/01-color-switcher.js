
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

console.log(startBtn);
console.log(stopBtn);


const startAction = startBtn.addEventListener('click', getRandomHexColor);
const stopAction = stopBtn.addEventListener('click', getRandomHexColor);

// console.log(startAction);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// // console.log(getRandomHexColor());