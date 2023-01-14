//Use consstructor function to make card
//Consider randomizing an array of value to give to the cards - create a for-loop to make sure each type of card is only chosen once
//You don't need 52 cards hard-loaded, just arrays with values and suits that can be combined to create them
//flatMap

export const cardSuits = ['h', 'd', 's', 'c'];
export const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export function Card ({value, suit}){
    this.value = value;
    this.suit = suit;
}
// const cardSuitsAndValues = cardValues.concat(cardSuits);
// console.log(cardSuitsAndValues)

// for (i = 0; i <=52; i++){
//     valueSuitPairs = [];

// }






// let spade = new Card({
//     suit: "spade",
//     value: 
// })

// let club = new Card ({
//     suit: "club",
// })

// let diamond = new Card ({
//     suit: "diamond",
// })

// let heart = new Card ({
//     suit: "heart",
// })


// const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// let cardSlice = [];
// let valueSuitPairs = [];
// // let slicedPairs = [];
// let spadeCards = [];
// let clubCards = [];
// let diamondCards = [];
// let heartCards = [];

// function cardAssignment(suit){
//     const cardSuits = [suit];
//     const combineValues = [...cardSuits, ...cardValues];
    
//     const addTwo = 2;
//     switch (suit)
//     {
//         case 'spades':
//             for (i = 1; i <= cardValues.length; i++){
//                 valueSuitPairs.push(combineValues[0], combineValues[i]);
//             }
            
//             for (i = 0; i < valueSuitPairs.length; i += addTwo){
//             cardSlice = valueSuitPairs.slice(i, i + 2)
//             spadeCards.push(cardSlice)}
//         break;
//         case 'clubs':
//             for (i = 1; i <= cardValues.length; i++){
//                 valueSuitPairs.push(combineValues[0], combineValues[i]);
//             }
//             for (i = 0; i < valueSuitPairs.length; i += addTwo){
//                 cardSlice = valueSuitPairs.slice(i, i + 2)
//                 clubCards.push(cardSlice)}
//         break;
//         case 'diamonds':
//             for (i = 1; i <= cardValues.length; i++){
//                 valueSuitPairs.push(combineValues[0], combineValues[i]);
//             }
//             for (i = 0; i < valueSuitPairs.length; i += addTwo){
//                 cardSlice = valueSuitPairs.slice(i, i + 2)
//                 diamondCards.push(cardSlice)}
//         break;
//         case 'hearts':
//             for (i = 1; i <= cardValues.length; i++){
//                 valueSuitPairs.push(combineValues[0], combineValues[i]);
//             }
//             for (i = 0; i < valueSuitPairs.length; i += addTwo){
//                 cardSlice = valueSuitPairs.slice(i, i + 2)
//                 heartCards.push(cardSlice)}
//         break;
//             }

//     }


// cardAssignment('spades')
// cardAssignment('hearts');
// cardAssignment('diamonds')
// cardAssignment('clubs')
// console.log(spadeCards)
// console.log(heartCards[1][1])
// console.log(diamondCards)
// console.log(clubCards)
