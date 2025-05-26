
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Минуло ${ms} мс`);
    }, ms);
  });
}

document.getElementById('start').addEventListener('click', async () => {
  document.getElementById('result').textContent = 'Чекаємо...';

  try {
    const message = await delay(2000); 
    document.getElementById('result').textContent = message;
  } catch (error) {
    document.getElementById('result').textContent = `Помилка: ${error}`;
  } finally {
    console.log('Таймер завершено');
  }
});
