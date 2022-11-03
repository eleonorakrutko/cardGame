import { counterStepIncrement } from "./counterStepIncrement.js";

let arrForTwoClickedCards = []
let previousCards = [];

export default function createArrOfTwoClickedCards(card){
    if(arrForTwoClickedCards.length !== 2){
        arrForTwoClickedCards.push(card);
        previousCards = [...arrForTwoClickedCards];
    } else {
        counterStepIncrement();
        arrForTwoClickedCards = [card];
    }
    return arrForTwoClickedCards
}

export {arrForTwoClickedCards, previousCards};
