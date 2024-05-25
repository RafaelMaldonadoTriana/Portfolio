function verificarCadena() {
    const cadena = document.getElementById('cadena').value;

    if (!/[a-zA-Z]/.test(cadena)) {
        alert("La cadena debe contener al menos una letra.");
        return false;
    }

    let resultado = '';

    if (cadena === cadena.toUpperCase()) {
        resultado = 'La cadena está en MAYÚSCULAS.';
    } else if (cadena === cadena.toLowerCase()) {
        resultado = 'La cadena está en minúsculas.';
    } else {
        resultado = 'La cadena está en mayúsculas y minúsculas.';
    }

    document.getElementById('resultado').innerHTML = resultado;
    return false;
}
