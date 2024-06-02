document.getElementById("botao").addEventListener("click", calcular);

function calcular() {
    var selectedValue = document.getElementById("materia").value;

    var mediaInputs = document.querySelectorAll('input[type="number"]');
    var medias = [];
    mediaInputs.forEach(function(input) {
        var value = Number(input.value);
        if (value < 0) {
            alert('[ERRO] Média inválida! Insira os dados e tente novamente.');
            return;
        }
        medias.push(value);
    });

    var resposta = document.querySelector('h1#resposta');

    if (medias.some(value => value < 0)) {
        alert('[ERRO] Média inválida! Insira os dados e tente novamente.');
    } else {
        var res = medias.reduce((acc, curr) => acc + curr, 0) / medias.length;

        if (res < 6) {
            resposta.innerHTML = `Sua média em ${selectedValue[0].toUpperCase() + selectedValue.substring(1)} é de ${res.toFixed(2)}! Boa sorte na recuperação!`;
        } else {
            resposta.innerHTML = `Sua média em ${selectedValue[0].toUpperCase() + selectedValue.substring(1)} é de ${res.toFixed(2)}! Livre de recuperação!`;
        }
    }

    document.getElementById('botao').value = "Calcular de novo?";
    document.getElementById('botao').addEventListener("click", refresh);

    function refresh() {
        location.reload();
    }
}

document.getElementById("adicionar-nota").addEventListener("click", adicionarNota);

function adicionarNota() {
    var adicionarNotaDiv = document.getElementById("adicionar-nota-div");

    var novoInputDiv = document.createElement('div');
    novoInputDiv.classList.add('media');

    var novoLabel = document.createElement('label');
    novoLabel.textContent = 'Outra nota:';
    novoInputDiv.appendChild(novoLabel);

    var novoInput = document.createElement('input');
    novoInput.setAttribute('type', 'number');
    novoInput.setAttribute('name', 'nova-nota');
    novoInput.setAttribute('min', '0');
    novoInput.setAttribute('max', '10');
    novoInputDiv.appendChild(novoInput);

    adicionarNotaDiv.insertBefore(novoInputDiv, adicionarNotaDiv.firstChild);
}
