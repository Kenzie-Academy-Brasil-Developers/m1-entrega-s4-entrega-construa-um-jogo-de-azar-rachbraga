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
    'copo',
    'celular',
    'caneta',
    'agua',
    'flor',
    'presunção',
    'ratificar',
    'paradigma',
    'humildade',
    'desdenhar',
    'dinamismo',
    'adjacente',
    'companhia',
    'interesse',
    'tela',
    'kenzie'
]

// 2 - Fazer com que 3 palavras sejam selecionadas aleatóriamente 
function palavrasAleatorias(array) {
    let palavras = [];
    for (let i = 0; i < 3; i++) {
        palavras.push(array[Math.floor(Math.random() * array.length)]);
    }
    console.log(palavras)
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

function empurrar(palavra, x, y) {
    for (let i = 0; i < palavra.length; i++) {
        map[x][y] = palavra[i];
        y++;
    }
}

let varControl = palavrasAleatorias(arrayPalavras);

for (let c = 0; c < varControl.length; c++) {

    let palavra = varControl[c];
    let linha = Math.floor(Math.random() * map.length);
    let coluna = Math.floor(Math.random() * (map[0].length - palavra.length));
    let guardarLinha = linha;
    console.log(guardarLinha, linha)
    if (guardarLinha === linha) {
        empurrar(palavra, linha, coluna);
    } else if (guardarLinha === linha) {

    }


}










const divContainer = document.getElementById('container');

const buildLinha = (linhaAtual, linha) => {
    for (let coluna = 0; coluna < linhaAtual.length; coluna++) {

        const valorAtual = linhaAtual[coluna];

        const div = document.createElement('div');
        div.setAttribute('coluna', coluna);
        div.setAttribute('linha', linha);
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




