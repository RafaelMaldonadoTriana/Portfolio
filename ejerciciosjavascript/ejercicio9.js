function mostrarNombreMes() {
    const numeroMes = parseInt(document.getElementById('mes').value);

    if (numeroMes < 1 || numeroMes > 12) {
        alert("Por favor, selecciona un mes válido.");
        return false;
    }

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const nombreMes = meses[numeroMes - 1];
    document.getElementById('resultado').innerText = "El mes seleccionado es: " + nombreMes;
    return false;
}

