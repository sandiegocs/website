document.addEventListener("DOMContentLoaded", () => {
  // TODO : Replace generating string with static
  //        to remove need to generate a new string
  //        every page load.
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const h2Element = document.getElementById("scrambled");

  const startAnimation = () => {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      h2Element.innerText = h2Element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h2Element.dataset.value[index];
          }
      
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    
      if (iteration >= h2Element.dataset.value.length) { 
        clearInterval(interval);
      }
    
      iteration += 1 / 3;
    }, 30);
  };

  startAnimation(); // Trigger the animation when the page first loads
});