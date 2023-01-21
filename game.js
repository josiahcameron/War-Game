import { cardSuits, cardValues, Card } from "./card.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

//Instances of players and decks made here
//Use prompt() function for players names
const $drawButton = document.querySelector(".draw");
const $playerOneCard = document.querySelector(".playerOneCard");
const $playerTwoCard = document.querySelector(".playerTwoCard");
let potCount = [];
let playerOneCard = [];
let playerTwoCard = [];

function Game(){
    this.playerOne = new Player({
        name: "player1"
});
    this.playerTwo = new Player({
        name: "player2"
});
this.deck = new Deck();
this.pot = [];
}



const game = new Game();


Game.prototype.shuffle = function(deck){

    for (let i = deck.cards.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let randomDeckPosition = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = randomDeckPosition;
    }
}

Game.prototype.deal = function (){
    for (let i = 0; i < this.deck.cards.length; i++){
        if (i % 2 == 0){
        this.playerOne.hand.push(this.deck.cards[i])
        } else if (i % 2 == 1){
            this.playerTwo.hand.push(this.deck.cards[i])
        }
    }
}

Game.prototype.compare = function(){
    if(this.playerOne.hand.length < 3 && this.playerTwo.hand.length < 3){
        this.playerOne.hand.length > this.playerTwo.hand.length ? console.log("P1 Wins") : console.log("P2 Wins");
        console.log(`Cards remaining:\nP1 - ${this.playerOne.hand.length}\nP2 - ${this.playerTwo.hand.length}\n\n`)
    }
    else {
        if (cardValues.indexOf(this.pot[0].value) === cardValues.indexOf(this.pot[1].value)){
            console.log(this.playerOne.hand)
            game.pot = [...this.playerOne.hand.splice(0,3), ...this.playerTwo.hand.splice(0,3), ...this.pot]
            console.log("This is War")
            console.log(this.playerOne.hand)
        }
        else if (cardValues.indexOf(this.pot[0].value) > cardValues.indexOf(this.pot[1].value)){
            // console.log(cardValues.indexOf(this.pot[0].value) + ' vs ' + cardValues.indexOf(this.pot[1].value))
            this.playerOne.hand.push(...this.pot)
            this.pot = []
            // console.log("P1 Wins This Hand")
            // console.log(`Cards remaining:\nP1 - ${this.playerOne.hand.length}\nP2 - ${this.playerTwo.hand.length}\n\n`)
        } else if (cardValues.indexOf(this.pot[0].value) < cardValues.indexOf(this.pot[1].value)){
            this.playerTwo.hand.push(...this.pot)
            this.pot = []
        }
    }
}
// Deck.prototype.war = function(){

// }
Game.prototype.draw = function(){
    if(this.playerOne.hand.length < 3 || this.playerTwo.hand.length < 3){
        this.playerOne.hand.length > this.playerTwo.hand.length ? console.log("P1 Wins") : console.log("P2 Wins");
        console.log(`Cards remaining:\nP1 - ${this.playerOne.hand.length}\nP2 - ${this.playerTwo.hand.length}\n\n`)
    } else{
    this.pot = [...this.playerOne.hand.splice(0,1), ...this.playerTwo.hand.splice(0,1), ...this.pot]
    // console.log(this.pot)
    this.playerOneCard = [...this.pot[0].suit, this.pot[0].value];
    this.playerTwoCard = [...this.pot[1].suit, this.pot[1].value];
    
    document.getElementById("playerOneCard").innerHTML = this.playerOneCard.join();
    document.getElementById("playerTwoCard").innerHTML = this.playerTwoCard.join();
    document.getElementById("playerOneCardCount").innerHTML = this.playerOne.hand.length;
    document.getElementById("playerTwoCardCount").innerHTML = this.playerTwo.hand.length;
    
    this.compare()
    }
}



Game.prototype.play = function(){
    game.shuffle(game.deck);
    game.deal();
}()

$drawButton.addEventListener('click', function(){game.draw()});