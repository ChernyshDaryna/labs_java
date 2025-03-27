
function привітай(імя) {
    return `Привіт, ${імя}!`;
  }
  console.log(привітай("Аліса")); 
  
  
  const привітай2 = function(імя) {
    return `Привіт, ${імя}!`;
  };
  console.log(привітай2("Дарина")); 
  
  
  const привітай3 = (імя) => `Привіт, ${імя}!`;
  console.log(привітай3("Алекс")); 
  

  (function() {
    console.log("IIFE виконано!");
  })();
  
  
  function привітай4(імя = "Гість") {
    return `Привіт, ${імя}!`;
  }
  console.log(привітай4()); 
  
 
  function факторіал(n) {
    if (n === 0) return 1;
    return n * факторіал(n - 1);
  }
  console.log(факторіал(5)); 


  //15 вариант
  function скопіюватиМасив(масив) {
    return [...масив]; 
  }
  
  const оригінал = [1, 2, 3, 4, 5];
  const копія = скопіюватиМасив(оригінал);
  
  console.log(копія);
  console.log(копія === оригінал); 
  