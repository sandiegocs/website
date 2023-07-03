/*
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h2").onmouseover = event => 
{  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
*/

document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
  
    const h2Element = document.querySelector("h2");
  
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
  
    h2Element.addEventListener("mouseover", startAnimation);
  
    startAnimation(); // Trigger the animation when the page first loads
  });
  