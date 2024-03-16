function mostrarError(campoId, mensajeError) {
    const errorElement = document.getElementById(campoId + '-error');
    errorElement.textContent = mensajeError;
    errorElement.classList.add('mostrar'); 
}

function limpiarError(campoId) {
    const errorElement = document.getElementById(campoId + '-error');
    errorElement.textContent = '';
    errorElement.classList.remove('mostrar'); 
}

function validarFormulario() {
    var campo1 = document.getElementById('nombre').value;
    if (campo1.trim() === '') {
        mostrarError('nombre', 'Campo Nombre no puede estar vacío.');
        return false;
    } else {
        limpiarError('nombre');
    }

    var campo2 = document.getElementById('apellido').value;
    if (campo2.trim() === '') {
        mostrarError('apellido', 'Campo Apellido no puede estar vacío.');
        return false;
    } else {
        limpiarError('apellido');
    }

    var campoNumerico = document.getElementById('edad').value;
    if (isNaN(campoNumerico) || campoNumerico < 1 || campoNumerico > 100) {
        mostrarError('edad', 'Campo Edad debe ser un valor entre 1 y 100.');
        return false;
    } else {
        limpiarError('edad');
    }

    var correo = document.getElementById('correo').value;
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        mostrarError('correo', 'Correo electrónico no válido.');
        return false;
    } else {
        limpiarError('correo');
    }

    var departamento = document.getElementById('departamento').value;
    if (departamento === '' || departamento === '0') {
        mostrarError('departamento', 'Seleccione un departamento válido.');
        return false;
    } else {
        limpiarError('departamento');
    }

    var generoSeleccionado = false;
    var generoOpciones = document.getElementsByName('genero');
    for (var i = 0; i < generoOpciones.length; i++) {
        if (generoOpciones[i].checked) {
            generoSeleccionado = true;
            break;
        }
    }
    if (!generoSeleccionado) {
        mostrarError('genero', 'Seleccione una opción de género.');
        return false;
    } else {
        limpiarError('genero');
    }

    return true;
}
