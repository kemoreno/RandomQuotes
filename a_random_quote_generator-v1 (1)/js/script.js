/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
/* The Array holding the Rnadom Quotes that display on the page */
const quotes = [
  {
    quote: "Just keep swimming",
    source: "Dory",
    citation: "Finding Nemo"
  },
  {
    quote: "Frankly, my dear, I don't give a damn",
    source: "Rhett Butler",
    citation: "Gone with the wind",
    year: 1939
  },
  {
    quote: "May the force be with you",
    source: "Obi-Wan",
    citation: "Starwars",
    year: 1977
  },
  {
    quote: "Hasta la vista baby",
    source: "The terminator",
    citation: "Terminator 2",
    year: 1991
  },
  {
    quote: "Yo Adrian!",
    citation: "Rocky",
    source: "Rocky Balboa",
    year: 1976
  }

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random()* 4);
  let randomQuote = quotes[randomNumber];
  return randomQuote;  
}

/* Function to get random numbers to display Random quotes.*/


/***
 * `printQuote` function
***/

function printQuote() {
  let quoteObject = getRandomQuote();
  let html = document.getElementById('quote-box');
  let printSequence = "";
  if(quoteObject.hasOwnProperty('year')){
    printSequence += `<p class="quote">${quoteObject.quote}</p>
             <p class="source">${quoteObject.source}
             <span class="citation">${quoteObject.citation}</span>
             <span class="year">${quoteObject.year}</span>
            </p>`
  } else {
    printSequence += `<p class="quote">${quoteObject.quote}</p>
                      <p class="source">${quoteObject.source}</p>`;
  }         

  html.innerHTML = printSequence;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

