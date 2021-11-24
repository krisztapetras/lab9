var computerChoiceDisplay=document.getElementById('computer-choice')
var userChoiceDisplay=document.getElementById('user-choice')
var resultDisplay=document.getElementById('result')
var possibleChoices=document.querySelectorAll('button')
var userChoice
var computerChoice
var result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
	userChoice = e.target.id
	userChoiceDisplay.innerHTML=userChoice
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice(){
	var randomNumber = Math.floor(Math.random()*3)+1
	
	if (randomNumber===1){
		computerChoice='rock'
	}
	if (randomNumber===2){
		computerChoice='scissors'
	}
	if(randomNumber===3){
		computerChoice='paper'
	}
	computerChoiceDisplay.innerHTML= computerChoice
	
}

function getResult(){
	if(computerChoice===userChoice){
		result='its a draw'
	}
	if(computerChoice==='rock' && userChoice==="paper"){
		result='you win!'
	}
	if (computerChoice==='rock' && userChoice==="scissors"){
		result='you lost!'
	}
	if (computerChoice==='paper' && userChoice==="scissors"){
		result='you win!'
	}
	if (computerChoice==='paper' && userChoice==="rock"){
		result='you lose!'
	}
	if (computerChoice==='scissors'&& userChoice==="paper"){
		result='you lost!'
	}
	if (computerChoice==='scissors' && userChoice==="rock"){
		result='you win!'
	}
	resultDisplay.innerHTML= result
}
let userScore=parseInt(0);
let computerScore=parseInt(0);
let win="You win";
let lose="You lose";
let draw="It is a draw";

for( i=0;i<3;i++){
	let userChoice=prompt("Pick a move");
	const computerChoice=generateComputerChoice();
	console.log(getResult(userChoice, computerChoice));
	console.log("your score = " + userScore);
	console.log("Computer's score = " + computerScore);
}