function validarTransicaoStatus(statusAtual, novoStatus) {
    if (statusAtual === "PENDENTE") {
        return novoStatus === "PAGO" || novoStatus === "CANCELADO";
    }
    
    if (statusAtual === "PAGO") {
        return novoStatus === "ENVIADO" || novoStatus === "CANCELADO";
    }
    
    if (statusAtual === "ENVIADO") {
        return novoStatus === "ENTREGUE";
    }

    return false;
}

console.log("\n--- Módulo de Pedidos ---");
console.log("Teste 1 (PENDENTE -> PAGO):", validarTransicaoStatus("PENDENTE", "PAGO"));
console.log("Teste 2 (PENDENTE -> ENTREGUE):", validarTransicaoStatus("PENDENTE", "ENTREGUE"));
console.log("Teste 3 (PAGO -> ENVIADO):", validarTransicaoStatus("PAGO", "ENVIADO"));
console.log("Teste 4 (PAGO -> PENDENTE):", validarTransicaoStatus("PAGO", "PENDENTE"));
console.log("Teste 5 (ENVIADO -> ENTREGUE):", validarTransicaoStatus("ENVIADO", "ENTREGUE"));
console.log("Teste 6 (ENTREGUE -> CANCELADO):", validarTransicaoStatus("ENTREGUE", "CANCELADO"))