document.getElementById("botao").addEventListener("click", calcular)

function calcular() {
    var selectedValue = document.getElementById("materia").value;

    var media1 = document.querySelector('input#media-primeiro-trimestre');
    var media2 = document.querySelector('input#media-segundo-trimestre');
    var media3 = document.querySelector('input#media-terceiro-trimestre');

    var med1 = Number(media1.value);
    var med2 = Number(media2.value);
    var med3 = Number(media3.value);

    var resposta = document.querySelector('h1#resposta');

    if (med1 <= 0 || med2 <= 0 || med3 <= 0) {
        alert('[ERRO] Média inválida! Insira os dados e tente novamente.');
    } else { 
        var res = ((med1 * 3) + (med2 * 3) + (med3 * 4)) / 10;
        
        if (res < 6) {
            resposta.innerHTML = `Sua média em ${selectedValue[0].toUpperCase() + selectedValue.substring(1)} é de ${res.toFixed(2)}! Boa sorte na recuperação!`;
        } else {
            resposta.innerHTML = `Sua média em ${selectedValue[0].toUpperCase() + selectedValue.substring(1)} é de ${res.toFixed(2)}! Parabéns! Você está aprovado.`;
        }
    }

    document.getElementById('botao').value = "Calcular de novo?"
    document.getElementById('botao').addEventListener("click", refresh)

    function refresh(){
        location.reload();
    }
}
