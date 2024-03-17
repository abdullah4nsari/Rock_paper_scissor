let userscore = 0;
let compscore = 0;
let scoreboard = document.querySelector(".btn");
let reset=document.querySelector("#rst");
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log("userchoice"+userChoice);
        playGame(userChoice);
    })
});
reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    document.querySelector("#yourscore").innerText=userscore;
    document.querySelector("#compscore").innerText=compscore;
});
function compchoice(){
    let options=["rock","paper","scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
function playGame(userChoice){
    let compChoice= compchoice();
    console.log("compchoice"+compChoice);
    if(userChoice === compChoice){
        scoreboard.innerText=`Comp choose ${compChoice}, Draw`;
    }else{
        let userWin=true;
        //user selected rock
        //comp will select either paper,scissor
        if(userChoice === "rock"){
            userWin=compChoice === "paper"?false:true;
        }
        //user selected paper
        //comp will select either rock,scissor
        if(userChoice === "paper"){
            userWin=compChoice === "scissor"?false:true;
        }
        //user selected scissor
        //comp will select either paper,rock
        if(userChoice === "scissor"){
            userWin=compChoice === "rock"?false:true;
        }
        if(userWin){
            scoreboard.innerText=`Comp choose ${compChoice}, you win`;
            userscore++;
            document.querySelector("#yourscore").innerText=userscore;
        }else{
            scoreboard.innerText=`Comp choose ${compChoice}, you lose`;
            compscore++;
            document.querySelector("#compscore").innerText=compscore;
        }
    }
}