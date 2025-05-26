const nameInput = document.getElementById('nameInput');
const errorText = document.getElementById('errorText');
const form = document.getElementById('myForm');

nameInput.addEventListener('input', function () {
  if (nameInput.value.length < 3) {
    errorText.textContent = 'Ім’я має бути не менше 3 символів';
  } else {
    errorText.textContent = '';
  }
});

form.addEventListener('submit', function (event) {
  if (nameInput.value.length < 3) {
    event.preventDefault(); 
    errorText.textContent = 'Спочатку виправте помилку!';
  }
});
