const toggleButton = document.getElementById("toggleAnimationButton");
const circulo1 = document.getElementById("circle1");
const circulo2 = document.getElementById("circle2");
const circulo3 = document.getElementById("circle3");
const circulo4 = document.getElementById("circle4");
const circulo5 = document.getElementById("circle5");
const circulo6 = document.getElementById("circle6");
const circulo7 = document.getElementById("circle7");
const circulo8 = document.getElementById("circle8");
const homeButton = document.getElementById("homeButton");

// Estado inicial: animación corriendo
let isPaused = false;

// Manejador de evento para alternar la animación
toggleButton.addEventListener("click", () => {
  if (isPaused) {
    // Reanudar animación
    circulo1.style.animationPlayState = "running";
    circulo2.style.animationPlayState = "running";
    circulo3.style.animationPlayState = "running";
    circulo4.style.animationPlayState = "running";
    circulo5.style.animationPlayState = "running";
    circulo6.style.animationPlayState = "running";
    circulo7.style.animationPlayState = "running";
    circulo8.style.animationPlayState = "running";
    toggleButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    // Pausar animación
    circulo1.style.animationPlayState = "paused";
    circulo2.style.animationPlayState = "paused";
    circulo3.style.animationPlayState = "paused";
    circulo4.style.animationPlayState = "paused";
    circulo5.style.animationPlayState = "paused";
    circulo6.style.animationPlayState = "paused";
    circulo7.style.animationPlayState = "paused";
    circulo8.style.animationPlayState = "paused";
    toggleButton.innerHTML = '<i class="bi bi-play-fill"></i>';
  }
  // Alternar el estado
  isPaused = !isPaused;
});

// Volver al menu de inicio  onclick="location.href='../index.html'"
homeButton.addEventListener("click", () => {
  window.location.href = "./../../index.html";
});
