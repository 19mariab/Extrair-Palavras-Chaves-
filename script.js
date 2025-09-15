import {PALAVRAS_RUINS} from "/palavrasruins";

const botaoMostraPalavra = document.querySelector ('#botao-palavrachave');

botaoMostraPalavra.addEventListener ('click', mostraPalavrasChave);

function mostraPalavrasChave () {
    const texto = document.querySelector ('entrada-de-texto').value;
    const campoResultado = document.querySelector ('#resultado-palavrachave');
    const palavrasChave = processaTexto (texto);

    campoResultado.textContent =palavrasChave.join (",");
}

function processaTexto(texto) {
 let palavras= texto.split(/\P{L}+/u);

 for (let i in palavras){
    palavras[i] =palavras[i].toLowerCase();
}

palavras = tiraPalavrasRuins(palavras);

const frequencias = contaFrequencia(palavras);
let ordenadas =Objeto.keys(frequencias).sort(ordenaPalavra);

function ordenaPalavra(p1,p2){
    return frequencias[p2] - frequencias[p1];
}

 }