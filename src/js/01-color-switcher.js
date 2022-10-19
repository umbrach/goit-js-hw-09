function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timeId = null;

startBtn.addEventListener('click', () => {
  timeId = setInterval(() => {
    startBtn.disabled = true;
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timeId);
  startBtn.disabled = false;
});
