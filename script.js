// Función para mostrar/ocultar contraseña al hacer clic en el icono
function togglePassword() {
    const passwordField = document.getElementById('password');
    // CORRECCIÓN: Buscamos el icono dentro de la misma función
    const toggleIcon = document.querySelector('.toggle-password'); 

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

// ----------------------------------------------------
// LÓGICA DE VALIDACIÓN Y BOTÓN DE CARGA MEJORADO
// ----------------------------------------------------

const loadingButton = document.getElementById('loadingButton');
const buttonText = loadingButton.querySelector('.button-text');
const spinner = loadingButton.querySelector('.spinner');

// Función para cambiar el estado del botón a "cargando"
function startLoading() {
    loadingButton.classList.add('loading');
    loadingButton.classList.remove('success', 'error'); // Limpiar estados anteriores
    loadingButton.disabled = true; // Deshabilitar para evitar múltiples envíos
    buttonText.textContent = 'Cargando...'; // Opcional, el CSS ya lo oculta
    spinner.style.display = 'inline-block'; // Asegurarse de que el spinner esté visible
}

// Función para cambiar el estado del botón a "normal" o "resultado"
function stopLoading(success) {
    loadingButton.classList.remove('loading');
    loadingButton.disabled = false;
    spinner.style.display = 'none'; // Ocultar spinner

    if (success) {
        loadingButton.classList.add('success');
        buttonText.textContent = '¡Éxito!'; // Mensaje de éxito
        setTimeout(() => {
            buttonText.textContent = 'INICIAR'; // Resetear después de un tiempo
            loadingButton.classList.remove('success');
        }, 2000); 
    } else {
        loadingButton.classList.add('error');
        buttonText.textContent = 'Fallido'; // Mensaje de error
        setTimeout(() => {
            buttonText.textContent = 'INICIAR'; // Resetear después de un tiempo
            loadingButton.classList.remove('error');
        }, 2000); 
    }
}

// Agregar un 'listener' al formulario para manejar el envío
document.querySelector('.glass-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Iniciar el estado de carga
    startLoading();

    const keyUnica = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const CORRECT_KEY = 'Tomate@hot.com';
    const CORRECT_PASSWORD = 'Tomate';
    const REDIRECT_URL = 'https://henrychansanchez21-glitch.github.io/App-de-videos/';
    
    // Simular un tiempo de carga (2.5 segundos)
    setTimeout(() => {
        if (keyUnica === CORRECT_KEY && password === CORRECT_PASSWORD) {
            stopLoading(true); // Detener carga con éxito
            setTimeout(() => { // Pequeño retraso antes de la redirección para ver el mensaje de éxito
                alert('Inicio de sesión exitoso. Redirigiendo...');
                window.location.href = REDIRECT_URL;
            }, 500); // 0.5 segundos después del mensaje de éxito
        } else {
            stopLoading(false); // Detener carga con fallo
            alert('Error: KEY UNICA o CONTRASEÑA incorrecta.');
        }
    }, 2500); // Aumentado a 2.5 segundos para apreciar la animación
});
