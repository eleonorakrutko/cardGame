import createArrOfCardsWithDuplicates from "./createArrOfCards.js";
const wrapperCards = document.getElementById('wrapperCards')

export default function addCardByLevel(event){
    let arrCardsWithDuplicates;
    switch(event.target.id){
        case 'light':
            arrCardsWithDuplicates = createArrOfCardsWithDuplicates(wrapperCards, 8);
            break;
        case 'medium':
            arrCardsWithDuplicates = createArrOfCardsWithDuplicates(wrapperCards, 12);
            break;
        case 'hard':
            arrCardsWithDuplicates = createArrOfCardsWithDuplicates(wrapperCards, 16);
            break;
    }
    return arrCardsWithDuplicates;
}
