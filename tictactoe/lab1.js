let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const winpattrens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const restGame = () => {
  turnO = true;
  count = 0;
  enabledboxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (turnO == true) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkdraw();
    checkwinner();
  });
});
const checkdraw = () => {
  if (count === 9) {
    msg.innerText = `Game is draw`;
    msgContainer.classList.remove("hide");
  }
};
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  // msgContainer.setAttribute("class", "msg-container");
  msg.innerText = `congrats to player ${winner} You win`;
  msgContainer.classList.remove("hide");
  disabledboxes();
};
const checkwinner = () => {
  for (let pattren of winpattrens) {
    let pos1Val = boxes[pattren[0]].innerText;
    let pos2Val = boxes[pattren[1]].innerText;
    let pos3Val = boxes[pattren[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
      } else {
        checkdraw();
      }
    }
  }
};
newBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
