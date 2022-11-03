export default function generateArrOfRandomCards(arrOfCards){
    const arrOfRandomCards = [];
    const lengthArrOfCards = arrOfCards.length;
    for(let i = lengthArrOfCards - 1; arrOfRandomCards.length !== lengthArrOfCards; i--){
        let randomNum = Math.round(Math.random() * i)
        arrOfRandomCards.push(arrOfCards[randomNum]);
        arrOfCards.splice(randomNum, 1);
    }
   return arrOfRandomCards;
}

