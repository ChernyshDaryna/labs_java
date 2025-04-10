const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: -1, y: 0 }
  ];
const formattedPoints = points.map(point => `${point.x}, ${point.y}`);

console.log(formattedPoints);
  