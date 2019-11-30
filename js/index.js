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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Set nav item link text
const navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent.nav['nav-item-1'];
navItems[1].textContent = siteContent.nav['nav-item-2'];
navItems[2].textContent = siteContent.nav['nav-item-3'];
navItems[3].textContent = siteContent.nav['nav-item-4'];
navItems[4].textContent = siteContent.nav['nav-item-5'];
navItems[5].textContent = siteContent.nav['nav-item-6'];

// Set header logo img src
const headerLogo = document.querySelector('header img');
const headerLogoSrc = siteContent.nav['img-src'];
headerLogo.setAttribute("src", headerLogoSrc);

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