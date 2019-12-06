// Helper functions
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
    let seconds;

    // Stop if it exceeds the max number of allowable seconds
    if (numMs >= maxMs) {
        numberEls.forEach(numElement => numElement.style.color = 'red');
        stopInterval(intervalID);
        return 0;
    } else {
        // Increment the number
        numMs += updateIntervalInMs;
        seconds = Math.floor(numMs / msPerSecond);
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

/*
* Start setInterval on object interval
* @param {object} value: The interval to start setInterval on
* @returns: none
*/
function startInterval(callback, intervalInMs) {
    intervalID = window.setInterval(callback, 10)// update every ten ms
}

/*
* Stop setInterval on object interval
* @param {object} value: The interval to stop setInterval on
* @returns: none
*/
function stopInterval(interval) {
    clearInterval(interval);
    startBtn.disabled = false;
}

/*
* Create a button with buttonText as the textElement
* @param {string} buttonText: The text to apply to the button.textElement attribute
* @returns {object}: The button created
*/
function createButton(btnText, bgColor) {
    const btn = document.createElement('button');
    btn.textContent = btnText;
    btn.style.backgroundColor = bgColor;
    return btn;
}

/*
* Set the textContent property of all div.firstChild nodes to '0'
* @returns: none
*/
function resetNumberElements() {
    const elements = document.querySelectorAll('.digits div');
    elements.forEach(div => {
        if (!isNaN(div.textContent)) {
            div.textContent = '0';
        }
        div.style.color = "black";
    });
    numMs = 0;
}

// Update the time every 10 ms
let intervalID;
let numMs = 0;

// Add a new div for the button
// Format the body
const bodyTag = document.querySelector('body');
bodyTag.style.display = 'flex';
bodyTag.style.flexDirection = 'column';

// Add the div for the button
const divTag = document.createElement('div');
divTag.id = 'btn-container';
bodyTag.appendChild(divTag);

// Create and style button elements

// Start button
const startBtn = createButton('Start', 'lightgrey');
startBtn.addEventListener('click', function() {
    startInterval(updateSeconds, 10);
    startBtn.disabled = true;
});

// Reset button
const resetBtn = createButton('Reset', 'lightgrey')
resetBtn.addEventListener('click', function() {
    stopInterval(intervalID);
    resetNumberElements();
});

// Place buttons in the div
const div = document.querySelector('#btn-container');
div.append(startBtn);
div.append(resetBtn);