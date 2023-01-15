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

while (playerOne.hand.length < 52 && playerTwo.hand.length < 52){
    //These variables are single-object arrays of the first card on each loop. They also mutate each hand array.
    let playerOneCurrentCard = playerOne.hand.splice(0,1);
    let playerTwoCurrentCard = playerTwo.hand.splice(0,1);
    //This uses the index of the cardValue array in the card.js module to determine the value of each card
    let playerOneCardValue = cardValues.indexOf(playerOneCurrentCard.value);
    let playerTwoCardValue = cardValues.indexOf(playerTwoCurrentCard.value);
    
    //Compare the value property of each card object
    //Will use spread to get the object of the spliced arrays rather than the arrays themselves.
    //Really proud of you for getting this far, me :)
    if (playerOneCardValue > playerTwoCardValue){
        playerOne.hand.push(...playerOneCurrentCard, ...playerTwoCurrentCard)
    }
    else if (playerTwoCardValue > playerOneCardValue){
        playerTwo.hand.push(...playerTwoCurrentCard, ...playerOneCurrentCard)
    }
    //THIS IS WAR!!!!!!!
    //Make war card deck with splice and then compare the values of the last card pulled
    //"Eventually" I'll need to be able to display the value and suit properties of the last card 
    else if (playerOneCardValue === playerTwoCardValue && playerOne.hand.length > 5 && playerTwo.hand.length > 5) {
        while (playerOneCardValue === playerTwoCardValue){
            let playerOneWarCards = playerOne.hand.splice(0,4);
            console.log(playerOneWarCards[3])
            let playerTwoWarCards = playerTwo.hand.splice(0,4);
            console.log(playerTwoWarCards[3])
            let playerOneWarCardValue = cardValues.indexOf(playerOneWarCards[3].value);
            let playerTwoWarCardValue = cardValues.indexOf(playerTwoWarCards[3].value);
            
            if (playerOneWarCardValue > playerTwoWarCardValue && playerOne.hand.length > 5 && playerTwo.hand.length > 5){
                playerOne.hand.push(...playerOneWarCards, ...playerTwoWarCards)
                console.log("P1 Wins This War")
            }
            else if (playerTwoWarCardValue > playerOneWarCardValue && playerOne.hand.length > 5 && playerTwo.hand.length > 5){
                playerTwo.hand.push(...playerTwoWarCards, ...playerOneWarCards)
                console.log("P2 Wins This War")
                }
                else {
                    console.log('Not enough cards')
                }
            }
        } 
    else {
        console.log('Not Enough Cards')
    }
}

if (playerOne.hand.length >= 52){
    console.log('P1 Wins!')
} else if (playerTwo.hand.length >= 52){
    console.log('P2 Wins!')
} else {
    console.log('Something wring')
}

 
//You want this while loop to run until one of the arrays equals zero.
//Each loop compares the hands
//Each winning hand needs to move the first value to the back
//splice() and push() can be used.
//I won't need a for loop because I'll be changing the hand array each loop
//splice(0,1) will take the card at the start of each array for comparison
//push([0]) will take that card and push the spliced array values to the back of the winner's array
//Before trying to do both at once, splice the cards first and set them to a new variable to compare
//Push the value of that newly-made array to the end of the winning hand, the losing hand's array will already have their card spliced out

//"Next steps" when the spliced values are tied, run the while loop again
//This time, the splice will remove the two cards after the current ones(i.e. splice(1, 2)) for each


//         if (playerOneCardValue > playerTwoCardValue){
//             playerOne.hand.push(playerTwo.hand[0]);
//             playerTwo.hand.shift;
//         } else if (playerTwoCardValue > playerOneCardValue){
//             playerTwo.hand.push(playerOne.hand[0])
//             playerOne.hand.shift;
//         }
//         console.log(playerOne.hand)
//         console.log(playerTwo.hand)
//     }
//  }
//  console.log(playerOne.hand)
//  console.log(playerTwo.hand)


// while loop ( cardCompared())
// function Game(){
    
// }

// const game = new Game();
// console.log('testing')