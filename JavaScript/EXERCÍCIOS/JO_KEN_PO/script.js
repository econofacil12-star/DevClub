let scoremMyresult = document.getElementById('score_myresult')
let scoreMachineresult = document.getElementById('score_machineresult')
let resp = document.getElementById('result-message')

let options_game = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'tesor'
}

const humamScore = (humamChoise) => {

    play(humamChoise,machineScore())
    return humamChoise
} 


const machineScore = () => {
    const choises = ['rock','paper','tesor']
    let machineChoiseRandom = Math.floor(Math.random() * 3)
    return choises[machineChoiseRandom]
}


const play = (humam,machine) => {

    if (humam == machine){
        resp.innerHTML = 'Empatou!'
    } else if ((humam == options_game.rock && machine == options_game.scissors) || 
               (humam == options_game.paper && machine == options_game.rock) ||
               (humam == options_game.scissors && machine == options_game.paper)) 
    {
        resp.innerHTML = 'Você venceu!'
        let myscore = Number(scoremMyresult.textContent)
        score_myresult.innerHTML = myscore+=1
    } else {
        resp.innerHTML = 'Máquina venceu!'
        let machineScore = Number(scoreMachineresult.textContent)
        score_machineresult.innerHTML = machineScore+=1
    }
}