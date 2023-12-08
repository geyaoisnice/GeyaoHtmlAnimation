const chineseNewYear = new Date(2024, 0, 25);

function updateCountdown() {
  const now = new Date();
  const difference = chineseNewYear - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days + ' 天';
  document.getElementById('hours').innerText = hours + ' 小时';
  document.getElementById('minutes').innerText = minutes + ' 分钟';
  document.getElementById('seconds').innerText = seconds + ' 秒';
}

setInterval(updateCountdown, 1000);
updateCountdown();
