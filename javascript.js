//CPU random Choices 
function getComputerChoice () {
 const cpuChoice = parseInt((Math.random() * 5));
 return cpuChoice 
}


// 0 = Rock     1 = Paper   2 = Scissors    3 = Lizard      4 = Spock

//Options based on above numbers, game rules were applied in the conditional below:
let playerPoints = 0;
let cpuPoints = 0;


function playRound () {

    let playerSelection = Number (window.prompt("Escolha uma Opção""0 = Rock 1 = Paper 2 = Scissors 3 = Lizard 4 = Spock")) //get player choice
    let cpuNumber = getComputerChoice(); //get CPU Choice

    if (playerSelection == cpuNumber) {
        return `Tie!`;
        
    } 
    //Increase player 1 point for victory
    else if (playerSelection == 0 && (cpuNumber == 2 || cpuNumber == 3)) {
        ++playerPoints
        return `You Win!`;
        
    }
    else if (playerSelection == 1 && (cpuNumber == 4 || cpuNumber == 0)) {
        ++playerPoints
        return `You Win!`;
    }
    else if (playerSelection == 2 && (cpuNumber == 1 || cpuNumber == 3)) {
        ++playerPoints
        return `You Win!`;
       
    }
    else if (playerSelection == 3 && (cpuNumber == 1 || cpuNumber == 4)) {
        ++playerPoints
        return `You Win!`;
    }
    else if (playerSelection == 4 && (cpuNumber == 2 || cpuNumber == 0)) {
        ++playerPoints
        return `You Win!`;
    }
    // Increase CPU 1 point
    else  {
        ++cpuPoints
        return `You Lose!`;

    }

}

//Show winner running the looping for best of 5 turns
function game () {
 for (let i = 0; i < 5; i++) {
 console.log (playRound())
 }
 if (playerPoints > cpuPoints) 
 {
    alert `Good Ending:You defeat the CPU`
 } else if (playerPoints < cpuPoints) {
    alert `Bad Ending: The machines took control`
 }
 else if (playerPoints = cpuPoints) {
    alert `No winner or loser this time, try again`
 }
}

console.log (game())
