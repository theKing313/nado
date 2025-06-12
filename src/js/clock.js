let timeoutId = null;
const SECOND_HAND = document.getElementById('second');
const MINUTE_HAND = document.getElementById('minute');
const HOUR_HAND = document.getElementById('hour');
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondDeg = 6 * seconds;
  const minuteDeg = 6 * minutes + 0.1 * seconds;
  const hourDeg = 30 * (hours % 12) + 0.5 * minutes;
  SECOND_HAND.style.transform = `rotate(${secondDeg}deg)`;
  MINUTE_HAND.style.transform = `rotate(${minuteDeg}deg)`;
  HOUR_HAND.style.transform = `rotate(${hourDeg}deg)`;

  timeoutId = setTimeout(updateClock, 1000 - now.getMilliseconds());
}
window.onload = function () {
  document.addEventListener('click', documentActions);
  function documentActions(e) {
    if (e.target.classList.contains('startBtn')) {
      if (!timeoutId) {
        updateClock();
      }
    } else if (e.target.classList.contains('pauseBtn')) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }
};
