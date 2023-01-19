import { cardSuits, cardValues, Card } from "./card.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

//Instances of players and decks made here
//Use prompt() function for players names
const $drawButton = document.querySelector(".draw");
const $playerOneCard = document.querySelector(".playerone-card");
const $playerTwoCard = document.querySelector(".playertwo-card");
let potCount = [];
let playerOneCard = [];
let playerTwoCard = [];

Deck.prototype.createDeck = function () {
    for (let i = 0; i < cardSuits.length; i++) {
        const suit = cardSuits[i];
        
        for (let i = 0; i < cardValues.length; i++) {
            const value = cardValues[i];
            const card = new Card({suit,value})
            this.cards.push(card)
        }
    }
}

Deck.prototype.shuffle = function(){
    deck.createDeck()
    for (let i = this.cards.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let randomDeckPosition = this.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = randomDeckPosition;
    }
}



const deck = new Deck()

function Game(){


}
let playerOne = new Player({
    // name: prompt("Player 1 Name:")
    hand: []
})

let playerTwo = new Player({
    // name: prompt("Player 2 Name:"),
    hand: []
})

let pot = new Player({
    hand: []
})

//.deal method
//Loops through shuffled deck array and uses modulo to turn i into
//a 1 or 0 each loop
Deck.prototype.deal = function (){
    deck.shuffle()
    for (let i = 0; i < deck.cards.length; i++){
        if (i % 2 == 0){
        playerOne.hand.push(deck.cards[i])
        } else if (i % 2 == 1){
            playerTwo.hand.push(deck.cards[i])
        }
    }
}

deck.deal()


Deck.prototype.compare = function(){
    if(playerOne.hand.length < 3 && playerTwo.hand.length < 3){
        playerOne.hand.length > playerTwo.hand.length ? console.log("P1 Wins") : console.log("P2 Wins");
        console.log(`Cards remaining:\nP1 - ${playerOne.hand.length}\nP2 - ${playerTwo.hand.length}\n\n`)
    }
    else {
        if (cardValues.indexOf(pot.hand[0].value) === cardValues.indexOf(pot.hand[1].value)){
            pot.hand = [...playerOne.hand.splice(0,3), ...playerTwo.hand.splice(0,3), ...pot.hand]
            console.log("This is War")
        }
        else if (cardValues.indexOf(pot.hand[0].value) > cardValues.indexOf(pot.hand[1].value)){
            console.log(cardValues.indexOf(pot.hand[0].value) + ' vs ' + cardValues.indexOf(pot.hand[1].value))
            playerOne.hand.push(...pot.hand)
            pot.hand = []
            console.log("P1 Wins This Hand")
            console.log(`Cards remaining:\nP1 - ${playerOne.hand.length}\nP2 - ${playerTwo.hand.length}\n\n`)
        } else if (cardValues.indexOf(pot.hand[0].value) < cardValues.indexOf(pot.hand[1].value)){
            playerTwo.hand.push(...pot.hand)
            pot.hand = []
        }
    }
}
// Deck.prototype.war = function(){

// }
Deck.prototype.play = function(){
    pot.hand = [...playerOne.hand.splice(0,1), ...playerTwo.hand.splice(0,1)]
    playerOneCard = [...pot.hand[0].suit, ...pot.hand[0].value];
    playerTwoCard = [...pot.hand[1].suit, ...pot.hand[1].value];
    
    document.getElementById("playerOne-card").innerHTML = playerOneCard.join();
    document.getElementById("playerTwo-card").innerHTML = playerTwoCard.join();
    $playerTwoCard.value = pot.hand[1];
    deck.compare()
}

$drawButton.addEventListener('click', deck.play())



