let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreid = document.querySelector("#user-score");
const compscoreid = document.querySelector("#comp-score");
const drawGame = () => {
  userscore = 0;
  compscore = 0;
  userscoreid.innerText = userscore;
  compscoreid.innerText = compscore;
  msg.innerText = "Game is Draw play again";
  msg.style.backgroundColor = "#081b31";
};
const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const showwinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You Win";
    userscore++;
    userscoreid.innerText = userscore;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = "You lose";
    compscore++;
    compscoreid.innerText = compscore;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compchoice = gencompchoice();
  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissor" ? false : true;
    } else {
      userWin = compchoice == "rock" ? false : true;
    }
    showwinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
