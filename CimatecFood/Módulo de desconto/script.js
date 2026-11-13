function calcularDescontoCupom(valorTotal, cupom) {
    if (valorTotal <= 0) {
        return 0;
    }

    if (cupom === "CIMATEC10") {
        return valorTotal * 0.90;
    } 
    
    if (cupom === "ALUNOOB5") {
        let valorComDesconto = valorTotal - 15.00;
        return valorComDesconto < 0 ? 0 : valorComDesconto;
    }

    return valorTotal;
}

console.log("--- Módulo de Descontos ---");
console.log("Teste 1 (Valor <= 0):", calcularDescontoCupom(0, "CIMATEC10"));
console.log("Teste 2 (Cupom 10%):", calcularDescontoCupom(100, "CIMATEC10"));
console.log("Teste 3 (Cupom Fixo):", calcularDescontoCupom(50, "ALUNOOB5"));
console.log("Teste 4 (Cupom Fixo negativando):", calcularDescontoCupom(10, "ALUNOOB5"));
console.log("Teste 5 (Cupom inválido):", calcularDescontoCupom(50, "OUTROCUPOM"));