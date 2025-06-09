// Verifica se todos os campos e botões principais existem no DOM
testar("COMPONENTE - Elementos de entrada e botão existem", () => {
  const campos = ["marca", "modelo", "placa", "status", "filtroPlaca", "filtroStatus"];
  campos.forEach(id => {
    if (!document.getElementById(id)) throw new Error(`Elemento "${id}" não encontrado`);
  });

  const tabela = document.getElementById("tabelaVeiculos");
  if (!tabela) throw new Error("Tabela de veículos não encontrada");

  const botoes = document.getElementsByTagName("button");
  if (botoes.length === 0) throw new Error("Nenhum botão encontrado");
});

// Verifica se o botão de cadastro insere uma nova linha na tabela
testar("COMPONENTE - Cadastro atualiza a tabela", () => {
  veiculos.length = 0;
  document.getElementById("marca").value = "Chevrolet";
  document.getElementById("modelo").value = "Onix";
  document.getElementById("placa").value = "DEF5678";
  document.getElementById("status").value = "Disponível";
  cadastrarOuAtualizarVeiculo();

  const linhas = document.querySelectorAll("#tabelaVeiculos tbody tr");
  if (linhas.length !== 1) throw new Error("Tabela não foi atualizada corretamente");
});

// Verifica se os filtros ocultam e exibem corretamente a tabela
testar("COMPONENTE - Filtro por status funciona", () => {
  veiculos.length = 0;
  veiculos.push({ marca: "Fiat", modelo: "Uno", placa: "AAA1111", status: "Alugado" });
  veiculos.push({ marca: "Toyota", modelo: "Etios", placa: "BBB2222", status: "Disponível" });

  document.getElementById("filtroStatus").value = "Disponível";
  atualizarTabela();

  const linhas = document.querySelectorAll("#tabelaVeiculos tbody tr");
  if (linhas.length !== 1) throw new Error("Filtro por status não funcionou");
  if (!linhas[0].textContent.includes("Disponível")) throw new Error("Linha exibida não corresponde ao filtro");
});
