import checkPairCards from "./checkPairCards.js";
import { arrForTwoClickedCards, previousCards } from "./createArrOfTwoClickedCards.js";
import hideClickedPairCards from "./hideClickedPairCards.js";
import closeNotPairCards from "./closeNotPairCards.js";
import checkVisibilityAllCards from "./checkVisibilityAllCards.js";
import openCard from "./openCard.js";
import { counterStep } from "./counterStepIncrement.js";
import showModalWindow from "./showModal.js";

export default function controlGameProcess(arrOfCards){
    return function(event){ 
        openCard(arrOfCards, event);
        if(checkPairCards(arrForTwoClickedCards)){
            hideClickedPairCards(arrForTwoClickedCards)
        } else{
            closeNotPairCards(arrForTwoClickedCards, previousCards)
        }

        if(checkVisibilityAllCards(arrOfCards)){
            setTimeout(() => {
                showModalWindow(counterStep);
            }, 500)
        }  
    }
}