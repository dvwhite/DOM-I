// Add the config.js to the header
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

  //////////////////////
 // Helper Functions //
//////////////////////

/*
* Gets all anchor tags in the nav using the DOM
* @returns {NodeList} navItems: The anchor tags in the nav 
*/
function getNavItems() {
  const navItems = document.querySelectorAll('nav a');
  return navItems;
}

/*
* Returns a DOM reference to the nav
* @returns {object} nav: The nav (as rendered)
*/
function getNav() {
  const nav = document.querySelector('header nav');
  return nav;
}

/*
* Add a new nav item to nav with .textContent of navText
* @param {object} nav: The nav (as rendered)
* @param {string} navText: The textContent of the new nav item
* @returns: none
*/
// Function to create and append a new nav item
function appendToNav(nav, navText) {
  // Append a new anchor tag to the nav, giving it navText
  const appendedChild = document.createElement('a');
  const appendedChildText = navText;
  appendedChild.textContent = appendedChildText;
  appendedChild.style.color = 'green';
  nav.appendChild(appendedChild);
}

/*
* Randomly adds to the nav using the Words API to generate random words
* @returns: none
*/
function getRandomWordFromAPI(apiKey) {
  // Variables
  const apiURL = 'https://wordsapiv1.p.rapidapi.com/words/?random=true';

  // Create the request
  const request = new XMLHttpRequest();
  request.open('GET', apiURL, true);
  request.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
  request.setRequestHeader("x-rapidapi-key", apiKey);
  request.setRequestHeader("Accept", "application/json");

  // This will be called when the XMLHttpRequest transaction
  // successfully completes
  request.onload = function() {
    // generate JSON of data on loading
    const wordData = JSON.parse(this.response);
    let randomText = "";

    // check request status
    const statusOK = 200; // OK status
    const statusFail = 400; // threshold is >= 200 && < 400 to succeed
    const requestResponse = request.status >= statusOK;
    const requestNotFailed = request.status < statusFail;
    const isValidRequest = requestResponse && requestNotFailed; 
    const maxNavAllowed = 9; // Caps total nav items allowable
    const maxWordLength = 15; // Prevent very long words from overflowing nav

    // Test for valid request
    // If valid, generate random text from the API
    // If invalid, then randomly choose an element defaultWords
    if (isValidRequest) {
      randomText = wordData.word.split(" ")[0]; // restrict to a single word
    }

    if (randomText.length < 1 || randomText.length > maxWordLength) {
      const defaultWords = ['innovate', 'globalize', 'initiate', 'change', 'disrupt', 'deploy'];
      randomInt = Math.round(Math.random() * 10) % defaultWords.length;
      randomText = defaultWords[randomInt];
    }
    randomText = capitalizeFirstLetter(randomText);

    // Set the new nav
    nav = getNav();
    if (nav.children.length <= maxNavAllowed) {
      appendToNav(nav, randomText);
    } else {
      nav.lastChild.textContent = randomText;
    }
  }
  request.send();
}

/*
* Changes all nav item texts to the desired color
* @param {NodeList} items: The NodeList to iterate over
* @param {string} colorStr: The color of each nav
* @returns: none
*/
function styleNavColor(items, colorStr) {
  for (const item of items) {
    item.style.color = colorStr;
  }
}

/*
* Capitalizes the first letter of str and returns the modified str
* @param {string} str: The string to modify
* @returns {string} str: The modified str
*/
function capitalizeFirstLetter(str) {
  const chars = str.split("");
  chars[0] = chars[0].toUpperCase();
  const joinedStr = chars.join("");
  return joinedStr;
}
// End helpers

  //////////////////////
 // DOM Manipulation //
//////////////////////

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Set nav item link text
let navItems = getNavItems();
navItems[0].textContent = siteContent.nav['nav-item-1'];
navItems[1].textContent = siteContent.nav['nav-item-2'];
navItems[2].textContent = siteContent.nav['nav-item-3'];
navItems[3].textContent = siteContent.nav['nav-item-4'];
navItems[4].textContent = siteContent.nav['nav-item-5'];
navItems[5].textContent = siteContent.nav['nav-item-6'];

// Add two navigation items as per Task 3b
// Using .prepend
let nav = getNav();
const prependedChild = document.createElement('a');
const prependedChildText = 'Ideas';
nav.prepend(prependedChild);
prependedChild.textContent = prependedChildText;
// Using .appendChild
// There is a helper function for this, but I use it in
// stretch to comply with spec in the README
const appendedChild = document.createElement('a');
const appendedChildText = 'Donate';
nav.appendChild(appendedChild);
appendedChild.textContent = appendedChildText;

