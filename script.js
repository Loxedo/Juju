// Obtener el audio
const clickSound = document.getElementById("clickSound");
const music = document.getElementById("music");

// Función para reproducir sonido de clic
function playClickSound() {
  clickSound.currentTime = 0; // Reinicia el sonido
  clickSound.play();
}

// Mostrar mensaje oculto
document.getElementById("surpriseBtn").addEventListener("click", function() {
  playClickSound();
  const hiddenMessage = document.getElementById("hiddenMessage");
  hiddenMessage.classList.toggle("hidden");
});

// Reproducir música
document.getElementById("musicControlBtn").addEventListener("click", function() {
  playClickSound();
  if (music.paused) {
    music.play();
    this.textContent = "🎵 Detener Música";
  } else {
    music.pause();
    this.textContent = "🎵 Reproducir Música";
  }
});
