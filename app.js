let userscore = 0;
let computerscore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector('#user-score');
const computerscorePara = document.querySelector('#computer-score');

const getComputerChoice= () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = (userChoice, computerChoice)=> {
    console.log("game was draw.");
    msg.innerText = `Game Was Draw `;
    msg.style.backgroundColor = 'black';
}

const showwinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        console.log("you Win");
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        computerscore++;
        computerscorePara.innerText = computerscore;
        console.log("You lose");
        msg.innerText = `You lose! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const playGame =(userChoice) =>{
console.log("user choice = ", userChoice);
const computerChoice =getComputerChoice();
console.log("computer choice", computerChoice)


if (userChoice === computerChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice ==="rock"){
       userWin = computerChoice === "paper" ? false : true;

    }
    else if(userChoice === "paper"){
       userWin = computerChoice === "scissor" ? false : true;
    }
    else if(userChoice === "scissor"){
        userChoice = computerChoice === "rock" ? false : true;
    };
    showwinner (userWin, userChoice, computerChoice)
}
}
 


choices.forEach(choice => {
    
    choice.addEventListener("click", ()=>{
        const choiceId = choice.getAttribute("id");
        
        playGame(choiceId);

    });
});