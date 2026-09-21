const pergunta1 = document.querySelector("#pergunta1")
const pergunta2 = document.querySelector("#pergunta2")
const pergunta3 = document.querySelector("#pergunta3")

const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")

const resposta1 = document.querySelector("#resposta1")

button1.addEventListener("click", () => {
    let distancia = Number(pergunta1.value)
    let consumo = Number(pergunta2.value)
    let preco = Number(pergunta3.value)

    if (isNaN(distancia) || isNaN(consumo) || isNaN(preco) || distancia <= 0 || consumo <= 0 || preco <= 0) {
        resposta1.textContent = "Por favor, preencha todos os campos com números válidos e maiores que zero!"
    } else {
        let valor_final = (distancia / consumo) * preco
        resposta1.textContent = `O custo total de combustível para sua viagem é: R$ ${valor_final.toFixed(2)}`
    }
});

button2.addEventListener("click", () => {
    resposta1.textContent = ""
    pergunta1.value = ""
    pergunta2.value = ""
    pergunta3.value = ""

});