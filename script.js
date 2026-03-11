console.log("Script started");

let guesses = 0;
let firstCardId = "";
let secondCardId = "";
// Flip card to reveal the text
function flipCard(cardId) {
    // print click to console to make sure its working
    console.log("click");
    // Get the card by its id
    let card1 = document.getElementById(cardId);
    // Changes the color to reveal the text of the cards
    card1.style.color =  "pink";
    card1.style.backroundcolor = "darkred";
    // check if this is their first click
    if (firstCardId == ""){
        // Store first card id
        firstCardId = cardId;
    }
    else {
        //Store the second Id
        secondCardId = cardId;
    }

}

function flipCard(cardId) {
    // Check
}
