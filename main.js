let words = [
  "Hallo",
  "Java",
  "Python",
  "Css",
  //   "Javascript",
  //   "React",
  //   "Node",
  //   "Express",
  //   "Mongodb",
  //   "Sql",
  //   "Git",
  //   "Testing",
  //   "Docker",
  //   "Interent",
  //   "Linux",
  //   "Windows",
  //   "Mac",
  //   "Android",
  //   "IOS",
  //   "React Native",
  //   "Playing",
];
// stting levels
const lvls = {
  hard: 1,
  medium: 3,
  easy: 6,
};

// Defualt  Level1
let deulafLevelName = "medium";
//  kommt rein und nimmt die stufe
let defualtLevelSeconds = lvls[deulafLevelName];

// Catsch selector
let startBuutton = document.querySelector(".start");
let lvllNameSpan = document.querySelector(".message .lvl ");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let tiemLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finischeMessage = document.querySelector(".finisch");
console.log(finischeMessage);

// setting level Name + second + score
// تحديد اسم المستوى + الثاني + النتيجة
lvllNameSpan.innerHTML = deulafLevelName;
secondsSpan.innerHTML = defualtLevelSeconds;
tiemLeftSpan.innerHTML = defualtLevelSeconds;
scoreTotal.innerHTML = words.length;

//  Disable Paste Event تعطيل حدث اللصق
input.addEventListener("paste", (e) => {
  e.preventDefault();
});
//zweite Möglichkeit
// input.onpaste = function () {//   return false;// };

// -------------------StartButton-------------------------
startBuutton.onclick = function () {
  this.remove();
  input.focus();
  generWords();
  // Cenerate Word Function إنشاء وظيفة كلمة
};

// ----------------------------------------------------------

function generWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  //  Get Words Index

  let wordIndex = words.indexOf(randomWord);
  // remove  wordFrom Array
  words.splice(wordIndex, 1);
  //  show the random word
  //   theWord.innerHTML = randomWord;
  theWord.innerHTML = randomWord;
  // add to Upcoming Words
  upcomingWords.innerHTML = "";
  // Cenerate Words
  for (let i = 0; i < words.length; i++) {
    // Create Element div
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    div.appendChild(text);
    // add div to Upcoming Words
    upcomingWords.appendChild(div);
  }
  // Call start play Function
  startPlay();
}

function startPlay() {
  // hier rufen wir die (  tiemLeftSpan.innerHTML = defualtLevelSeconds;) ---->, damit sich wederholt
  tiemLeftSpan.innerHTML = defualtLevelSeconds;
  // Start Timer
  let start = setInterval(() => {
    tiemLeftSpan.innerHTML--;
    tiemLeftSpan.style.color = "red";
    if (tiemLeftSpan.innerHTML === "0") {
      clearInterval(start);
      // Copmare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = "";
        // Increase score
        scoreGot.innerHTML++;
        //   ----------------------------------- um zu ernren das test
        if (words.length > 0) {
          // Call Cenerate Word Function
          generWords();
        } else {
          //  Create span
          let span = document.createElement("span");
          span.classList = "good";
          let textSpanGewinnen = document.createTextNode("Haben Sie Gewonnen");
          span.appendChild(textSpanGewinnen);
          finischeMessage.appendChild(span);
          // Remove Upcomming Box
          upcomingWords.remove();
        }
      } else {
        // create span
        let span = document.createElement("span");
        span.classList = "bad";
        let textSpan = document.createTextNode("Came Over");
        span.appendChild(textSpan);
        finischeMessage.appendChild(span);
      }
    }
  }, 1000);
}
