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
    let playerSelection;
    let cpuNumber = getComputerChoice();
console.log (playerSelection,cpuNumber)
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


//Player Choice - The Game playeable only via browser console


//Show winner:
function game () {
 for (let i = 0; i < 5; i++) {

 console.log (playRound())
 }
 if (playerPoints > cpuPoints) 
 {
    return `You defeat the CPU`
 } else if (playerPoints < cpuPoints) {
    return `Bad Ending: The machines took control`
 }
 else if (playerPoints = cpuPoints) {
    return `No winner or loser this time, try again`
 }

}

console.log (game())