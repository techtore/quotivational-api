const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getQuotes()
})

//server requests
function getQuotes() {
    fetch(QUOTES_URL)
    .then(resp => resp.json())
    .then(data => {
        const quotesContainer = document.querySelector('.quotes-container');
        quotesContainer.innerHTML = '';
        data.forEach(quote => {
          console.log(quote);
          let newQuote = new Quote(quote);
          newQuote.renderQuotes(quote);
        });
      });
        
    }
    class Quote {
        constructor(quoteObj){
            this.id = quoteObj.id
            this.body = quoteObj.body
            this.image = quoteObj.image_url
            this.author = quoteObj.author.name
        
        }
        

        renderQuotes(){
            // intance method 
            let quotesContainer = document.querySelector('.quotes-container')
            quotesContainer.innerHTML = `
            <div class = "quote-card" data-id="${this.id}">
                <img src="${this.image}" alt="Image" style="width:100%">
                <div class="quote-container">
                    <p>${this.author}</p>
                    <h4>${this.body}</h4>
                    <button data-author-id="${this.author}">Delete Quote</button>
                </div>
            </div>
            `
        }
    }

function addQuote(){

        
}

function deleteQuote(){

}

//DOM rendering

// function renderCard(author){
// have an add quote Button(renderAddButton(author))
//and render this author's quotes
// }

// function renderAuthor(){
// click on card, show that quote for the author
//render a single author?
// }

// function renderAddButton(author){
// when clicked it adds quote to author
// }

// function renderQuotes(author){
// when clicked it shows this authors quotes?
// rendering quotes belonging to author?
// }

// function renderQuote(quote){
//     //shows quote 
//     //has delete button for quote
// }

//CRUD Actions

// function addQuote(event){

// }

// function deleteQuote(){

// }