const counterTime = document.getElementById('time');

let minutes = 0;
let seconds = 0;

let textTimeSeconds;
let textTimeMinutes;

export default function time (){
    seconds++;

    if(seconds >= 60){
        minutes++
        seconds = 0;
    }

    if(seconds < 10){
        textTimeSeconds = `0${seconds}`
    } else{
        textTimeSeconds = `${seconds}`
    }

    if(minutes < 10){
        textTimeMinutes = `0${minutes}`
    } else {
        textTimeMinutes = `${minutes}`
    }
    counterTime.innerText = `${textTimeMinutes}:${textTimeSeconds}`
}

export {textTimeSeconds, textTimeMinutes}