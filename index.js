import renderCards from "./modules/renderCards.js";
import controlGameProcess from "./modules/controlGameProcess.js";
import restartGame from "./modules/restartGame.js";
import addCardByLevel from "./modules/addCardsByLevel.js";
import setIdIntoCards from "./modules/addCardId.js";
import generateArrOfRandomCards from "./modules/generateArrOfRandomCards.js";
import disabledBtnLevel from "./modules/disabledBtnLevel.js";
import time from "./modules/timeGame.js";
import setIntervalIntoGame from "./modules/setIntervalIntoGame.js";

const restartButton = document.getElementById('restartGame');
const cards = document.getElementById('wrapperCards');
const chooseLevel = document.getElementById('chooseLevel');

restartButton.addEventListener('click', restartGame)

chooseLevel.addEventListener('click', (event) => {
    if(addCardByLevel(event)){
        setIntervalIntoGame(time)
        disabledBtnLevel(chooseLevel)
        event.target.setAttribute('clickedBtn', event.target)
        const arrRandomCards = generateArrOfRandomCards(addCardByLevel(event));
        const arrRandomCardsWithId = setIdIntoCards(arrRandomCards);
        renderCards(arrRandomCardsWithId)
        cards.addEventListener('click', controlGameProcess(arrRandomCardsWithId))
    }
})



