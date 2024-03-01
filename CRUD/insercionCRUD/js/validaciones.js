function validarFormulario() {
    // Validación campo1: No vacío
    var campo1 = document.getElementById('nombre').value;
    if (campo1.trim() === '') {
        alert('Campo Nombre no puede estar vacío.');
        return false;
    }

    // Validación campo2: Longitud mínima 1 caracteres
    var campo2 = document.getElementById('apellido').value;
    if (campo2.length < 1) {
        alert('Campo Apellido debe tener al menos 1 caracteres.');
        return false;
    }


    // Validación campoNumerico: Valor entre 1 y 100
    var campoNumerico = document.getElementById('edad').value;
    if (isNaN(campoNumerico) || campoNumerico < 1 || campoNumerico > 100) {
        alert('Campo Numérico debe ser un valor entre 1 y 100.');
        return false;
    }

    // Validación correo electrónico
    var correo = document.getElementById('correo').value;
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        alert('Correo electrónico no válido.');
        return false;
    }

    // Validación departamento: Debe seleccionar una opción válida
    var departamento = document.getElementById('departamento').value;
    if (departamento === '' || departamento === '0') {
        alert('Seleccione un departamento válido.');
        return false;
    }

    // Validación género: Debe seleccionar al menos una opción
    var generoSeleccionado = false;
    var generoOpciones = document.getElementsByName('genero');
    for (var i = 0; i < generoOpciones.length; i++) {
        if (generoOpciones[i].checked) {
            generoSeleccionado = true;
            break;
        }
    }
    if (!generoSeleccionado) {
        alert('Seleccione una opción de género.');
        return false;
    }

    // Validación casilla de verificación
    var recibirInfo = document.getElementById('recibirInfo').checked;
    if (!recibirInfo) {
        alert('Marque la casilla para recibir información.');
        return false;
    }

    // Si todas las validaciones pasan, se envía el formulario
    return true;
}
