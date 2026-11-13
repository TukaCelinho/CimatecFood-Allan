function calcularTempoEntrega(distanciaKm, ehExpress) {
    if (distanciaKm <= 0) {
        return -1;
    }

    let tempoTotal = 15 + (distanciaKm * 5);

    if (ehExpress === true) {
        tempoTotal = tempoTotal * 0.5;
    }

    return tempoTotal;
}

console.log("\n--- Módulo de Logística ---");
console.log("Teste 1 (Distância inválida):", calcularTempoEntrega(0, false));
console.log("Teste 2 (Normal 10km):", calcularTempoEntrega(10, false));
console.log("Teste 3 (Express 10km):", calcularTempoEntrega(10, true));