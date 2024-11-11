document.addEventListener('DOMContentLoaded', () => {
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
});
