function calcular() {
    // Captación de datos
    let radio = parseFloat(document.getElementById('radio').value);
    let resultados = "";



    // Cálculo
    let longitud = 2 * Math.PI * radio;
    let area = Math.PI * Math.pow(radio, 2);
    let volumen = (4/3) * Math.PI * Math.pow(radio, 3);

    
    resultados += "<h3 class='text-center'>Resultados</h3>";
    resultados += "<p><strong>Longitud de la circunferencia:</strong> " + longitud.toFixed(2) + "</p>";
    resultados += "<p><strong>Área del círculo:</strong> " + area.toFixed(2) + "</p>";
    resultados += "<p><strong>Volumen de la esfera:</strong> " + volumen.toFixed(2) + "</p>";

    document.getElementById('resultados').innerHTML = resultados;
    return false; 
}
