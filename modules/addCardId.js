export default function setIdIntoCards(arrRandomCards){
    return arrRandomCards.map((card, index) => {
        card.cardId = index;
        return card
    })
}

