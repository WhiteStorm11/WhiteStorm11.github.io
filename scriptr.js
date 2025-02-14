let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");

const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;

function getMousePosition(e) {
  if (isTouchDevice()) {
    if (e.touches && e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  } else {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

// Agregar eventos correctamente
if (isTouchDevice()) {
  document.addEventListener("touchmove", getMousePosition, { passive: false });
  document.addEventListener("touchstart", getMousePosition, { passive: false }); // Para actualizar la posición al tocar
} else {
  document.addEventListener("mousemove", getMousePosition);
}
