//CPU random Choices 
function getComputerChoice () {
 const cpuChoice = parseInt((Math.random() * 5));
 return cpuChoice 
}

const cpuNumber = getComputerChoice();

// 0 = Rock     1 = Paper   2 = Scissors    3 = Lizard      4 = Spock

function playRound (cpuNumber, playerSelection) {
    if (playerSelection == cpuNumber) {
        return `Empate!`;
    } 
    else if (playerSelection == 0 && (cpuNumber == 2 || cpuNumber == 3)) {
        return `Venceu1!`;
    }
    else if (playerSelection == 1 && (cpuNumber == 4 || cpuNumber == 0)) {
        return `Venceu2!`;
    }
    else if (playerSelection == 2 && (cpuNumber == 1 || cpuNumber == 3)) {
        return `Venceu3!`;
    }
    else if (playerSelection == 3 && (cpuNumber == 1 || cpuNumber == 4)) {
        return `Venceu4!`;
    }
    else if (playerSelection == 4 && (cpuNumber == 2 || cpuNumber == 0)) {
        return `Venceu5!`;
    }
    else  {
        return `Perdeu!`;
    }
}

const playerSelection = 4;
console.log (playRound())