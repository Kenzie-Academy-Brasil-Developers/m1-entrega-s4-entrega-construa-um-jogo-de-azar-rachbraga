const array = ["../assets/img/pedra-direita.png","../assets/img/papel-direita.png","../assets/img/tesoura-direita.png","../assets/img/papel-esquerda.png","../assets/img/tesoura-esquerda.png","../assets/img/pedra-esquerda.png"]
const array2 = ["../assets/img/botaoPedraNew.png", "../assets/img/botaoPapelNew.png", "../assets/img/botaoTesouraNew.png","../assets/img/play.png","../assets/img/botaoReinNew2.png"]
const section = document.createElement("section")
const section2 = document.createElement("section")
const playerUm = document.createElement("div")
const playerIa = document.createElement("div")
const imgPlayerUm = document.createElement("img")
const imgPlayerIa = document.createElement("img")
const main = document.querySelector("main")
const divMsnWins = document.createElement("div")

const master = document.querySelector(".master")
main.appendChild(master)

    imgPlayerUm.classList.add("img-player-um")
    imgPlayerIa.classList.add("img-player-ia")
    playerUm.classList.add("div-img-player-um")
    playerIa.classList.add("div-img-player-ia")
    section.setAttribute("class", "section-cards-1")
    section2.setAttribute("class", "section-msn-wins")
    divMsnWins.classList.add("div-msn-wins")

const imgPlay = document.createElement("img")
imgPlay.classList.add


function computador() {
    let jogadaPc = ['pedra', 'papel', 'tesoura']
    const randomPlay = Math.floor(Math.random() * jogadaPc.length)
    return jogadaPc[randomPlay]
}

function winner(jogador, pc) {
if (jogador === 'pedra' && pc === 'pedra') {
    imgPlayerUm.src = array[0]
    imgPlayerIa.src = array[5]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)

    playerIa.style.backgroundColor = "rgb(68, 175, 179)"
    playerUm.style.backgroundColor = "rgb(68, 175, 179)"
    divMsnWins.style.backgroundColor = "rgb(68, 175, 179)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)


    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)


    return divMsnWins.innerHTML = "Deu empate!"
    
}
else if (jogador === 'pedra' && pc === 'papel') {

    imgPlayerUm.src = array[0]
    imgPlayerIa.src = array[3]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(60, 160, 47)"
    playerUm.style.backgroundColor = "rgb(192, 68, 59)"
    divMsnWins.style.backgroundColor = "rgb(192, 68, 59)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)

    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Você perdeu!"
}
else if (jogador === 'pedra' && pc === 'tesoura') {
    imgPlayerUm.src = array[0]
    imgPlayerIa.src = array[4]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(192, 68, 59)"
    playerUm.style.backgroundColor = "rgb(60, 160, 47)"
    divMsnWins.style.backgroundColor = "rgb(60, 160, 47)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Parabéns você venceu!!!"
}
else if (jogador === 'papel' && pc === 'pedra') {
    imgPlayerUm.src = array[1]
    imgPlayerIa.src = array[5]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(192, 68, 59)"
    playerUm.style.backgroundColor = "rgb(60, 160, 47)"
    divMsnWins.style.backgroundColor = "rgb(60, 160, 47)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Parabéns você venceu!!!"
}
else if (jogador === 'papel' && pc === 'papel') {
    imgPlayerUm.src = array[1]
    imgPlayerIa.src = array[3]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(68, 175, 179)"
    playerUm.style.backgroundColor = "rgb(68, 175, 179)"
    divMsnWins.style.backgroundColor = "rgb(68, 175, 179)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Deu empate!"
}
else if (jogador === 'papel' && pc === 'tesoura') {
    imgPlayerUm.src = array[1]
    imgPlayerIa.src = array[4]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(60, 160, 47)"
    playerUm.style.backgroundColor = "rgb(192, 68, 59)"
    divMsnWins.style.backgroundColor = "rgb(192, 68, 59)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Você perdeu!"
}
else if (jogador === 'tesoura' && pc === 'pedra') {
    imgPlayerUm.src = array[2]
    imgPlayerIa.src = array[5]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(60, 160, 47)"
    playerUm.style.backgroundColor = "rgb(192, 68, 59)"
    divMsnWins.style.backgroundColor = "rgb(192, 68, 59)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Você perdeu!"
}
else if (jogador === 'tesoura' && pc === 'papel') {
    imgPlayerUm.src = array[2]
    imgPlayerIa.src = array[3]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(192, 68, 59)"
    playerUm.style.backgroundColor = "rgb(60, 160, 47)"
    divMsnWins.style.backgroundColor = "rgb(60, 160, 47)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)
    return divMsnWins.innerHTML = "Parabéns você venceu!!!"
}
else if (jogador === 'tesoura' && pc === 'tesoura') {
    imgPlayerUm.src = array[2]
    imgPlayerIa.src = array[4]
    playerUm.appendChild(imgPlayerUm)
    playerIa.appendChild(imgPlayerIa)
    playerIa.style.backgroundColor = "rgb(68, 175, 179)"
    playerUm.style.backgroundColor = "rgb(68, 175, 179)"
    divMsnWins.style.backgroundColor = "rgb(68, 175, 179)"
    section.appendChild(playerUm)
    section.appendChild(playerIa)
    main.appendChild(section)
    section2.appendChild(divMsnWins)
    main.appendChild(section2)

    master.appendChild(section)
    master.appendChild(section2)

    return divMsnWins.innerHTML = "Deu empate!"
}

}

winner("pedra","pedra")


// Eventos

    const bottonPedra = document.querySelector("#pedra")
    const bottonPapel = document.querySelector("#papel")
    const bottonTesoura = document.querySelector("#tesoura")
    bottonPedra.addEventListener("click", check)
    bottonPapel.addEventListener("click", check)
    bottonTesoura.addEventListener("click", check)

function check(checker){
    let jogador = checker.target.id
    let pc = computador()
    return winner(jogador,pc)
}


function reiniciar(event){
    let jogador = "pedra"
    let pc = "pedra"
    return resetar(jogador, pc)
}
const bottonReiniciar = document.querySelector("#img-botao-reiniciar")
bottonReiniciar.addEventListener("click", reiniciar)


function resetar(jogador, pc) {
    if (jogador === 'pedra' && pc === 'pedra') {
        imgPlayerUm.src = array[0]
        imgPlayerIa.src = array[5]
        playerUm.appendChild(imgPlayerUm)
        playerIa.appendChild(imgPlayerIa)
        playerIa.style.backgroundColor = "rgb(68, 175, 179)"
        playerUm.style.backgroundColor = "rgb(68, 175, 179)"
        divMsnWins.style.backgroundColor = "rgb(68, 175, 179)"
        section.appendChild(playerUm)
        section.appendChild(playerIa)
        main.appendChild(section)
        section2.appendChild(divMsnWins)
        main.appendChild(section2)
        master.appendChild(section)
        master.appendChild(section2)
        return divMsnWins.innerHTML = "Faça uma jogada"
    }
}










