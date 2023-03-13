const startBtn =  document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;
const COLOR_DELAY = 1000;

startBtn.addEventListener('click', startBtnClick);
stopBtn.addEventListener('click', stopBtnClick);

function startBtnClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, COLOR_DELAY);
  
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function stopBtnClick() {  
  clearInterval(intervalId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
};
