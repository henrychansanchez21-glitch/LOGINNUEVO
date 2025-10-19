// Función para mostrar/ocultar contraseña al hacer clic en el icono
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        // Cambia a tipo texto (visible)
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash'); // Ocultar
        toggleIcon.classList.add('fa-eye'); // Mostrar
    } else {
        // Cambia a tipo contraseña (oculta)
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye'); // Mostrar
        toggleIcon.classList.add('fa-eye-slash'); // Ocultar
    }
}
