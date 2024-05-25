function calcularDivision() {
    const dividendo = parseInt(document.getElementById('dividendo').value);
    const divisor = parseInt(document.getElementById('divisor').value);

    if (!(Number.isInteger(dividendo) && Number.isInteger(divisor) && dividendo >= 0 && divisor > 0)) {
        alert("Por favor, introduce números enteros positivos.");
        return false;
    }

    const cociente = dividendo / divisor | 0; 
    const resto = dividendo % divisor;

    document.getElementById('resultado').innerHTML = "Cociente: " + cociente + ", Resto: " + resto;
    return false;
}
