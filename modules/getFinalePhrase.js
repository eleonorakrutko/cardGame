import { textTimeSeconds, textTimeMinutes } from "./timeGame.js";

export default function getFinalePhrase(counter){
    let finalePhrase;
    if(textTimeMinutes === '00'){
        finalePhrase = `Поздравляем, вы выиграли! Количество ходов - ${counter}, затраченное время - ${textTimeSeconds} секунд`;
    } else {
        finalePhrase = `Поздравляем, вы выиграли! Количество ходов - ${counter}, затраченное время - ${textTimeMinutes} минут ${textTimeSeconds} секунд`;
    }
    return finalePhrase;
}