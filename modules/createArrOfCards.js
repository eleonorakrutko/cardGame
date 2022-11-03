import Card from "./Card.js";

export default function createArrOfCardsWithDuplicates(parent, amount){
    const arrOfOriginalCards = [];
    const arrOfDuplicatesCards = [];
    for(let i = 1; i <= amount; i++){
        arrOfOriginalCards.push(new Card(`./imgs/card${i}.png`, parent, i))
        arrOfDuplicatesCards.push(new Card(`./imgs/card${i}.png`, parent, i))
    }
    return [...arrOfOriginalCards, ...arrOfDuplicatesCards]
}


