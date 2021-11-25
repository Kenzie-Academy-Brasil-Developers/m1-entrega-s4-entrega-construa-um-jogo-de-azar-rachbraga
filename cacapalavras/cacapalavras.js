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
    const title = document.createElement('h2');
    divMostrarPalavras.classList.add('divPalavras')
    divMostrarPalavras.appendChild(title);
    const frase1 = document.createElement('p');
    divMostrarPalavras.appendChild(frase1);
    frase1.innerText = varControl[0].toUpperCase();
    const frase2 = document.createElement('p');
    divMostrarPalavras.appendChild(frase2);
    frase2.innerText = varControl[1].toUpperCase();
    const frase3 = document.createElement('p');
    divMostrarPalavras.appendChild(frase3);
    frase3.innerText = varControl[2].toUpperCase();
    // divMostrarPalavras.innerText = [
    //     `Palavra 01: ${varControl[0].toUpperCase()}
    //     Palavra 02: ${varControl[1].toUpperCase()}
    //     Palavra 03: ${varControl[2].toUpperCase()}`
    // ]

}
palavrasSelecionadas()

// Construção do array
const buildLinha = (linhaAtual, linha) => {

    for (let coluna = 0; coluna < linhaAtual.length; coluna++) {

        const valorAtual = linhaAtual[coluna];

        const div = document.createElement('div');
        divContainer.appendChild(div);

        if (valorAtual === '') {
            div.innerText = letras.split('')[Math.floor(Math.random() * letras.length)].toUpperCase();

        } else {

            div.classList.add('letrasCorretas');
            div.innerText = valorAtual.toUpperCase();
            // div.setAttribute('coluna', coluna);
            // div.setAttribute('linha', linha);

            // div.style.backgroundColor = 'red';
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

let counter = 0;
const divWinner = document.createElement('div');
divWinner.classList.add('divWinner')
main.appendChild(divWinner);
const eventOnClick = (e) => {
    
    const target = e.target;
    let lengthControl = varControl.toString().length - 2;
    

    if (target.classList.contains('letrasCorretas')) {
        target.style.backgroundColor = 'orange';
        
        counter++;
        if(lengthControl === counter){
            divWinner.innerHTML = 'Você ganhou!'
        }
        
    }
}

divContainer.addEventListener('click', eventOnClick);