let rulsbtn = document.querySelector(".relbtn");
let closbtn = document.querySelector(".close");
let startbtn = document.querySelector(".start");
let traysMain = document.querySelector(".trays");
let checkbtn = document.querySelector(".chak");
let reloadbtn = document.querySelector(".reloadBtn");
let words = [
    "assem",
    "Apple",
    "Carrot",
    "Rabbit",
    "Dragon",
    "Puzzle",
    "Window",
    "Rocket",
    "Banana",
    "Camera",
    "Circle",
    "Cookie",
    "Flower",
    "Planet",
    "Puzzle",
    "Turtle",
    "Wallet",
    "Candle",
    "Bottle",
    "Ladder",
    "Dragon",
    "Garden",
    "Hammer",
    "Candle",
    "Magnet",
    "Nickel",
    "Pillow",
    "Pencil",
    "Quiver",
    "Rocket",
    "Saddle",
    "Racket",
    "Sphere",
    "Ticket",
    "Zipper",
    "Anchor",
    "Basket",
    "Castle",
    "Circle",
    "Danger",
    "Eagle",
    "Fossil",
    "Grapes",
    "Jigsaw",
    "Lizard",
    "Melody",
    "Orange",
  ],
  word,
  chword,
  forgen;
let tary = 1;
rulsbtn.addEventListener("click", () => {
  document.querySelector(".mainRel").classList.remove("disnon");
});
closbtn.addEventListener("click", () => {
  document.querySelector(".mainRel").classList.add("disnon");
});
startbtn.addEventListener("click", () => {
  document.querySelector(".game").classList.remove("disnon");
  startbtn.remove();
  word = Array.from(
    words[Math.floor(Math.random() * words.length)].toLocaleLowerCase()
  );
  chword = word;
  forgen = chword.join("");
  gentray();
});
function naxet() {
  let inputs = Array.from(document.querySelectorAll(".letter"));
  inputs.forEach((e, i) => {
    e.addEventListener("input", (e) => {
      if (i + 1 >= inputs.length || e.inputType == "deleteContentBackward") {
        return;
      } else {
        inputs[i + 1].focus();
      }
    });
    e.addEventListener("beforeinput", (e) => {
      if (
        e.inputType == "deleteContentBackward" &&
        i - 1 >= 0 &&
        inputs[i].value == ""
      ) {
        inputs[i - 1].focus();
      }
    });
  });
}
function gentray() {
  let t = 0;
  let div = document.createElement("div");
  div.classList.add("tray");
  div.setAttribute("data-tray", tary);
  for (let i = 0; i < word.length; i++) {
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("maxlength", 1);
    if (word[i] === true) {
      inp.value = forgen[i];
      inp.classList.add("good");
      t++;
    } else {
      inp.classList.add("letter");
    }
    div.appendChild(inp);
  }
  if (t == word.length) {
    win();
    return;
  }
  tary++;
  traysMain.appendChild(div);
  naxet();
}
checkbtn.addEventListener("click", () => {
  let letter = Array.from(document.querySelectorAll(".letter"));
  letter.forEach((e) => {
    e.value = e.value.toLocaleLowerCase();
  });
  let ch = [];
  let a = [];
  for (let i = 0; i < letter.length; i++) {
    if (letter[i].value == chword[i]) {
      letter[i].classList.add("good");
      letter[i].classList.remove("letter");
      if (chword[i] === word[i]) {
        word[i] = true;
      } else {
        word[word.indexOf(chword[i])] = true;
      }
    } else {
      ch.push(chword[i]);
    }
  }
  chword = ch;
  a = Array.from(ch);
  letter = Array.from(document.querySelectorAll(".letter"));
  for (let i = 0; i < letter.length; i++) {
    if (a.indexOf(letter[i].value) == -1) {
      letter[i].classList.add("low");
      letter[i].classList.remove("letter");
    } else if (a.indexOf(letter[i].value) != -1) {
      a.splice(a.indexOf(letter[i].value), 1);
      letter[i].classList.add("medum");
      letter[i].classList.remove("letter");
    }
  }
  document.querySelectorAll(".tray").forEach((e) => {
    e.classList.add("trayit");
  });
  gentray();
});
function win() {
  document.querySelectorAll(".win p span")[0].innerHTML = tary - 1;
  document.querySelectorAll(".win p span")[1].innerHTML = forgen;
  document.querySelector(".winMain").classList.remove("disnon");
}
reloadbtn.addEventListener("click", () => {
  window.location.reload();
});
