import createArrOfTwoClickedCards from "./createArrOfTwoClickedCards.js";

export default function openCard(arrOfCards, {target}){
    arrOfCards.forEach(card => {
        if(
            target.hasAttribute('cardid') &&
            +target.getAttribute('cardid') === card.cardId &&
            !card.show
        ){
            card.show = true; 
            createArrOfTwoClickedCards(card);  
        }
    })
}
