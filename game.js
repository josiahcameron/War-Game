import { cardValues } from "./card.js";
import { Deck, deck } from "./deck.js";
import { Player } from "./player.js";

//Instances of players and decks made here
//Use prompt() function for players names


let playerOne = new Player({
    // name: prompt("Player 1 Name:")
    hand: []
})

let playerTwo = new Player({
    // name: prompt("Player 2 Name:"),
    hand: []
})

//.deal method
//Loops through shuffled deck array and uses modulo to turn i into
//a 1 or 0 each loop
Deck.prototype.deal = function (){
    for (let i = 0; i < deck.cards.length; i++){
        if (i % 2 == 0){
        playerOne.hand.push(deck.cards[i])
        } else if (i % 2 == 1){
            playerTwo.hand.push(deck.cards[i])
        }
    }
}

deck.deal()

while (playerOne.hand.length <= 0 || playerTwo.hand.length <= 0){
function cardCompare(){
        const playerOneCardValue = cardValues.indexOf(playerOne.hand[0].value);
        const playerTwoCardValue = cardValues.indexOf(playerTwo.hand[0].value);
    
        if (playerOneCardValue > playerTwoCardValue){
            playerOne.hand.push(playerTwo.hand[0]);
            playerTwo.hand.shift;
        } else if (playerTwoCardValue > playerOneCardValue){
            playerTwo.hand.push(playerOne.hand[0])
            playerOne.hand.shift;
        }
        console.log(playerOne.hand)
        console.log(playerTwo.hand)
    }
 }
 console.log(playerOne.hand)
 console.log(playerTwo.hand)


// while loop ( cardCompared())
// function Game(){
    
// }

// const game = new Game();
// console.log('testing')