export default function renderCards(arrOfCards){
    arrOfCards.forEach((card, index) => {
        setTimeout(() => {
            card.addCard()
            card.show = false;
        }, index * 30)
    })
}

