document.addEventListener("DOMContentLoaded", () => {
  // Hide <noscript>
  for (let elem of document.getElementsByTagName("noscript")) {
    elem.style.display = "none";
  }

  // Eye tracker for cursor
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
    const maxRangeX = (containerRect.width - pupilImageRect.width) / 2;
    const maxRangeY = (containerRect.height - pupilImageRect.height) / 2;

    // Define a scaling factor to adjust the movement speed
    const speedScale = 0.05; // Adjust this value to control the speed

    // Limit the eye movement within the container with the scaled values
    const limitedX = Math.max(-maxRangeX, Math.min(deltaX * speedScale, maxRangeX));
    const limitedY = Math.max(-maxRangeY, Math.min(deltaY * speedScale, maxRangeY));

    setTimeout(() => {
      pupilImage.style.transform = `translate(${limitedX - 130}px, ${limitedY - 120}px)`;
    }, 180);
  };

  const handleMouseMove = (e) => {
    movePupil(e.clientX, e.clientY);
  };

  document.addEventListener('mousemove', handleMouseMove);
});
