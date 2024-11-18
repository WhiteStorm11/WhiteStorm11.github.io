document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la gaveta
    const drawer = document.querySelector('#drawer');
    const buttonRed = document.querySelector('#button-red');
    const buttonGreen = document.querySelector('#button-green');

    let isDrawerOpen = false;

    function openDrawer() {
        if (!isDrawerOpen) {
            drawer.setAttribute('position', '0 0.95 -2.5'); // Mueve la gaveta hacia afuera
            isDrawerOpen = true;
        }
    }

    function closeDrawer() {
        if (isDrawerOpen) {
            drawer.setAttribute('position', '0 0.95 -3'); // Mueve la gaveta hacia adentro
            isDrawerOpen = false;
        }
    }

    buttonGreen.addEventListener('click', openDrawer); // El botón verde abre la gaveta
    buttonRed.addEventListener('click', closeDrawer);  // El botón rojo cierra la gaveta

    // Lógica para el abanico
    const fanBlades = document.querySelector('#fan-blades');
    const fanButton = document.querySelector('#fan-button');

    if (!fanButton || !fanBlades) {
        console.error("Error: El botón o las hélices del abanico no se encuentran en el DOM.");
        return;
    }

    let isFanOn = false;

    function toggleFan() {
        if (!isFanOn) {
            fanBlades.setAttribute('animation', 'property: rotation; to: 0 0 360; loop: true; dur: 1000');
            fanButton.setAttribute('color', 'green'); // Cambia el botón a verde
            isFanOn = true;
        } else {
            fanBlades.removeAttribute('animation'); // Detiene el movimiento
            fanButton.setAttribute('color', 'red'); // Cambia el botón a rojo
            isFanOn = false;
        }
    }

    fanButton.addEventListener('click', toggleFan); // El botón controla el abanico
});
