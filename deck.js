import { Card, cardSuits, cardValues } from "./card.js";

function Deck(){
    this.cards = [];
}

Deck.prototype.createDeck = function () {
    for (let i = 0; i < cardSuits.length; i++) {
        const suit = cardSuits[i];
        
        for (let i = 0; i < cardValues.length; i++) {
            const value = cardValues[i];
            const card = new Card({suit,value})
            this.cards.push(card)
            // console.log(suit, value)
        }
    }
}

Deck.prototype.shuffle = function(){
    for (let i = this.cards.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let randomDeckPosition = this.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = randomDeckPosition;
    }
}

let handOne = [];
let handTwo = [];
Deck.prototype.deal = function (){
    deck.shuffle();
    for (let i = 0; i < this.cards.length; i++){
        if (i % 2 == 0){
        handOne.push(deck.cards[i])
        } else if (i % 2 == 1){
            handTwo.push(deck.cards[i])
        }
    }
}

const deck = new Deck()
deck.createDeck()
deck.shuffle()
deck.deal()
console.log(handOne, handTwo)
//console.log(deck.cards)
// console.log(cardSuits, cardValues)