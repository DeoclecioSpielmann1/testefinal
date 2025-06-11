<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Locadora de Veículos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        header {
            background-color: #1e90ff;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .container {
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .vehicle {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .vehicle h3 {
            margin-top: 0;
        }

        .rent-btn {
            background-color: #1e90ff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .rent-btn:hover {
            background-color: #0f78d4;
        }

        .message {
            margin-top: 10px;
            color: green;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <header>
        <h1>Locadora de Veículos</h1>
    </header>
    <div class="container">
        <div class="vehicle">
            <h3>Fiat Uno - 2020</h3>
            <p>R$ 100,00 por dia</p>
            <button class="rent-btn" onclick="alugarVeiculo('Fiat Uno')">Alugar</button>
            <div class="message" id="msg-Fiat Uno"></div>
        </div>
        <div class="vehicle">
            <h3>Chevrolet Onix - 2022</h3>
            <p>R$ 150,00 por dia</p>
            <button class="rent-btn" onclick="alugarVeiculo('Chevrolet Onix')">Alugar</button>
            <div class="message" id="msg-Chevrolet Onix"></div>
        </div>
        <div class="vehicle">
            <h3>Renault Kwid - 2021</h3>
            <p>R$ 120,00 por dia</p>
            <button class="rent-btn" onclick="alugarVeiculo('Renault Kwid')">Alugar</button>
            <div class="message" id="msg-Renault Kwid"></div>
        </div>
    </div>

    <script>
        function alugarVeiculo(nomeVeiculo) {
            const id = `msg-${nomeVeiculo}`;
            const mensagemDiv = document.getElementById(id);
            mensagemDiv.textContent = `Você alugou o veículo: ${nomeVeiculo}`;
            setTimeout(() => {
                mensagemDiv.textContent = "";
            }, 5000);
        }

        // Função de teste genérica
        function testar(titulo, fn) {
            try {
                fn();
                console.log(`✅ ${titulo}`);
            } catch (erro) {
                console.error(`❌ ${titulo}\n   ${erro.message}`);
            }
        }

        // Testes de componentes
        function runComponentTests() {
            testar("COMPONENTE - Container principal deve existir", () => {
                const container = document.querySelector(".container");
                if (!container) throw new Error("Container principal não encontrado.");
            });

            testar("COMPONENTE - Deve haver 3 botões de aluguel", () => {
                const botoes = document.querySelectorAll(".rent-btn");
                if (botoes.length !== 3) throw new Error("Número incorreto de botões.");
            });

            testar("COMPONENTE - Deve exibir mensagem ao alugar veículo", () => {
                const nome = "Fiat Uno";
                alugarVeiculo(nome);
                const id = `msg-${nome}`;
                const div = document.getElementById(id);
                if (!div || !div.textContent.includes("Você alugou")) {
                    throw new Error("Mensagem não exibida corretamente.");
                }
            });

            testar("COMPONENTE - Mensagem deve sumir após 5 segundos", (done) => {
                const nome = "Chevrolet Onix";
                alugarVeiculo(nome);
                const id = `msg-${nome}`;
                const div = document.getElementById(id);
                setTimeout(() => {
                    if (div.textContent !== "") {
                        throw new Error("Mensagem não foi apagada.");
                    }
                }, 5100);
            });
        }

        window.onload = runComponentTests;
    </script>
</body>

</html>
