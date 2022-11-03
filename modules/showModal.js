import restart from "./restartGame.js";
import getFinalePhrase from "./getFinalePhrase.js";

const closeButton = document.getElementById('close');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

export default function showModalWindow(counter){
    modal.style.visibility = 'visible';
    const h2 = document.createElement('h2');
    h2.innerText = getFinalePhrase(counter);
    modalContent.append(h2);
    closeButton.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
        restart();
    })
}
