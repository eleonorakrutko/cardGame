export default function checkPairCards(arrClickedCards){
    const [firstCard, secondCard] = arrClickedCards;
    if(
        firstCard  && 
        secondCard && 
        firstCard.pairNumber === secondCard.pairNumber
    ){
        return true;  
    }
}
