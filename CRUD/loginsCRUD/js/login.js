document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (!validarLogin()) {
            event.preventDefault();
        }
    });
});

function mostrarError(campoId, mensajeError) {
    const campo = document.getElementById(campoId);
    const errorElement = campo.nextElementSibling; // Busca el elemento hermano siguiente para mostrar el mensaje de error
    errorElement.textContent = mensajeError;
}

function limpiarError(campoId) {
    const campo = document.getElementById(campoId);
    const errorElement = campo.nextElementSibling; // Busca el elemento hermano siguiente que contiene el mensaje de error
    errorElement.textContent = ''; // Limpia el mensaje de error
}

function validarCampoNoVacio(campoId, mensajeError) {
    const valorCampo = document.getElementById(campoId).value.trim();
    if (valorCampo === '') {
        mostrarError(campoId, mensajeError);
        return false;
    } else {
        limpiarError(campoId);
        return true;
    }
}

function validarLongitud(campoId, longitudMinima, longitudMaxima, mensajeError) {
    const valorCampo = document.getElementById(campoId).value.trim();
    if (valorCampo.length < longitudMinima || valorCampo.length > longitudMaxima) {
        mostrarError(campoId, mensajeError);
        return false;
    } else {
        limpiarError(campoId);
        return true;
    }
}

function validarFormatoContrasena(campoId, mensajeError) {
    const contrasena = document.getElementById(campoId).value;
    const formatoValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/.test(contrasena);
    if (!formatoValido) {
        mostrarError(campoId, mensajeError);
        return false;
    } else {
        limpiarError(campoId);
        return true;
    }
}

function validarLogin() {
    const usuarioValido = validarCampoNoVacio('usuario', 'El usuario no puede estar vacío.') &&
        validarLongitud('usuario', 8, 12, 'El usuario debe tener entre 8 y 12 caracteres.');

    const contrasenaValida = validarCampoNoVacio('contrasena', 'La contraseña no puede estar vacía.') &&
        validarLongitud('contrasena', 8, 15, 'La contraseña debe tener entre 8 y 15 caracteres.') &&
        validarFormatoContrasena('contrasena', 'La contraseña debe incluir al menos una mayúscula, una minúscula y un dígito.');

    return usuarioValido && contrasenaValida;
}

