document.addEventListener('DOMContentLoaded', function () {
    // Supongamos que tienes un objeto 'datos' con la información de tus tablas
    const datos = [
        { nombre: 'José', apellido: 'Ruiz', departamento: 'Administración' },
        // Agrega más datos según sea necesario
    ];

    // Obtén el tbody de la tabla donde se mostrarán los datos
    const tablaBody = document.getElementById('tablaDatos');

    // Itera sobre los datos y crea las filas dinámicamente
    datos.forEach(dato => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${dato.nombre}</td>
            <td>${dato.apellido}</td>
            <td>${dato.departamento}</td>
        `;
        tablaBody.appendChild(fila);
    });
});
function eliminarDatos() {
    // Ventana de confirmación
    var confirmacion = window.confirm("¿Está seguro de querer eliminar este registro?");

    // Si el usuario hace clic en "Aceptar", realiza la eliminación
    if (confirmacion) {
        // Aquí puedes agregar la lógica para eliminar los datos
        // Por ejemplo, podrías eliminar la fila de la tabla
        // document.getElementById("filaAEliminar").remove();
        alert("Datos eliminados correctamente");
    } else {
        // Si el usuario hace clic en "Cancelar", no hagas nada
        alert("Operación cancelada");
    }
}
