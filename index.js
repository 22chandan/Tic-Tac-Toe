var party = document.querySelector(".party");
const startNewGame = document.querySelector(".restart");
const btn = document.querySelectorAll("#btn");
var game = 1;
var playSound = new Audio("click.mp3");
var playSound1 = new Audio("clap.mp3");

var flag = 0;
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var value = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var dis = document.querySelector(".display");
btn.forEach((btns, index) => {
  btns.addEventListener("click", () => {
    if (game) {
      if (!flag && !check[index]) {
        playSound.play();
        btn[index].style.backgroundImage = "url('cross.png')";
        value[index] = -1;
        console.log(index);
        console.log(-1);
        check[index] = 1;
        flag = 1;
        if (winOrNot(value)) {
          game = 0;
          console.log("win the match");
          playSound1.play();
          var party = document.querySelector(".party");
          party.style.visibility = "visible";
          startNewGame.style.margin = "40px";
          var win = document.querySelector(".winner");
          win.innerHTML = "Player 2 win the match";
        }
        dis.innerHTML = "Next player is 0";
      } else if (flag && !check[index]) {
        flag = 0;
        playSound.play();
        btn[index].style.backgroundImage = "url('zero.png')";
        check[index] = 1;
        console.log(index);
        console.log(0);
        value[index] = 0;
        if (winOrNot(value)) {
          game = 0;
          console.log("win the match");
          console.log(game);
          playSound1.play();
          console.log(party);
          party.style.visibility = "visible";
          startNewGame.style.margin = "40px";
          var win = document.querySelector(".winner");
          win.innerHTML = "Player 2 win the match";
        }
        dis.innerHTML = "Next player is X";
      }
    }
  });
});

startNewGame.addEventListener("click", reset);
function reset() {
  for (var i = 0; i < btn.length; i++) {
    btn[i].style.backgroundImage = null;
  }
  check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  value = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  game = 1;
  party.style.visibility = "hidden";
}

function winOrNot(value) {
  if (value[0] === value[1] && value[1] === value[2]) {
    return 1;
  }
  if (value[3] === value[4] && value[4] === value[5]) {
    return 1;
  }
  if (value[6] === value[7] && value[7] === value[8]) {
    return 1;
  }
  if (value[0] === value[3] && value[3] === value[6]) {
    return 1;
  }
  if (value[1] === value[4] && value[4] === value[7]) {
    return 1;
  }
  if (value[2] === value[5] && value[5] === value[8]) {
    return 1;
  }
  if (value[0] === value[4] && value[0] === value[8]) {
    return 1;
  }
  if (value[2] === value[4] && value[4] === value[6]) {
    return 1;
  }
}
