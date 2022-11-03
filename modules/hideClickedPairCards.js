export default function hideClickedPairCards(arrClickedCards){
    arrClickedCards.forEach(pairCard => {
        pairCard.visibility = false;
        setTimeout(() => {
            pairCard.hideCard()
        }, 200) 
    });
}
