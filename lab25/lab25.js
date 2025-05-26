const list = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  const listItem = document.createElement("li");       
  listItem.textContent = `Елемент №${i}`;               
  list.appendChild(listItem);                          
}

document.body.appendChild(list);
