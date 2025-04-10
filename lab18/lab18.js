const arrays = [
    [1, 2],
    [3, 4, 5],
    [],
    [6],
    [7, 8, 9, 10]
  ];
const filtered = arrays.filter(innerArray => innerArray.length > 2);

console.log(filtered);
  