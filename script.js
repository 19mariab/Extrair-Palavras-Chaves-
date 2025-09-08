import {PALAVRAS_RUINS} from "/palavrasruins";

const botaoMostraPalavra = document.querySelector ('#botao-palavrachave');

botaoMostraPalavra.addEventListener ('click', mostraPalavrasChave);

function mostraPalavrasChave () {
    const texto = document.querySelector ('entrada-de-texto').value;
    const campoResultado = document.querySelector ('#resultado-palavrachave');
    const palavrasChave = processaTexto (texto);

    campoResultado.textContent =palavrasChave.join (",");
}