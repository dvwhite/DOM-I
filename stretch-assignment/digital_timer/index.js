// Helper functions
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
* of the elements in timeObjects
* @param {object} timeObjects: The object containing the elements to increment
* @returns: none
*/
function updateSeconds() {
    // Variables
    const msPerSecond = 1000;
    const updateIntervalInMs = 10; // defined in the spec
    const maxSeconds = 10; // defined in the spec
    const maxMs = maxSeconds * msPerSecond;
    let secondTensEl = document.querySelector('#secondTens');
    let secondOnesEl = document.querySelector('#secondOnes');
    let msHundredsEl = document.querySelector('#msHundreds');
    let msTensEl = document.querySelector('#msTens');
    let colon = document.querySelector('#colon');
    let numberEls = [secondTensEl, secondOnesEl, colon, msHundredsEl, msTensEl];
    
    // Increment the number
    numMs += updateIntervalInMs;
    let seconds = Math.floor(numMs / msPerSecond);

    // Stop if it exceeds the max number of allowable seconds
    if (numMs >= maxMs) {
        numberEls.forEach(numElement => numElement.style.color = 'red');
        stopInterval(timerIncrement);
    }

    // Calculate place values
    const secondTens = Math.floor(seconds/10 % 10);
    const secondOnes = Math.floor(seconds % 10);
    const msHundreds = Math.floor(numMs/100 % 10);
    const msTens = Math.floor(numMs/10 % 10);

    // Update page elements
    secondTensEl.textContent = secondTens;
    secondOnesEl.textContent = secondOnes;
    msHundredsEl.textContent = msHundreds;
    msTensEl.textContent = msTens;
}

function stopInterval(interval) {
    clearInterval(interval);
}

// Update the time every 10 ms
let timerIncrement = window.setInterval(updateSeconds, 10); // update every ten ms
let numMs = 0;