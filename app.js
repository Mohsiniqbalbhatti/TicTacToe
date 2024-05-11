let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGame = document.getElementById("newGame");
let msg = document.getElementById("message-box");
let winnerAnnouncement = document.getElementById("winner-announcement");
let turn0 = true;
// player0 playerx

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});

newGame.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msg.style.display = "none";
});

const checkwinner = () => {
  for (pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        setTimeout(() => {
          console.log(pos1 + " is winner");
          winnerAnnouncement.innerText = "Winner is " + pos1;
          msg.style.display = "flex";
        }, 1000);
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};
