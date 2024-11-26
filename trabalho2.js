function gerarNumeros(quantidade) {
    return Array.from({length: 60}, (_, i) => i + 1)
        .sort(() => Math.random() - 0.5)
        .slice(0, quantidade);
}

console.log(gerarNumeros(6));  // Para mega-sena

console.log(gerarNumeros(50)); // Para 50 números