const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundo'); 

const dia = document.querySelector('#dia');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');

const dia2 = document.querySelector('#dia2');
const mes2 = document.querySelector('#mes2');
const ano2 = document.querySelector('#ano2');

const mensagem = document.querySelector('#mensagem');
const bolinha = document.querySelector('#status-bolinha');

function atualizarRelogio() {
    const agora = new Date();

    let h = agora.getHours();
    let min = agora.getMinutes();
    let s = agora.getSeconds();

    let d = agora.getDate();
    let m = agora.getMonth() + 1;
    let a = agora.getFullYear();

    if (h < 10) h = '0' + h;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;

    horas.innerText = h;
    minutos.innerText = min;
    segundos.innerText = s;

    dia.innerText = d;
    mes.innerText = m;
    ano.innerText = a;

    dia2.innerText = d;
    mes2.innerText = m;
    ano2.innerText = a;

    if (h >= 5 && h < 12) {
        mensagem.innerText = 'Bom dia!';
    } else if (h >= 12 && h < 18) {
        mensagem.innerText = 'Boa tarde!';
    } else {
        mensagem.innerText = 'Boa noite!';
    }

    bolinha.classList.add('piscar');
setTimeout(() => bolinha.classList.remove('piscar'), 200);
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);