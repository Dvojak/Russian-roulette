function delayAction() {
  setTimeout(() => {
    outputElement.removeChild(newText);
  }, 1000);
}

function playPew() {
  var audio = new Audio('media/Pew.mp3');
  audio.play();
}

function playClick() {
  var audio = new Audio('media/click.mp3');
  audio.play();
}

function playAuOne() {
  var audio = new Audio('media/AUUUUHGHHGHGH.mp3');
  audio.play();
}

function playAuTwo() {
  var audio = new Audio('media/AH.mp3');
  audio.play();
}

function playWhoosh() {
  var audio = new Audio('media/whoosh.mp3');
  audio.play();
}

function addClick() {
  var outputElement = document.getElementById("output");
  var heading = document.createElement("h2");
  var newText = document.createTextNode("*CLICK*");
  heading.appendChild(newText);
  heading.style.textAlign = "center";
  heading.style.position = "absolute";
  outputElement.appendChild(heading);
  setTimeout(function () {
    outputElement.removeChild(heading);
  }, 1000);
}

function redirectUsrP1() {
  setTimeout(function () {
    window.location.href = 'gameover/P1/';
  }, 3000);
}
function redirectUsrP2() {
  setTimeout(function () {
    window.location.href = 'gameover/P2/';
  }, 3000);
}

function changeRedBg() {
  document.body.style.backgroundColor = "rgba(255, 0, 0, 0.568)";
}
function changeBlueBg() {
  document.body.style.backgroundColor = "rgba(0, 0, 255, 0.568)";
}

var bang = document.getElementById("bang");
var whoosh = document.getElementById("whoosh");
var betray = document.getElementById("betray");
var bang2 = document.getElementById("bang2");
var whoosh2 = document.getElementById("whoosh2");
var betray2 = document.getElementById("betray2");
var turn = 1;
var chamber = Math.ceil(Math.random() * 6);
var index = 6;
var i = 2;

function disableAllButtons() {
  bang.disabled = true;
  whoosh.disabled = true;
  betray.disabled = true;
  bang.style.backgroundColor = "gray";
  whoosh.style.backgroundColor = "gray";
  betray.style.backgroundColor = "gray";
  bang2.disabled = true;
  whoosh2.disabled = true;
  betray2.disabled = true;
  bang2.style.backgroundColor = "gray";
  whoosh2.style.backgroundColor = "gray";
  betray2.style.backgroundColor = "gray";
}

function switchTurn() {
  if (turn === 1) {
    changeBlueBg();
    // Disable 1
    bang.disabled = true;
    whoosh.disabled = true;
    bang.style.backgroundColor = "gray";
    whoosh.style.backgroundColor = "gray";
    // Enable 2
    bang2.style.backgroundColor = "red";
    whoosh2.style.backgroundColor = "rgb(3, 209, 3)";
    bang2.disabled = false;
    whoosh2.disabled = false;
    turn = 2;
    var imageElement = document.getElementById("ppanak");
    imageElement.src = "img/pravyP.png";
    disableBetrays();
    return turn;
  }
  else if (turn === 2) {
    changeRedBg();
    // Disable 2
    bang2.disabled = true;
    whoosh2.disabled = true;
    bang2.style.backgroundColor = "gray";
    whoosh2.style.backgroundColor = "gray";
    // Enable 1
    bang.style.backgroundColor = "red";
    whoosh.style.backgroundColor = "rgb(3, 209, 3)";
    bang.disabled = false;
    whoosh.disabled = false;
    turn = 1;
    var imageElement = document.getElementById("panak");
    imageElement.src = "img/levyP.png";
    disableBetrays();
    return turn;
  }
}

var usedBetray1 = 0;
var usedBetray2 = 0;

function disableBetrays() {
  if (usedBetray1 === 0 && turn === 1) {
    betray.disabled = false;
    betray.style.backgroundColor = "orange";
  } else {
    betray.disabled = true;
    betray.style.backgroundColor = "gray";
  }

  if (usedBetray2 === 0 && turn === 2) {
    betray2.disabled = false;
    betray2.style.backgroundColor = "orange";
  } else {
    betray2.disabled = true;
    betray2.style.backgroundColor = "gray";
  }
}
//Levý hráč
if (turn === 1) {
  switchTurn();
  bang.addEventListener('click', function () {
    var imageElement = document.getElementById("panak");
    imageElement.src = "img/levyPNaSebe.png";
    if (index != chamber) {
      playClick();
      addClick();
      switchTurn();
      index--;
      i++;
    }
    else if (index == chamber) {
      playPew();
      playAuOne();
      redirectUsrP2();
      switchTurn();
      disableAllButtons();
      var imageElement = document.getElementById("panak");
      imageElement.src = "img/levyPNaSebeAMrtvola.png";
      //Vyskoci konec hry a moznost opakovat (resetne stránku)
    }
  });

  whoosh.addEventListener('click', function () {
    chamber = Math.ceil(Math.random() * 6);
    //nějaká animace spinování chamberu
    index = 6;
    i++;
    playWhoosh();
    var imageElement = document.getElementById("panak");
    imageElement.src = "img/levyPPryc.png";
    switchTurn();
  });
  betray.addEventListener('click', function () {
    usedBetray1++;
    var imageElement = document.getElementById("panak");
    imageElement.src = "img/levyPPryc.png";
    if (index != chamber) {
      playClick();
      index--;
      i++;
    }
    if (index == chamber) {
      var imageElement = document.getElementById("ppanak");
      playPew();
      playAuTwo();
      redirectUsrP1();
      switchTurn();
      disableAllButtons();
      imageElement.src = "img/levyPPrycDead.png";

      //Vyskoci konec hry a moznost opakovat (resetne stránku)
    }
    switchTurn();
  });

  // PLAYER 2
}
if (turn === 2) {
  switchTurn();
  bang2.addEventListener('click', function () {
    var imageElement = document.getElementById("ppanak");
    imageElement.src = "img/pravyPNaSebe.png";
    if (index != chamber) {
      playClick();
      addClick();
      switchTurn();
    }
    if (index == chamber) {
      playPew();
      playAuTwo();
      redirectUsrP1();
      switchTurn();
      disableAllButtons();
      var imageElement = document.getElementById("ppanak");
      imageElement.src = "img/pravyPNaSebeMrtvola.png";
      //Vyskoci konec hry a moznost opakovat (resetne stránku)
    }
    index--;
    i++;

  });

  whoosh2.addEventListener('click', function () {
    chamber = Math.ceil(Math.random() * 6);
    //nějaká animace spinování chamberu
    index = 6;
    i++;
    playWhoosh();
    var imageElement = document.getElementById("ppanak");
    imageElement.src = "img/pravyPPryc.png";
    switchTurn();
  });

  betray2.addEventListener('click', function () {
    usedBetray2++;
    var imageElement = document.getElementById("ppanak");
    imageElement.src = "img/pravyPPryc.png";
    if (index != chamber) {
      playClick();
      index--;
      i++;
      

    }
    if (index == chamber) {
      var imageElement = document.getElementById("panak");
      playPew();
      playAuOne();
      redirectUsrP2();
      switchTurn();
      disableAllButtons();
      imageElement.src = "img/PravyPPrycLevyDead.png";
      //Vyskoci konec hry a moznost opakovat (resetne stránku)
      

    }
    switchTurn();
  });
}