const button = document.getElementById("throttleBtn");
const output = document.getElementById("output");

function throttle(func, limit) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    func();
    setTimeout(() => canRun = true, limit);
  };
}

const changeText = throttle(() => {
  const now = new Date().toLocaleTimeString();
  output.textContent = `Оновлено: ${now}`;
}, 1000); 

button.addEventListener("click", changeText);
