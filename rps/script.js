/*
Alter the Rock Paper Scissors application to run 5 times, so that the following occurs:

Store the user guesses and return them to the user when they finish or win.

*/

let playCount=0;
let win=false;
function pick(){
	var compPick = Math.random();
	if(compPick<0.34){
		compPick="rock";
	}
	else if(compPick<0.67){ 
		compPick="paper";
	}
	else{
		compPick="scissors";
	}
	return compPick;
}
function play(clicked_id){
	var userPick = clicked_id;	
	var compPick = pick();
	var result = compare(userPick,compPick);
	document.getElementById("demo").innerHTML="You chose "+userPick+". The computer chose "+compPick+". "+result;
}


function compare(userPick,compPick){
	var result="You lose!";
	
	if(userPick==compPick){
		result="You draw!";
	}
	else if((userPick=="rock" && compPick=="scissors") || (userPick=="paper" && compPick=="rock") || (userPick=="scissors" && compPick=="paper")){
		result="You win!";
		win=true;
	}
	playCount++;
	if(playCount==5 || win==true){
		endGame();
	}	
	return result;
}

function endGame(){
	let winStatus="lost";
	if(win==true){
		winStatus="won";
	}
	let end="Thanks for playing!<br /> You played "+playCount+" times, and you "+winStatus;		
	document.getElementById("main").innerHTML=end;	
}
