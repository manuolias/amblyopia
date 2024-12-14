const toggleButton = document.getElementById("toggleAnimationButton");
const animationCircle = document.getElementById("animatedCircle");
const animationContainer1 = document.getElementById("animatedContainer1");
const animationContainer2 = document.getElementById("animatedContainer2");
const homeButton = document.getElementById("homeButton");

// Estado inicial: animación corriendo
let isPaused = false;

// Manejador de evento para alternar la animación
toggleButton.addEventListener("click", () => {
  if (isPaused) {
    // Reanudar animación
    animationCircle.style.animationPlayState = "running";
    animationContainer1.style.animationPlayState = "running";
    animationContainer2.style.animationPlayState = "running";
    toggleButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    // Pausar animación
    animationCircle.style.animationPlayState = "paused";
    animationContainer1.style.animationPlayState = "paused";
    animationContainer2.style.animationPlayState = "paused";
    toggleButton.innerHTML = '<i class="bi bi-play-fill"></i>';
  }
  // Alternar el estado
  isPaused = !isPaused;
});

// Volver al menu de inicio  onclick="location.href='../index.html'"
homeButton.addEventListener("click", () => {
  window.location.href = "./../../index.html";
});
