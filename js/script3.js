document.getElementById('botao').addEventListener("click", calcule)

function calcule(){
    var selectedValue = document.getElementById("materia").value;

    var media1 = document.querySelector('input#media-primeiro-trimestre')
    var media2 = document.querySelector('input#media-segundo-trimestre')

    var med1 = Number(media1.value)
    var med2 = Number(media2.value)

    var resposta = document.querySelector('h1#resposta')

    if(med1 <= 0 || med2 <= 0){
        alert('[ERRO] Média inválida! Insira os dados e tente novamente.')
    } else{
        var res = ((6 - (med1 * 0.3) - (med2 * 0.3)) / 4) * 10
    }

    if(res <= 3){
        resposta.innerHTML = `Faltam ${res.toFixed(1)} ponto(s) em ${selectedValue[0].toUpperCase()+selectedValue.substring(1)}! Parece que o Papai Noel virá bem gordinho para você...`  
    } else if (res > 3 && res <= 5){
        resposta.innerHTML = `Faltam ${res.toFixed(1)} ponto(s) em ${selectedValue[0].toUpperCase()+selectedValue.substring(1)}! Bom trabalho! Continua te esforçando!`
    } else if (res > 5 && res <= 7){
        resposta.innerHTML = `Faltam ${res.toFixed(1)} ponto(s) em ${selectedValue[0].toUpperCase()+selectedValue.substring(1)}! Vamos lá! Teu esforço valerá a pena!`
    } else{
        resposta.innerHTML = `Faltam ${res.toFixed(1)} ponto(s) em ${selectedValue[0].toUpperCase()+selectedValue.substring(1)}! [Alerta vermelho!] Te esforça que ainda tem chances!`
    }
}