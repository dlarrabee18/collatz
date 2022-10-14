let usrVal;
let num = 0;
let barH = 0;
let intervalID;
let timeoutID;
let pass = 0;
let newOut = document.getElementById("o-wind");
let myBar = document.getElementById("mybar");
document.getElementById("submit-btn").onclick = function () {
  newOut.innerHTML = "";
  pass = 0;
  userVal = document.getElementById("usr-inp").value;
  num = parseInt(userVal);
  document.getElementById("numb").innerText = num;
  getNum(1);
  clearTimeout(timeoutID);
  timeoutID = setTimeout(collatz, 1000);
};

function collatz() {
  clearInterval(intervalID);
  intervalID = setInterval(getNum, 400);
}

function getNum(first) {
  if (first != 1) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  } else {
    newOut.insertAdjacentText("beforeend", "--Start--");
    newOut.insertAdjacentHTML("beforeend", "<br/>");
  }

  document.getElementById("numb").innerText = num;
  setBar();
  if (num == 1) {
    clearInterval(intervalID);
    newOut.insertAdjacentText("beforeend", "--DONE--");
    newOut.insertAdjacentHTML("beforeend", "<br/>");
    newOut.scrollTop = newOut.scrollHeight;
  }
}

function setBar() {
  let bgC;
  let bordC;
  if (num <= 16) {
    barH = num + 30;
    bgC = "var(--clr-bar-0)";
    bordC = "var(--clr-bord-0)";
  } else if (num <= 350) {
    barH = num + 30;
    bgC = "var(--clr-bar-1)";
    bordC = "var(--clr-bord-1)";
  } else if (num <= 1000) {
    barH = num / 10 + 351;
    bgC = "var(--clr-bar-2)";
    bordC = "var(--clr-bord-2)";
  } else if (num <= 10000) {
    barH = num / 100 + 451;
    bgC = "var(--clr-bar-3)";
    bordC = "var(--clr-bord-3)";
  } else {
    barH = num / 200 + 551;
    bgC = "var(--clr-bar-4)";
    bordC = "var(--clr-bord-4)";
  }
  myBar.style.backgroundColor = bgC;
  myBar.style.borderColor = bordC;
  myBar.style.height = "" + barH + "px";
  newOut.insertAdjacentText("beforeend", "Pass " + ++pass + ": " + num);
  newOut.insertAdjacentHTML("beforeend", "<br/>");
  newOut.scrollTop = newOut.scrollHeight;
}
