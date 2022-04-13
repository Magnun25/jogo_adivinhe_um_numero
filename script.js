function getRandomArbitrary(min, max) {
    let num = Math.random()
    return num * (max - min) + min;

}

let number = getRandomArbitrary(1, 100).toFixed(0)
let allGuesses = []
let res = document.querySelector('div#res')
let sendGuess = document.querySelector('button#palpite')

function startAgain() {
    allGuesses = []
    res.innerHTML = ``
    number = getRandomArbitrary(1, 100).toFixed(0)
    sendGuess.removeAttribute("disabled")
}

function guessTheNumber(){
    let guess = document.querySelector('input#guess')
    res.innerHTML = "<p id='guessBefore'>Palpites anteriores:</p>"
    allGuesses.push(guess.value) // Inclusão no array
    let guessesBefore = document.createElement('p')
    for (c = 0; c < allGuesses.length; c++) {
    guessesBefore.textContent += `${allGuesses[c]} `
    }
    res.appendChild(guessesBefore)
    // Validação para limite de jogada
    if (allGuesses.length > 10) {
        let itIsWrong = document.createElement('div')
        itIsWrong.textContent = `FIM DE JOGO. TENTE NOVAMENTE!`
        itIsWrong.style.background = 'red'
        itIsWrong.style.color = 'white' 
        res.appendChild(itIsWrong)
        let endGame = document.createElement('button')
        endGame.textContent = `Novo Jogo!`
        endGame.setAttribute("onclick", "startAgain()")
        res.appendChild(endGame)
        sendGuess.setAttribute("disabled", "disabled")
    } else {
        // Validação para acerto
        if (guess.value == number) {
            let itIsRight = document.createElement('div')
            itIsRight.textContent = `Parabéns! Seu número está certo!`
            itIsRight.style.background = 'green'
            itIsRight.style.color = 'white' 
            res.appendChild(itIsRight)
            let newGame = document.createElement('button')
            newGame.textContent = `Novo Jogo!`
            newGame.setAttribute("onclick", "startAgain()")
            res.appendChild(newGame)
            sendGuess.setAttribute("disabled", "disabled")
        } else {
            // Validação para erro
            let itIsWrong = document.createElement('div')
            itIsWrong.textContent = `Errou!`
            itIsWrong.style.background = 'red'
            itIsWrong.style.color = 'white' 
            res.appendChild(itIsWrong)
            
            if (allGuesses[Number(allGuesses.length - 1)] == 100 && number != 100 ){
                res.innerHTML += `Seu palpite está muito alto!`
            } else if(number > allGuesses[Number(allGuesses.length - 1)]){
                res.innerHTML += `Seu palpite está muito baixo!`
            } else if (number < allGuesses[Number(allGuesses.length - 1)]){
                    res.innerHTML += `Seu palpite está muito alto!`
            }
        }    
    }
    guess.value = ''
    guess.focus()
}