// Style nav text green as per Task 3a
navItems = getNavItems();
styleNavColor(navItems, 'green');

// Set header logo img src
const headerLogo = document.querySelector('header img');
const headerLogoSrc = siteContent.nav['img-src'];
headerLogo.setAttribute("src", headerLogoSrc);
logo.style.marginLeft= '20px'; // make room for stretch content in the nav

// Change styles on the nav to accommodate the logo
nav.style.width = '710px';

// Set the call to action section content, img
// h1 text
const ctah1 = document.querySelector('.cta-text h1');
ctah1.textContent = siteContent.cta['h1'];
ctah1.style.wordSpacing = '100vh'; // one word per line

// button
const ctabtn = document.querySelector('.cta-text button');
ctabtn.textContent = siteContent.cta['button'];

// Set cta img src
const ctaImg = document.querySelector('.cta img');
const ctaImgSrc = siteContent.cta['img-src'];
ctaImg.setAttribute("src", ctaImgSrc);

// Main content section

// main-content object
const mainContent = siteContent['main-content'];

// Top content: Selectors
const toph4 = document.querySelectorAll('.top-content .text-content h4');
const topTxt = document.querySelectorAll('.top-content .text-content p');
const featuresh4 = toph4[0];
const featuresTxt = topTxt[0];
const abouth4 = toph4[1];
const aboutTxt = topTxt[1];

// Top content: Set the features section h4 and p content
featuresh4.textContent = mainContent['features-h4'];
featuresTxt.textContent = mainContent['features-content'];

// Top content: Set the about section h4 and p content
abouth4.textContent = mainContent['about-h4'];
aboutTxt.textContent = mainContent['about-content'];

// Middle content: Set the src of the middle img
const midImg = document.querySelector('.main-content img');
const midImgSrc = mainContent['middle-img-src'];
midImg.setAttribute("src", midImgSrc);

// Bottom content: Selectors
const bottomh4 = document.querySelectorAll('.bottom-content .text-content h4');
const bottomTxt = document.querySelectorAll('.bottom-content .text-content p');
const servicesh4 = bottomh4[0];
const servicesTxt = bottomTxt[0];
const producth4 = bottomh4[1];
const productTxt = bottomTxt[1];
const visionh4 = bottomh4[2];
const visionTxt = bottomTxt[2];

// Bottom content: Set the services section h4 and p content
servicesh4.textContent = mainContent['services-h4'];
servicesTxt.textContent = mainContent['services-content'];

// Bottom content: Set product section h4 and p content
producth4.textContent = mainContent['product-h4'];
productTxt.textContent = mainContent['product-content'];

// Bottom content: Set the vision section h4 and p content
visionh4.textContent = mainContent['vision-h4'];
visionTxt.textContent = mainContent['vision-content'];

// Contact section

// Contact: Selectors
const contacth4 = document.querySelector('.contact h4');
const contactp = document.querySelectorAll('.contact p');
const contactAddress = contactp[0];
const contactPhone = contactp[1];
const contactEmail = contactp[2];

// Contact: Set .textContent values
contacth4.textContent = siteContent.contact['contact-h4'];
contactAddress.textContent = siteContent.contact['address'];
contactPhone.textContent = siteContent.contact['phone'];
contactEmail.textContent = siteContent.contact['email'];

// Contact: Break address on two lines without changing the content
contactAddress.style.width = '9rem';

// Footer

// Footer: Selectors
const copyright  = document.querySelector('footer p');

// Footer: Copyright
copyright.textContent = siteContent.footer['copyright'];

// End DOM manipulation


  /////////////////////
 // STRETCH CONTENT //
/////////////////////

// A button that adds a random nav item, up to the max allowed
const btnText = 'Random Nav';

// Create and style button element
const btn = document.createElement('button');
btn.style.backgroundColor = 'lightgrey';
btn.textContent = btnText;

// Place button in the desired section
const ctaSection = document.querySelector('nav');
ctaSection.prepend(btn);

// Add the onclick event to the button
// API key is located in a seperate config file
let apiKey;
import('./config.js')
  .then(module => {
    apiKey = module.apiConfig.API_KEY;
    btn.addEventListener("click", function () {
      getRandomWordFromAPI.call(this, apiKey);
    }, false);
})

// End STRETCH