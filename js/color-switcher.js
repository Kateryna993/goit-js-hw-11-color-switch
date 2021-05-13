const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector("body");
const startBtn = document.querySelector('button[ data-action="start"]');
const stopBtn = document.querySelector('button[ data-action="stop"]');

let colorTimer = null;

startBtn.addEventListener("click", startSwitcherOnClick);
stopBtn.addEventListener("click", stopSwitcherOnClick);

function startSwitcherOnClick() {
  startBtn.disabled = true;

  colorTimer = setInterval(() => {
    let colorRandom = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[colorRandom];
  }, 1000);
}

function stopSwitcherOnClick() {
  startBtn.disabled = false;
  clearInterval(colorTimer);
}
