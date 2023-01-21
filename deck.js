import { Card, cardSuits, cardValues } from "./card.js";

export function Deck(){
    this.cards = [];
    for (let i = 0; i < cardSuits.length; i++) {
        const suit = cardSuits[i];
        
        for (let i = 0; i < cardValues.length; i++) {
            const value = cardValues[i];
            const card = new Card({suit,value})
            this.cards.push(card)
        }
    } 
}


