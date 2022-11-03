export default function closeNotPairCards(arrClickedCards, previousCards){
    if(previousCards.length === 2 && arrClickedCards.length === 1){
        previousCards.forEach(card => {
            setTimeout(() => {
                card.show = false;
            }, 200)
        })
    }  
}
