document.addEventListener('DOMContentLoaded', function () {
    const tablaBody = document.getElementById('tablaDatos');

    function eliminarFila(botonEliminar) {
        const fila = botonEliminar.closest('tr');
        const confirmacion = window.confirm("¿Está seguro de querer eliminar este registro?");
        if (confirmacion) {
            fila.remove();
            alert("Datos eliminados correctamente");
        } else {
            alert("Operación cancelada");
        }
    }

    function abrirModalEditar(botonEditar) {
        const modal = document.getElementById('modalEditar');
        const fila = botonEditar.closest('tr');
        const celdas = fila.querySelectorAll('td');
        document.getElementById('nombreEdit').value = celdas[0].textContent;
        document.getElementById('apellidoEdit').value = celdas[1].textContent;
        document.getElementById('departamentoEdit').value = celdas[2].textContent;
        modal.style.display = 'block';

        // Al abrir la ventana modal, guardamos la fila que se está editando
        modal.dataset.editingRow = fila.rowIndex;
    }

    function cerrarModalEditar() {
        const modal = document.getElementById('modalEditar');
        modal.style.display = 'none';
    }

    function guardarEdicion() {
        const nuevoNombre = document.getElementById('nombreEdit').value;
        const nuevoApellido = document.getElementById('apellidoEdit').value;
        const nuevoDepartamento = document.getElementById('departamentoEdit').value;

        // Obtenemos la fila que se está editando
        const filaIndex = parseInt(document.getElementById('modalEditar').dataset.editingRow);
        const filaEditada = tablaBody.rows[filaIndex];

        // Actualizamos el contenido de las celdas con los nuevos valores
        filaEditada.cells[0].textContent = nuevoNombre;
        filaEditada.cells[1].textContent = nuevoApellido;
        filaEditada.cells[2].textContent = nuevoDepartamento;

        cerrarModalEditar(); // Cerrar la ventana modal después de guardar los cambios
        alert("Cambios guardados correctamente");
        return false;
    }

    // Agregar listeners a los botones de eliminar y editar
    tablaBody.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'BUTTON') {
            if (event.target.textContent === 'Eliminar') {
                eliminarFila(event.target);
            } else if (event.target.textContent === 'Editar') {
                abrirModalEditar(event.target);
            }
        }
    });
});

