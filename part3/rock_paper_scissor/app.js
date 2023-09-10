// function returns computer selection
function computerSelection() {
  const selections = ["rock", "paper", "scissor"];
  const randomNum = Math.round(Math.random() * (selections.length - 1));
  return selections[randomNum];
}

// function returns player selection
function playerSelection() {
  const selection = prompt("Choose between Rock, Paper and Scissor?");
  return selection.toLowerCase();
}

// function holds the game logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("A Tie.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win, paper beats rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("You lose, paper lose to scissor.");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("You lose, scissor lose to rock.");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You win, scissor beats paper.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose, paper beats rock.");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("You win, rock beats scissor.");
  }
}

// function plays the 5 times.
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
  }
}

game();
