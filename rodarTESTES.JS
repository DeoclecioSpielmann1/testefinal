function testar(nomeDoTeste, funcaoDeTeste) {
    const resultadosDiv = document.getElementById("testes-resultados");
    try {
        funcaoDeTeste();
        resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
    } catch (erro) {
        resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
    }
}

document.getElementById("rodarTestesComponentBtn").addEventListener("click", () => {
    document.getElementById("testes-resultados").textContent = "";
    if (typeof runComponentTests === "function") {
        runComponentTests();
    } else {
        resultadosDiv.textContent = "❌ Função runComponentTests() não encontrada!";
    }
});

document.getElementById("rodarTestesUnitBtn").addEventListener("click", () => {
    document.getElementById("testes-resultados").textContent = "";
    if (typeof runUnitTests === "function") {
        runUnitTests();
    } else {
        resultadosDiv.textContent = "❌ Função runUnitTests() não encontrada!";
    }
});



function runUnitTests() {
  testar("UNIT - Cadastro de novo veículo", () => {
    veiculos.length = 0;
    document.getElementById("marca").value = "Honda";
    document.getElementById("modelo").value = "Civic";
    document.getElementById("placa").value = "XYZ1234";
    document.getElementById("status").value = "Disponível";
    cadastrarOuAtualizarVeiculo();
    if (veiculos.length !== 1) throw new Error("Veículo não cadastrado");
  });

  testar("UNIT - Exclusão de veículo", () => {
    veiculos.length = 1;
    veiculos[0] = { marca: "VW", modelo: "Gol", placa: "QQQ0000", status: "Disponível" };
    removerVeiculo(0);
    if (veiculos.length !== 0) throw new Error("Veículo não foi removido");
  });
}

function runComponentTests() {
  testar("COMPONENTE - Inputs e botões existem", () => {
    ["marca", "modelo", "placa", "status"].forEach(id => {
      if (!document.getElementById(id)) throw new Error(`Campo ${id} não encontrado`);
    });
    if (!document.getElementById("tabelaVeiculos")) throw new Error("Tabela não encontrada");
  });

  testar("COMPONENTE - Cadastro reflete na tabela", () => {
    veiculos.length = 0;
    document.getElementById("marca").value = "Fiat";
    document.getElementById("modelo").value = "Mobi";
    document.getElementById("placa").value = "ZZZ1234";
    document.getElementById("status").value = "Alugado";
    cadastrarOuAtualizarVeiculo();
    const linhas = document.querySelectorAll("#tabelaVeiculos tbody tr");
    if (linhas.length !== 1) throw new Error("Tabela não atualizada");
  });
}
