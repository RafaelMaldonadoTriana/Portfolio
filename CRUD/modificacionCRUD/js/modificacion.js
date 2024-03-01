// Archivo: validaciones.js

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var correo = document.getElementById('correo').value;
    var departamento = document.getElementById('departamento').value;

    if (nombre.trim() === '' || apellido.trim() === '' || edad.trim() === '' || correo.trim() === '' || departamento.trim() === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }

    // Puedes agregar más validaciones según tus necesidades

    return true;
}
