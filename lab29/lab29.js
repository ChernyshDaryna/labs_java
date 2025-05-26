const greeting = document.getElementById('greeting');
const languageSelect = document.getElementById('language');

const texts = {
  uk: "Вітаємо!",
  en: "Welcome!",
  jp: "こんにちは!"
};

window.onload = () => {
  const savedLang = localStorage.getItem('language');
  if (savedLang && texts[savedLang]) {
    languageSelect.value = savedLang;
    greeting.textContent = texts[savedLang];
  }
};

languageSelect.addEventListener('change', () => {
  const selectedLang = languageSelect.value;
  greeting.textContent = texts[selectedLang];
  localStorage.setItem('language', selectedLang);
});
