// Simulação de dados históricos em vez de carregar de um CSV
const historicoAlugueis = [
    { data: '2024-08-01', clima: 'sol', quantidade: 20 },
    { data: '2024-08-02', clima: 'chuvoso', quantidade: 15 },
    { data: '2024-08-03', clima: 'sol', quantidade: 25 },
    { data: '2024-08-04', clima: 'nublado', quantidade: 18 }
];

// Função para prever aluguéis
function preverAlugueis() {
    const data = document.getElementById('data').value;
    const clima = document.getElementById('clima').value;
    
    if (!data || !clima) {
        alert('Por favor, insira todos os dados.');
        return;
    }

    // Filtrar dados históricos para encontrar registros com o mesmo clima
    const registros = historicoAlugueis.filter(registro => registro.clima === clima);
    
    if (registros.length === 0) {
        document.getElementById('resultado').innerText = 'Nenhum dado histórico disponível para o clima selecionado.';
        return;
    }
    
    // Calcular a média de aluguéis para o clima selecionado
    const soma = registros.reduce((acc, registro) => acc + registro.quantidade, 0);
    const media = soma / registros.length;
    
    // Mostrar a previsão
    document.getElementById('resultado').innerText = `A previsão de aluguéis para ${data} com clima ${clima} é de aproximadamente ${Math.round(media)} aluguéis.`;
}
