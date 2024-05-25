function verificarPalindromo() {
    const cadena = document.getElementById('cadena').value.toLowerCase().replace(/[^a-z]/g, '');

    if (cadena.length === 0) {
        alert("La cadena no debe estar vacía.");
        return false;
    }

    const inversa = cadena.split('').reverse().join('');

    if (cadena === inversa) {
        document.getElementById('resultado').innerHTML = 'La cadena es un palíndromo.';
    } else {
        const palindromo = cadena + inversa;
        document.getElementById('resultado').innerHTML = "La cadena no es un palíndromo. El palíndromo correspondiente es: " + palindromo;
    }

    return false;
}
