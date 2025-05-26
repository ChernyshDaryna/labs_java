const text = document.getElementById("text");

window.onload = () => {
  const savedSize = localStorage.getItem("fontSize");
  if (savedSize) {
    text.style.fontSize = savedSize;
  }
};


function setFontSize(size) {
  text.style.fontSize = size;
  localStorage.setItem("fontSize", size);
}
