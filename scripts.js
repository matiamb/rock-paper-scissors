function computerPlay() {
    let game = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * game.length);
    return game[random];
}

let playerSelection = String(prompt('Your selection: '));
let computerSelection = computerPlay();

function capitalize(playerSelection){
    if (playerSelection.toUpperCase() === playerSelection){
        return playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase();
    }
    else if (playerSelection.toLowerCase() === playerSelection){
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
    else {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
}

let normalized = capitalize(playerSelection);
let scorePlayer = 0;
let scoreComputer = 0;

function score(){
    return scorePlayer + ' - ' + scoreComputer;
}

function gameStart(normalized, computerSelection){
    if (normalized === 'Rock' && computerSelection === 'Paper') {
        scorePlayer += 1;
        return 'You win! Rock beats Paper';
    }
    else if (normalized === 'Paper' && computerSelection === 'Rock'){
        scoreComputer += 1;
        return 'You Lose! Rock beats Paper';
    }
    else if (normalized === 'Scissors' && computerSelection === 'Rock'){
        scoreComputer += 1;
        return 'You Lose! Rock beats Scissors';
    }
    else if (normalized === 'Rock' && computerSelection === 'Scissors'){
        scorePlayer += 1;
        return 'You Win! Rock beats Scissors';
    }
    else if (normalized === 'Paper' && computerSelection === 'Scissors'){
        scoreComputer += 1;
        return 'You Lose! Scissors beats Paper';
    }
    else if (normalized === 'Scissors' && computerSelection === 'Paper'){
        scorePlayer += 1;
        return 'You Win! Scissors beats Paper';
    }
    else if (normalized === computerSelection){
        return 'It is a draw!';
    }
}

function finalScore(){
    if (scorePlayer > scoreComputer){
        return 'You win! The final score is ' + scorePlayer + ' - ' + scoreComputer;
    }
    else if (scorePlayer < scoreComputer){
        return 'You Lose! The final score is ' + scorePlayer + ' - ' + scoreComputer;
    }
    else {
        return 'Its a draw!';
    }
}


function game(){
    for (let i = 0; i < 5; i++){
       return i;
    }
}

console.log(computerSelection, gameStart(normalized, computerSelection), score() , finalScore());
