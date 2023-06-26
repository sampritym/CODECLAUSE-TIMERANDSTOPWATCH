// Timer
let timerInterval;
let timerSeconds = 0;
let timerTarget = 0;

function startTimer() {
  clearInterval(timerInterval);
  const hours = parseInt(document.getElementById("hoursInput").value) || 0;
  const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
  const seconds = parseInt(document.getElementById("secondsInput").value) || 0;

  timerTarget = (hours * 3600) + (minutes * 60) + seconds;
  if (timerTarget <= 0) {
    alert("invalid input");
    return;
  }

  timerSeconds = timerTarget;
  updateTimerDisplay();
  timerInterval = setInterval(updateTimer, 1000);
}


function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerTarget = 0;
  updateTimerDisplay();
  document.getElementById("hoursInput").value = "";
  document.getElementById("minutesInput").value = "";
  document.getElementById("secondsInput").value = "";
}

function updateTimer() {
  if (timerSeconds <= 0) {
    clearInterval(timerInterval);
    alert("Timer finished!");
    return;
  }
  timerSeconds--;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;
  const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById("timerDisplay").textContent = display;
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}


document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("pauseTimer").addEventListener("click", pauseTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  stopwatchSeconds++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById("stopwatchDisplay").textContent = display;
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}



document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("pauseStopwatch").addEventListener("click", pauseStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

