const words = ["sun", "moon", "planet", "galaxy", "star"];
const longest = words.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
  }, "");
  
  console.log(longest);
  