// Función para mostrar/ocultar contraseña al hacer clic en el icono
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        // Cambia a tipo texto (visible)
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash'); // Icono: Ocultar (slash)
        toggleIcon.classList.add('fa-eye'); // Icono: Mostrar (eye)
    } else {
        // Cambia a tipo contraseña (oculta)
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye'); // Icono: Mostrar (eye)
        toggleIcon.classList.add('fa-eye-slash'); // Icono: Ocultar (slash)
    }
}

// ----------------------------------------------------
// LÓGICA DE VALIDACIÓN Y REDIRECCIÓN DEL LOGIN
// ----------------------------------------------------

// Agregar un 'listener' al formulario para manejar el envío
document.querySelector('.glass-form').addEventListener('submit', function(event) {
    // 1. Prevenir el envío de formulario por defecto (para evitar la recarga de página)
    event.preventDefault();

    // 2. Obtener los valores de los campos de entrada
    const keyUnica = document.getElementById('email').value.trim(); // Se utiliza el ID 'email' del input de KEY UNICA
    const password = document.getElementById('password').value.trim();

    // 3. Definir las credenciales correctas
    const CORRECT_KEY = 'Tomate@hot.com';
    const CORRECT_PASSWORD = 'Tomate';
    const REDIRECT_URL = 'https://henrychansanchez21-glitch.github.io/App-de-videos/';

    // 4. Comprobar las credenciales
    if (keyUnica === CORRECT_KEY && password === CORRECT_PASSWORD) {
        // Credenciales correctas: Redirigir al usuario
        alert('Inicio de sesión exitoso. Redirigiendo...');
        window.location.href = REDIRECT_URL;
    } else {
        // Credenciales incorrectas: Mostrar un mensaje de error
        alert('Error: KEY UNICA o CONTRASEÑA incorrecta.');
    }
});

// ----------------------------------------------------
// LÓGICA DEL BOTÓN COMPRAR USUARIO (ENLACE DE TELEGRAM)
// ----------------------------------------------------

document.getElementById('buyUserButton').addEventListener('click', function() {
    // Redirige al enlace de Telegram
    const BUY_URL = 'https://t.me/GrupoHHacks'; 
    
    alert('Redirigiendo a Telegram para comprar usuario.');
    window.location.href = BUY_URL;
});
