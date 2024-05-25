function calcularLetraDNI() {
    const dni = document.getElementById('dni').value;

    if (Number(dni) !== Number(dni) || dni.length < 7 || dni.length > 8) {
        alert("Por favor, introduce un número de DNI válido (7 u 8 números).");
        return false;
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = parseInt(dni, 10);
    const indice = numero % 23;
    const letra = letras.charAt(indice);

    
    const resultado = "La letra correspondiente a tu DNI es: " + letra;
    document.getElementById('resultado').innerHTML = resultado;

    return false; 
}

