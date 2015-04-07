var express = require('express');
var app = express();

//Coin toss
app.get('/coin_toss', function(request,response){
	var toss = Math.random();
	if (toss > 0.5) {
		response.send("Heads");
	} else {
		response.send("Tails");
	}
})

//Dice roll
app.get('/dice_roll', function(request,response){
	var roll = Math.floor(Math.random()*6 + 1);
	response.send(roll.toString());
})

//Magic 8 ball
app.get('/magic8ball/:question', function(request,response){
	var answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes", "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Yes, and Neel's outfit is looking perfectly coordinated today.",
  "Better not tell you now",
  "No, but Jeff LOVES that new Maroon Five song.",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
	]
	var question = request.params.question.replace(/\+/gi,' ');
	var randIndex = Math.floor(Math.random()* 21);
	var text = question + '? - ' + answers[randIndex];
	response.send(text);
})

//Rocks, paper, scissors
app.get('/rps/:userMove', function(request, response){
	var cMove;

	function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        cMove = "rock";
    } else if (randomNumber < 0.66) {
        cMove = "paper";
    } else {
        cMove = "scissors";
    }
	}

	function getWinner(playerMove,computerMove) {
	  var winner;
	  if(playerMove == 'rock' && computerMove == 'scissors'){
	    winner = 'player';
	  } else if(playerMove == 'rock' && computerMove == 'paper'){
	    winner = 'computer';
	  } else if(playerMove == 'rock' && computerMove == 'rock'){
	    winner = 'tie';
	  } else if(playerMove == 'scissors' && computerMove == 'paper'){
	    winner = 'player';
	  } else if(playerMove == 'scissors' && computerMove == 'rock'){
	    winner = 'computer';
	  } else if(playerMove == 'scissors' && computerMove == 'scissors'){
	    winner = 'tie';
	  } else if(playerMove == 'paper' && computerMove == 'rock'){
	    winner = 'player';
	  } else if(playerMove == 'paper' && computerMove == 'scissors'){
	    winner = 'computer';
	  } else if(playerMove == 'paper' && computerMove == 'paper'){
	    winner = 'tie';
	  } else {
	  	response.send('Please enter a valid move - rock, paper, or scissors');
	  }

		if (winner === 'tie') {
			response.send('Computer chose ' + cMove + '. The game was a tie!');
		} else {
			response.send('Computer chose ' + cMove + '. ' + winner + ' won the game!');
		}
	}

	randomPlay();
	getWinner(request.params.userMove, cMove);

});

app.listen(3000, function(){
	console.log('listening on port 3000!');
})