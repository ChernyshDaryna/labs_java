const btn = document.getElementById("myButton");

btn.addEventListener("click", function () {
  alert("Перший обробник події!");
});

btn.addEventListener("click", function () {
  alert("Другий обробник події!");
});

btn.addEventListener("click", function () {
  alert("Цей обробник виконається лише один раз.");
}, { once: true });
