const wordE1 = document.getElementById("word");
const wrongLettersE1 = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

// dk what this function does
const figureParts = document.querySelectorAll(".figure-part");

// database of possible words
// const words = ["application", "programming", "interface", "wizard"];

//read from text file

//select word for a particular run
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// not sure what the map() does
function displayWord() {
    wordE1.innerHTML = `
    ${selectedWord
        .split("")
        .map(
            (letter) => `<span class="letter">${
                correctLetters.includes(letter) ? letter : ""
            }
  </span>`
        )
        .join("")}
  `;
    //replace nextline characters with empty string
    const innerWord = wordE1.innerText.replace(/\n/g, "");

    if (innerWord === selectedWord) {
        finalMessage.innerText = "Congratuations! You won!";
        popup.style.display = "flex";
    }
}

function updateWrongLetterE1() {
    //Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? `<p>Wrong</p>` : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

    //Display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            //how come this line dont have semicolon?
            //brings in the figure part
            part.style.display = "block";
        } else {
            part.style.display = "none";
        }
    });

    //check if lost
    if (wrongLetters.length === figureParts.length) {
        //display lost message
        finalMessage.innerText = "Unfortunately you lost. 😕";
        popup.style.display = "flex";
    }
}

//show notification of wrong input
function showNotification() {
    // add show to notification container
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}

//keydown letter press
//keydown event is fired for all keys,
//regardless of whether they produce a character value.
window.addEventListener("keydown", (e) => {
    //check if letter input (e) is an alphabet
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            //if input letter is inside hidden word
            if (!correctLetters.includes(letter)) {
                //input letter should not be inside already corredted letters
                //add letter to correctLetter array
                correctLetters.push(letter);

                displayWord();
            } else {
                //duplicate letter inputed
                showNotification();
            }
        } else {
            //letter inputed not one of the hidden word
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLetterE1();
            } else {
                showNotification();
            }
        }
    }
});

playAgainBtn.addEventListener("click", () => {
    //empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    //select new word
    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    popup.style.display = "none";
});

displayWord();
