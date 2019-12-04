// Data
const secondTensEl = document.querySelector('#secondTens');
const secondOnesEl = document.querySelector('#secondOnes');
const msHundredsEl = document.querySelector('#msHundreds');
const msTensEl = document.querySelector('#msTens');
const maxSeconds = 10;

const timeObjects = {
    secondTens: secondTensEl,
    secondOnes: secondOnesEl,
    msHundreds: msHundredsEl,
    msTens: msTensEl
}

/*
* Validate the textContent of an element is numeric
* @param {variant} value: The value to validate
* @returns {number} validatedValue: The converted number
*/
function convertToNum(value) {
    validatedValue = isNaN(value) ? 0 : value;
    return validatedValue;
}

/*
* Calculate the time in seconds stored in the time elements
* @param {object} timeObj: The object of time elements
* @returns {float} seconds: The total seconds in the time elements
*/
function calcTime(timeObj) {
    let seconds = convertToNum(timeObj.secondTens) * 10 + convertToNum(timeObj.secondOnes);
    let ms = convertToNum(timeObj.msHundreds) * 100 + convertToNum(timeObj.msTens) * 10;
    return seconds + ms;
}

/*
* Increment the number stored as the .textContent
* of the element with id
* @param {string} id: The id of the element to increment
* @returns: none
*/
function updateSeconds(selectorObj, updateIntervalInMs, stopUpdatingAtSecond) {
    const msPerSecond = 1000;
    let seconds = convertToNum(selectorObj.secondTens) * 10 + convertToNum(selectorObj.secondOnes);
    let ms = convertToNum(selectorObj.msHundreds) * 100 + convertToNum(selectorObj.msTens) * 10;

    ms += updateIntervalInMs; // in ms
    if (ms >= msPerSecond) {
        ms %= msPerSecond;
        seconds += 1;
    }

    if (seconds >= stopUpdatingAtSecond) {  
        ms = 0;
    }

    const secondTens = seconds % 10;
    const secondOnes = seconds - secondTens;
    const msHundreds = ms % 100;
    const msTens = ms - msHundreds;

    selectorObj.secondTens.textContent = secondTens;
    selectorObj.secondOnes.textContent = secondOnes;
    selectorObj.msHundreds.textContent = msHundreds;
    selectorObj.msTens.textContent = msTens;

    console.log(seconds)
}

// Update the time every 10 ms
let timerTotal = 0;
while (timerTotal < maxSeconds) {
    window.setInterval(updateSeconds(timeObjects), 10); // update every ten ms
    timerTotal = calcTime(timeObjects)
}