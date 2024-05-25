function determinarTipoTriangulo() {
    // Captación de datos
    let lado1 = parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value);
    let lado3 = parseFloat(document.getElementById('lado3').value);
    let resultado = "";

    

    
    if (lado1 === lado2 && lado2 === lado3) {
        resultado = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        resultado = "El triángulo es isósceles.";
    } else {
        resultado = "El triángulo es escaleno.";
    }


    document.getElementById('resultado').innerHTML = resultado;
    return false; 
}
