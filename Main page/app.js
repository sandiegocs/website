//text scrambler
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
/*  
//Eye tracker for cursor
document.addEventListener('mousemove', (e) => {
  
  console.log(e)

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById('emptyEye')
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;
  
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  console.log(angleDeg)

  pupilContainer.style.transform = `rotate(${90 + angleDeg}Deg)`;
})

function angle(cx, cy, ex, ey)
{
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById('emptyEye');
  const pupilContainer = document.getElementById('pupilContainer');

  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  pupilContainer.style.transform = `rotate(${90 + angleDeg}deg)`;
});
*/



// Eye tracker for cursor
document.addEventListener('DOMContentLoaded', () => {
  const pupilContainer = document.getElementById('pupilContainer');
  const pupilImage = document.querySelector('#pupilContainer img');

  const movePupil = (mouseX, mouseY) => {
    const containerRect = pupilContainer.getBoundingClientRect();
    const pupilImageRect = pupilImage.getBoundingClientRect();

    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    const deltaX = mouseX - containerCenterX;
    const deltaY = mouseY - containerCenterY;

    // Calculate the maximum allowed movement range within the container
    const maxRangeX = (containerRect.width - pupilImageRect.width) // 2;
    const maxRangeY = (containerRect.height - pupilImageRect.height) / 2;

    // Define a scaling factor to adjust the movement speed
    const speedScale = 0.05; // Adjust this value to control the speed

    // Limit the eye movement within the container with the scaled values
    const limitedX = Math.max(-maxRangeX, Math.min(deltaX * speedScale, maxRangeX));
    const limitedY = Math.max(-maxRangeY, Math.min(deltaY * speedScale, maxRangeY));

    setTimeout(() => {
    pupilImage.style.transform = `translate(${limitedX - 120}px, ${limitedY - 120}px)`;
    }, 140)


  };

  const handleMouseMove = (e) => {
    movePupil(e.clientX, e.clientY);
  };

  document.addEventListener('mousemove', handleMouseMove);
});





  