function testar(nome, fn) {
  try {
    fn();
    console.log(`✅ ${nome}`);
  } catch (e) {
    console.error(`❌ ${nome}`);
    console.error(e);
  }
}

testar("UNIT - Cadastro de novo veículo", () => {
  veiculos.length = 0; // resetar lista
  document.getElementById("marca").value = "Honda";
  document.getElementById("modelo").value = "Civic";
  document.getElementById("placa").value = "XYZ1234";
  document.getElementById("status").value = "Disponível";
  cadastrarOuAtualizarVeiculo();
  if (veiculos.length !== 1) throw new Error("Veículo não cadastrado");
});

testar("UNIT - Edição de veículo existente", () => {
  veiculos[0] = { marca: "Fiat", modelo: "Palio", placa: "ABC1234", status: "Alugado" };
  editarVeiculo(0);
  if (document.getElementById("marca").value !== "Fiat") throw new Error("Marca não preenchida corretamente");
  if (document.getElementById("status").value !== "Alugado") throw new Error("Status não preenchido corretamente");
});

testar("UNIT - Exclusão de veículo", () => {
  veiculos.length = 1;
  veiculos[0] = { marca: "VW", modelo: "Gol", placa: "QQQ0000", status: "Disponível" };
  removerVeiculo(0);
  if (veiculos.length !== 0) throw new Error("Veículo não foi removido");
});
