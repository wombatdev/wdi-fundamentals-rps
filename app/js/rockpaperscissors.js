function getInput() {
    var choice = prompt("Please choose either 'rock', 'paper', or 'scissors'.","To quit enter 'quit'");
    while (choice != "rock" && choice != "paper" && choice != "scissors" && choice != "quit") {
      choice = prompt("You must enter 'rock', 'paper', or 'scissors'.","To quit enter 'quit'");
    }
    return choice;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove() {
	var playerMove = getInput();
	if (playerMove === "quit") {
		return playerMove;
	}
	else {
		console.log("You played "+playerMove+"!");
		return playerMove;
	}
}
function getComputerMove() {
	var computerMove = randomPlay();
	console.log("The computer played "+computerMove+"!");
	return computerMove;
}

function getWinner(playerMove,computerMove) {
	var winner;
	playerMove = getPlayerMove();
	if (playerMove === "quit") {
		winner = "over";
		return winner;
	}
	computerMove = getComputerMove();

    if (computerMove === "rock" ) {
      if (playerMove === "scissors" ) {
        winner = "computer";
      }
      else if (playerMove === "paper") {
        winner = "player";
      }
      else {
        winner = "tie";
      }
    }
    if (computerMove === "paper" ) {
      if (playerMove === "rock" ) {
        winner = "computer";
      }
      else if (playerMove === "scissors") {
        winner = "player";
      }
      else {
        winner = "tie";
      }
    }
    if (computerMove === "scissors" ) {
      if (playerMove === "paper" ) {
        winner = "computer";
      }
      else if (playerMove === "rock") {
        winner = "player";
      }
      else {
        winner = "tie";
      }
    }
    if (winner === "tie") {
    	console.log("It's a tie!");
    }
    else if (winner === "player") {
        console.log("You win!");
    }
    else {
    	console.log("The computer wins!");
    }
    return winner;
}

function playToX() {
    console.log("Let's play Rock, Paper, Scissors!");
    var max = prompt("What score do you want to play to?","Must be a positive whole number");
    while (max <= 0 || max%1 !== 0) {
      max = prompt("You must enter a positive integer.","Positive integer here");
    }
	console.log("OK, let's get started!");

	var closeCounter = 0;
	var blowoutCounter = 0;
	var tension = 0;

	while (playerWins < max && computerWins < max) {
		var winner = "tie";
    	var winner = getWinner();
		if (winner === "player") {
			playerWins ++;
		}
		if (winner === "computer") {
			computerWins ++;
		}
    	if (winner === "over") {
      		break;
    	}
		if (playerWins == max) {
		    console.log("Final score: You: "+playerWins+", Computer: "+computerWins+"!");
		    break;
		}
		if (computerWins == max) {
		    console.log("Final score: You: "+playerWins+", Computer: "+computerWins+"!");
		    break;
		}
    	console.log("Player: "+playerWins+", Computer: "+computerWins);
    	if (max >= 3 && playerWins === max-1 && computerWins == max-1 && closeCounter === 0) {
    		console.log("It's coming down to the wire!");
    		var tension = 1;
    		var closeCounter = 1;
    	}
    	if (max >= 4 && Math.abs(playerWins-computerWins) === max-1 && blowoutCounter === 0) {
    		console.log("We're looking at a blowout, folks!");
    		var comeback = "set";
    		var blowoutCounter = 1;
    	}
    	if (comeback == "set" && Math.abs(playerWins-computerWins) === 0 ) {
    		var comeback = "undone";
    		console.log("WHAT A COMEBACK!")
    	}
    	if (tension >= 2) {
    		switch (tension) {
	    		case 2:
			        console.log("This is a close one!");
			        break;
			    case 3:
			        console.log("What a finish!");
			        break;
			    case 4:
			        console.log("This is one for the ages!");
			        break;
			    case 5:
			        console.log("ARE YOU FREAKING KIDDING ME???");
			        break;
			    default:
			        break;
	    	}
    	}
    	if (playerWins == computerWins && tension >= 1) {
    		tension++;
    	}
	}
}

var playerWins = 0;
var computerWins = 0;

playToX();
