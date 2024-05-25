document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBtn').addEventListener('click', calcularMaximoComunDivisor);

    function calcularMaximoComunDivisor() {
        const valor1 = document.getElementById("input1").value;
        const valor2 = document.getElementById("input2").value;
        const resultado = document.getElementById("resultado");
        const errorInput1 = document.getElementById("errorInput1");
        const errorInput2 = document.getElementById("errorInput2");

        errorInput1.textContent = "";
        errorInput2.textContent = "";
        resultado.textContent = "";

        const enteroPositivo = /^[1-9]\d*$/;

        if (!valor1 || !valor2) {
            if (!valor1) errorInput1.textContent = "Por favor, introduce un número.";
            if (!valor2) errorInput2.textContent = "Por favor, introduce un número.";
            return;
        }

        if (!enteroPositivo.test(valor1) || !enteroPositivo.test(valor2)) {
            if (!enteroPositivo.test(valor1)) errorInput1.textContent = "Por favor, introduce un número entero positivo.";
            if (!enteroPositivo.test(valor2)) errorInput2.textContent = "Por favor, introduce un número entero positivo.";
            return;
        }

        const numero1 = parseInt(valor1);
        const numero2 = parseInt(valor2);

        let a = numero1;
        let b = numero2;

        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }

        document.getElementById("resultado").innerHTML = "El MCD es: " + a;
    }
});
