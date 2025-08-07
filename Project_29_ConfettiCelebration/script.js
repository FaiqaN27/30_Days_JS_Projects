const btn = document.getElementById('celebrate-btn');

btn.addEventListener("click", () => {
  // Simple confetti burst
  confetti({
    particleCount: 350,
    spread: 200,
    shapes: ['star', 'square', 'circle'],
    colors: ['#f00', '#0f0', '#00f', '#ff0'],
    origin: { y: 0.7 }
  });


  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 160,
        origin: { y: 0.8 },
        shapes: ['star', 'circle'],
      });
    }, i * 400);
  }
})