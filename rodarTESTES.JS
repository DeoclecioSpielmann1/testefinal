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


@@ -1,43 +1,27 @@
document.getElementById("rodarTestesUnitBtn").addEventListener("click", () => {
function testar(nomeDoTeste, funcaoDeTeste) {
    const resultadosDiv = document.getElementById("testes-resultados");
    resultadosDiv.textContent = ""

    // Redefine a função de teste
    window.testar = function (nomeDoTeste, funcaoDeTeste) {
        try {
            funcaoDeTeste();
            resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
        } catch (erro) {
            resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
        }
    };

    // Chama os testes definidos externamente
    if (typeof runUnitTests === "function") {
        runUnitTests();
    } else {
        resultadosDiv.textContent = "❌ Função runUnitTests() não encontrada!";
    try {
        funcaoDeTeste();
        resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
    } catch (erro) {
        resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
    }
});
}

document.getElementById("rodarTestesComponentBtn").addEventListener("click", () => {
    const resultadosDiv = document.getElementById("testes-resultados");
    resultadosDiv.textContent = ""

    // Redefine a função de teste
    window.testar = function (nomeDoTeste, funcaoDeTeste) {
        try {
            funcaoDeTeste();
            resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
        } catch (erro) {
            resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
        }
    };

    // Chama os testes definidos externamente,
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