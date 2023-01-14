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

function cardCompare(card){
    for(i = 1; i < playerOne.hand.length; i++)
}

deck.deal()
console.log(playerTwo.hand[0])
// function Game(){
    
// }

// const game = new Game();
// console.log('testing')