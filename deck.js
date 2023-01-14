import { Card, cardSuits, cardValues } from "./card.js";

export function Deck(){
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



export const deck = new Deck()
console.log(deck.cards)
deck.createDeck()
deck.shuffle()
//console.log(handOne, handTwo)

// console.log(cardSuits, cardValues)