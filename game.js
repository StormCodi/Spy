let player = 1;
let players = parseInt(localStorage.getItem('playerCount')) || 0
let spies = parseInt(localStorage.getItem('spies')) || 0
let possibleWordsTemp = localStorage.getItem("words").split("\n")
let wordsArr = new Array(players - spies).fill(possibleWordsTemp[Math.floor(Math.random() * possibleWordsTemp.length)])
let visible = false


for (let i = 0; i < spies; i++) {
    wordsArr.push("SPY")
}

for (let i = wordsArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]]; // Swap elements
}

if (spies > 1)
    document.getElementById("spy-count").innerText = "There are " + spies + " spies"
document.getElementById("player-count").innerText = "You are player " + player + " out of " + players + " players";



function swipe() {
    // Display the current player's word
    if (wordsArr[player - 1] == "SPY") {
        document.getElementById("word-div").style.color = "red"
        document.getElementById("word-is").innerText = "You are a"
        document.getElementById("word").innerText = wordsArr[player - 1]
    } else {
        document.getElementById("word-div").style.color = "white"

        document.getElementById("word-is").innerText = "Your word is "
        document.getElementById("word").innerText = wordsArr[player - 1];
    }
    // Toggle visibility
    if (!visible) {
        document.getElementById("word-div").style.opacity = 1;
    } else {
        document.getElementById("word-div").style.opacity = 0;
        player++;
        if (player <= players) {
            document.getElementById("player-count").innerText = "You are player " + player + " out of " + players + " players";
        }
    }
    // Toggle the visibility flag
    visible = !visible;

    if (player > players && !visible) {
        document.getElementById("reveal-btn").disabled = true
        document.getElementById("reveal-btn").style.opacity = "10%"

    }
}
