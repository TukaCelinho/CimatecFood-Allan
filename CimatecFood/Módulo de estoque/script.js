function verificarEstoque(qtdDesejada, qtdEstoque) {
    if (qtdDesejada <= 0) {
        return "QUANTIDADE_INVALIDA";
    }

    if (qtdEstoque >= qtdDesejada) {
        return "DISPONIVEL";
    } else {
        return "INDISPONIVEL";
    }
}

console.log("\n--- Módulo de Estoque ---");
console.log("Teste 1 (Qtd inválida):", verificarEstoque(0, 10));
console.log("Teste 2 (Disponível):", verificarEstoque(5, 10));
console.log("Teste 3 (Limite exato):", verificarEstoque(10, 10));
console.log("Teste 4 (Indisponível):", verificarEstoque(15, 10));