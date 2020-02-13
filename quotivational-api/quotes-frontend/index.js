const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getAuthors()
    // getQuotes()
    displayQuoteForm()

})

function getAuthors() {
    fetch(AUTHORS_URL)
    .then(resp => resp.json())
    .then(data => {
        const quotesContainer = document.querySelector('.quotes-container');
        quotesContainer.innerHTML = '';
        data.forEach(author => {
          console.log(author);
          let newAuthor = new Author(author);
          newAuthor.renderAuthors(author);
        });
      });
}

class Author {
    constructor(authorObj){
        this.name = authorObj.name
        this.id = authorObj.id
    }
    renderAuthors(){
        let ul = document.querySelector(".author-list ul");
        ul.innerHTML += `
        <li>Author: ${this.name} - <button class="view-auth" data-author-id="${this.id}">View Quotes</button></li>
        `
       document.querySelector('.view-auth').addEventListener('click', (e) => {
           viewAuthorPage(e)
       });

       
        
    }
}

function viewAuthorPage(event){
    event.preventDefault

    let auth_det = document.querySelector('.auth-details p')
    auth_det.innerHTML = ""

    //author's id currently undefined

    fetch(AUTHORS_URL + `/${event.target.dataset['authorId']}`)
    .then(resp => resp.json())
    .then(data => {
        let auth = new Author(data)

        auth_det.innerHTML = `
            ${auth.name}
        `;
        let add_quote_btn = document.createElement("button");
        add_quote_btn.setAttribute("data-author-id", auth.id);
        add_quote_btn.setAttribute('class', 'add_quote');
        add_quote_btn.innerHTML = "Add Quote"
        add_quote_btn.addEventListener('click', (e) => {
            displayQuoteForm(e)
        });
        auth_det.append(add_quote_btn);
        let quoteListDiv = document.querySelector('.list-auth-quotes ul');
        quoteListDiv.innerHTML = ''

        if (data["quotes"].length > 0) {
            data["quotes"].forEach(quote => {
              let newQuote = new Quote(quote);
              newQuote.renderQuotes();
            } )
          } else {
            auth_det.innerHTML += `No quotes saved for this Author` 
          }
      
    })
}

function addAuthor(){
// posts to create route
}

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
            this.date_created = quoteObj.created_at
            this.author = quoteObj.author
        
        }
        
        renderQuotes(){
            let quotesContainer = document.querySelector('.quotes-container')
            quotesContainer.innerHTML = `
            <div class = "quote-card" data-id="${this.id}">
                <div class="quote-container">
                    <h4>${this.body}</h4>
                    <h5>${this.date_created}</h5>
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
        <form onsubmit="addQuote(); return false;">
        <label>Body</label>
        <input type="textarea" id="body"><br>
        <label>Author</label>
        <input type="text" id="author_name"><br>
        <label>Created</label>
        <input type="date" id="created_at"><br>

        <input type="submit" value="Create Quote">
        </form>
        `
        quoteFormDiv.innerHTML = html
    
    }

function addQuote() {
    const quote = {
        body: document.querySelector('#body').value,
        author: document.querySelector('#author_name').value,
        created_at: document.querySelector('#created_at').value
    }
    fetch(QUOTES_URL,{
        method: "POST",
        body: JSON.stringify(quote),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(resp => resp.json())
    .then(quote => {
        document.querySelector('.quotes-container').innerHTML +=
        `
        <div class = "quote-card" data-id="${quote.id}">
            <div class="quote-container">
                <p>${quote.author}</p>
                <h4>${quote.body}</h4>
                <h5>${quote.created_at}</h5>
            </div>
        </div>
    `
        
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
