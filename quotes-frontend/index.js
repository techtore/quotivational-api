const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getQuotes()
    displayQuoteForm()
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
                <div class="quote-container">
                    <p>${this.author}</p>
                    <h4>${this.body}</h4>
                    <button data-author-id="${this.author}">Delete Quote</button>
                </div>
            </div>
            `
        }
    }
    function clearForm(){
        let quoteFormDiv = document.getElementById("quote-form")
        quoteFormDiv.innerHTML = ''
    }

    function displayQuoteForm(){
        let quoteFormDiv = document.getElementById("quote-form")
        let html = `
        <form onsubmit="addQuote();return false;">
        <label>Body</label>
        <input type="text_area" id="body"><br>
        <label>Author</label>
        <input type="text" id="author_name"><br>
        <label>Created</label>
        <input type="date" id="created_at"><br>
        <input type="submit" value="Create Quote">
        `
        quoteFormDiv.innerHTML = html
    }

function addQuote(){
    const quote = {
        body: document.getElementBy('body').value,
        author: document.getElementById('author_name').value,
        date_added: document.getElementById('created_at').value
    }
    fetch(QUOTES_URL, {
        method: "POST",
        body: JSON.stringify(quote),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(resp = resp.json())
    .then(quote =>{
        document.querySelector('.quotes-container').innerHTML += `
        <div class = "quote-card" data-id="${quote.id}">
        <div class="quote-container">
            <p>${quote.author}</p>
            <h4>${quote.body}</h4>
            <button data-author-id="${quote.author}">Delete Quote</button>
        </div>
    </div>
        `
        clearForm()
    })
        
}

// function deleteQuote(){

// }

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