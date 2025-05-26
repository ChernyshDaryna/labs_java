function updateCountdown() {
  const now = new Date();

  const endOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);


  const diffMs = endOfHour - now;


  const minutesLeft = Math.floor(diffMs / 60000);
  const secondsLeft = Math.floor((diffMs % 60000) / 1000);


  document.getElementById('countdown').textContent = `${minutesLeft} хв ${secondsLeft} сек`;
}


setInterval(updateCountdown, 1000);
updateCountdown();