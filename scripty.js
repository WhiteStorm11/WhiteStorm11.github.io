const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Alternar el formulario
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Redirigir al usuario después de completar el formulario de registro
document.getElementById("signUpBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.querySelector(".sign-up input[type='text']").value;
    const email = document.querySelector(".sign-up input[type='email']").value;
    const password = document.querySelector(".sign-up input[type='password']").value;

    if (name && email && password) {
        window.location.href = "Principal.html";
    } else {
        alert("Por favor, completa todos los campos para registrarte.");
    }
});

// Redirigir al usuario después de completar el formulario de inicio de sesión
document.getElementById("signInBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.querySelector(".sign-in input[type='email']").value;
    const password = document.querySelector(".sign-in input[type='password']").value;

    if (email && password) {
        window.location.href = "Principal.html";
    } else {
        alert("Por favor, completa todos los campos para iniciar sesión.");
    }
});
