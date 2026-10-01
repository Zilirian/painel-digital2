const pergunta1 = document.getElementById("pergunta1");
const pergunta2 = document.getElementById("pergunta2");
const pergunta3 = document.getElementById("pergunta3");
const resposta = document.getElementById("resposta");
const btn = document.getElementById("btn");

function calcularValorFinal() {
    const preco = Number(pergunta1.value.replace(",", "."));
    const quantidade = Number(pergunta2.value);
    const desconto = Number(pergunta3.value);

    if (!pergunta1.value || !pergunta2.value || !pergunta3.value) {
        resposta.textContent = "Preencha todos os campos!";
        return;
    }

    if (Number.isNaN(preco) || Number.isNaN(quantidade) || Number.isNaN(desconto)) {
        resposta.textContent = "Digite apenas números válidos.";
        return;
    }

    if (preco < 0 || quantidade <= 0 || desconto < 0) {
        resposta.textContent = "Valores inválidos. Revise os dados.";
        return;
    }

    const totalSemDesconto = preco * quantidade;
    const valorFinal = totalSemDesconto * (1 - desconto / 100);

    resposta.textContent = `Valor final: ${valorFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}`;
}

btn.addEventListener("click", calcularValorFinal);