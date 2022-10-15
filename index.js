let usrVal;
let num = 0;
let barH = 0;
let intervalID;
let timeoutID;
let pass = 0;
let it = 1;
let notFirst = 0;
let max = 0;
let newOut = document.getElementById("o-wind");
let myBar = document.getElementById("mybar");
let mainCont = document.getElementById("main-cont");
let contTop = document.getElementById("top-con");
let title = document.getElementById("col-title");
title.onclick = function () {
  location.reload();
};
document.getElementById("submit-btn").onclick = function () {
  newOut.innerHTML = "";
  pass = 0;
  max = 0;
  userVal = document.getElementById("usr-inp").value;
  num = parseInt(userVal);
  if (num <= 0) num = 5;
  document.getElementById("numb").innerText = num;
  getNum(1);
  if (!notFirst) notFirst++;
  clearTimeout(timeoutID);
  contTop.style.opacity = "0";
  timeoutID = setTimeout(collatz, 1000);
};

function clearInt(int) {
  clearInterval(int);
}
function createBar(bgC, bordC, barH) {
  let barDel;
  let newBar = document.createElement("newB");
  let newSpan = document.createElement("newS");
  newSpan.setAttribute("id", "numb");
  newSpan.textContent = num;
  newBar.setAttribute("class", "bar2");
  newBar.style.backgroundColor = bgC;
  newBar.style.borderColor = bordC;
  newBar.style.height = "" + barH + "px";
  newBar.appendChild(newSpan);
  setTimeout(() => mainCont.appendChild(newBar), 400);
  setTimeout(() => mainCont.removeChild(newBar), 2400);
}

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
  if (num > max) max = num;
  setBar(first);
  if (num == 1) {
    clearInterval(intervalID);
    contTop.style.opacity = "1";
    newOut.insertAdjacentText("beforeend", "--DONE--");
    newOut.insertAdjacentHTML("beforeend", "<br/>");
    newOut.insertAdjacentText("beforeend", "Max Val: " + max);
    newOut.insertAdjacentHTML("beforeend", "<br/>");
    newOut.scrollTop = newOut.scrollHeight;
  }
}

function setBar(first) {
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

  createBar(bgC, bordC, barH);
  myBar.style.backgroundColor = bgC;
  myBar.style.borderColor = bordC;
  myBar.style.height = "" + barH + "px";
  newOut.insertAdjacentText("beforeend", "Pass " + ++pass + ": " + num);
  newOut.insertAdjacentHTML("beforeend", "<br/>");
  newOut.scrollTop = newOut.scrollHeight;
}
