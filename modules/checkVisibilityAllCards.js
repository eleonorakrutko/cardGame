export default function checkVisibilityAllCards(arrOfCards){
    return arrOfCards.every(card => card.visibility === false)
}
