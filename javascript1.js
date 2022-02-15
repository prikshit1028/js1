console.log("hooray");
let computerScore = 0;
let humanScore = 0;
//every time this function is invoked, need it to give one of the three strings - "rock","paper","scissors". 
let computerValue;
function computerPLay(){
    let array = ["rock", "paper", "scissors"];
    let result = Math.random();
    result*= array.length;
    result = Math.floor(result);
    
    if (result==0){
         computerValue = "rock";
    }
    else if (result==1){
         computerValue = "paper";
    }
    else{ computerValue = "scissors"};
    
}
console.log(computerPLay());


// this prompts the user to enter a value
let userinput;
// this variable is used to make the above variable case insensitive
let newone;
// the user should enter a value as a parameter in this function and the other parameter should be the computer random value.
let result1;
// this makes the userinput all lowercase
let finalresult;
 
// round1

function playRound(playerSelection, computerSelection){
     userinput = prompt("Enter one of the three options - rock, paper, scissors");
      newone = userinput.toLowerCase();
    if (playerSelection == "rock" && computerValue == "scissors"){ result1 =  ` you win this round! ${newone} beats ${computerValue} `;
firstround = 1;
humanScore++;}
  
    else if (playerSelection == "rock" && computerValue == "paper"){result1 = ` you lose this round! ${computerValue} beats ${newone}`;
computerScore++;}

     else if (playerSelection == "paper" && computerValue =="rock"){result1 = `you win this round! ${newone} beats ${computerValue}`;
humanScore++;}

     else if (playerSelection == "paper" && computerValue == "scissors" ){result1 = `you lose this round! ${computerValue} beats ${newone}`;
computerScore++;}

     else if (playerSelection == "scissors" && computerValue == "paper"){result1 = ` you win this round! ${newone} beats ${computerValue}`;
humanScore++;}

     else if (playerSelection == "scissors" && computerValue =="rock"){result1 = ` you lose this round! ${computerValue} beats ${newone}`;
computerScore++;}

     else{result1 = "you tied in this round"}
return result1;}


// new function for some weird reason-----
function game(){
 
 
    for( let i=1; i<=5; i++)
{console.log(playRound(newone, computerValue));}

}


console.log(game());
console.log(winner());


// this is so that the system can calculate who is the winner based on who has more points.
function winner(){
     if (humanScore > computerScore){
          console.log("hooray you won this 5 round game");}
          else if (humanScore==computerScore){console.log("you and computer tied in this 5 round game");}
          
          else{console.log(" oh no! computer won this 5 round game");}
     }
     






