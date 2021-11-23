// Definir um array de 20 palavras com menos de 10 letras cada;
// Fazer com que 3 palavras sejam colocadas aleatóriamente em um array bidmensional de 10x10 letras;
// Gerar letras aleatórias para completar esse array bidmensional;
// Informar ao usuário quando uma palavra for clicada(encontrada);

// 1 - Definir um array de 20 palavras com menos de 10 letras cada;
const arrayPalavras = [
    'osso',
    'pedra',
    'mesa',
    'sapato',
    'presunção',
    'tela',
    'kenzie',
    'ratificar',
    'paradigma',
    'humildade',
    'desdenhar',
    'dinamismo',
    'copo',
    'celular',
    'caneta',
    'agua',
    'flor',
    'ar',
    'companhia',
    'interesse',
]

// 2 - Fazer com que 3 palavras sejam selecionadas aleatóriamente 
function palavrasAleatorias(array) {
    let palavras = [];

    while (palavras.length < 3) {
        let posicao = array[Math.floor(Math.random() * array.length)];
        if (palavras.indexOf(posicao) === -1) {
            palavras.push(posicao);
        }

    }
    return palavras;
}
palavrasAleatorias(arrayPalavras);

let letras = 'abcdefghiklmnopqrstuvwxyz';

// 3 - Criar um array bidmensional de 10x10
const map = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
];

// 4 - Fazer com que 3 palavras sejam colocadas aleatóriamente em um array bidmensional de 10x10
function empurrar(palavra, x, y) {
    for (let i = 0; i < palavra.length; i++) {
        map[x][y] = palavra[i];
        y++;
    }
}

let varControl = palavrasAleatorias(arrayPalavras);

function adicionarPalavras() {


    let arrLinha = [];

    while (arrLinha.length < 3) {
        let linha = Math.floor(Math.random() * map.length);
        if (arrLinha.indexOf(linha) === -1) {
            arrLinha.push(linha);
        }
    }

    for (let c = 0; c < varControl.length; c++) {

        let palavra = varControl[c];
        let linha = arrLinha[c];
        let coluna = Math.floor(Math.random() * (map[0].length - palavra.length));
        empurrar(palavra, linha, coluna);

    }


}
adicionarPalavras();

const divContainer = document.getElementById('container');
const main = document.getElementById('main');

function palavrasSelecionadas() {
    const divMostrarPalavras = document.createElement('div');
    divMostrarPalavras.classList.add('mostrarPalavras');
    main.appendChild(divMostrarPalavras);
    divMostrarPalavras.innerText = [
        `Palavra 01: ${varControl[0].toUpperCase()}
        Palavra 02: ${varControl[1].toUpperCase()}
        Palavra 03: ${varControl[2].toUpperCase()}`
    ]

}
palavrasSelecionadas()

const buildLinha = (linhaAtual, linha) => {
    for (let coluna = 0; coluna < linhaAtual.length; coluna++) {

        const valorAtual = linhaAtual[coluna];

        const div = document.createElement('div');
        div.setAttribute('coluna', coluna);
        div.setAttribute('linha', linha);
        div.classList.add('divLetras')
        divContainer.appendChild(div);

        if (valorAtual === '') {
            div.innerText = letras.split('')[Math.floor(Math.random() * letras.length)];

        } else {
            div.innerText = valorAtual;
            div.style.backgroundColor = 'red';
        }





    }

}

const buildMap = () => {
    for (let linha = 0; linha < map.length; linha++) {
        const linhaAtual = map[linha];
        buildLinha(linhaAtual, linha);
    }
}
buildMap();


//5 - Informar ao usuário quando a palavra for clicada

const eventOnClick = (e) => {
    const target = e.target;
    const coluna = target.getAttribute('coluna');
    const linha = target.getAttribute('linha');
    if (target.classList.contains('divLetras')) {
        target.style.backgroundColor = 'blue';
    }

}
divContainer.addEventListener('click', eventOnClick);

const eventWithoutClick = (e) => {
    console.log(e)
    const target = e.target;
    if (target.classList.contains('divLetras')) {
        target.style.backgroundColor = 'yellow';
    }

}
divContainer.removeEventListener('click', eventWithoutClick);

