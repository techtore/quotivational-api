const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getAuthors()

})

class Author {
    constructor(authorObj){
        this.name = authorObj.name
        this.id = authorObj.id
    }
    renderAuthor(){
       
        let ul = document.querySelector(".author-list ul");
        let li = document.createElement('li');
        li.innerHTML += `Author: ${this.name}`
        let viewBtn = document.createElement("button");
        viewBtn.setAttribute("data-author-id", this.id);
        viewBtn.setAttribute("class", "view-auth");
        viewBtn.setAttribute("id", `"view-auth-${this.id}"`);
        viewBtn.innerText = "View Author"
        li.append(viewBtn)

        let addQuoteBtn = document.createElement("button");
        addQuoteBtn.setAttribute("data-author-id", this.id);
        addQuoteBtn.setAttribute("class", "add-quote");
        addQuoteBtn.setAttribute("id", `"add-quote-${this.id}"`);
        addQuoteBtn.innerText = "Add Quote"
        li.append(addQuoteBtn)

        ul.appendChild(li);

        viewBtn.addEventListener('click', (e) => {
           viewAuthorPage(e)
        });  
        addQuoteBtn.addEventListener('click', (e) => {
            displayQuoteForm(e)
        });  
    }
}

function getAuthors() {
    fetch(AUTHORS_URL)
    .then(resp => resp.json())
    .then(data => {
        const quotesContainer = document.querySelector('.quotes-container');
        quotesContainer.innerHTML = '';
        data.forEach(author => {
          let newAuthor = new Author(author);
          newAuthor.renderAuthor(author);
        });
    });
}

function displayAuthorForm(){
    let authFormDiv = document.getElementById("author-form")
    let html = `
    <form onsubmit="addAuthor(); return false;">
    <label>Name</label>
    <input type="text" id="name"><br>

    <input type="submit" value="Create Author">
    </form>
    `
    authFormDiv.innerHTML = html

}

function addAuthor(){
    const author = {
        name: document.querySelector('#name').value,    
    }

    fetch(AUTHORS_URL,{
        method: "POST",
        body: JSON.stringify(author),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(resp => resp.json())
    .then(auth => {
        let ul = document.querySelector(".author-list ul");
        ul.innerHTML += `
        <li>Author: ${auth.name} - <button class="view-auth" data-author-id="${auth.id}">View Author</button><button data-author-id="${auth.id}" class="add-quote" id="add-quote-${auth.id}">Add Quote</button></li>
        `
        let newAuth = new Author(auth);
        newAuth.renderAuthor(auth); 

        clearAuthForm();
    })
}

function viewAuthorPage(event){
    event.preventDefault

    let auth_det = document.querySelector('.auth-details p')
    auth_det.innerHTML = ""

    fetch(AUTHORS_URL + `/${event.target.dataset['authorId']}`)
    .then(resp => resp.json())
    .then(data => {
        let auth = new Author(data)

        auth_det.innerHTML = `
            <h1>${auth.name}</h1>
        `;
       
        let quoteListDiv = document.querySelector('.list-auth-quotes ul');
        quoteListDiv.innerHTML = ''
        let quotesContainer = document.querySelector(".quotes-container")
        quotesContainer.innerHTML = ""

        if (data["quotes"].length > 0) {
            data["quotes"].forEach(quote => {
                
              let newQuote = new Quote(quote);
              newQuote.renderQuote();
            } )
          } else {
            
            auth_det.innerHTML += `No quotes saved for this Author` 
          }
      
    })
}

function clearAuthForm(){
    let authorFormDiv = document.getElementById("author-form")
    authorFormDiv.innerHTML = ''
}

//-------------------------QUOTES-----------------------------------------------
class Quote {
    constructor(quoteObj){
        this.id = quoteObj.id
        this.body = quoteObj.body
        this.authorId = quoteObj.author_id
    
    }
    
    renderQuote(){
        let quotesContainer = document.querySelector('.quotes-container')
        quotesContainer.innerHTML += `
    
            <div class="quote-card" data-id="${this.id}">
                <div class="quote-container">
                <button class="dlt-quote-btn" data-quote-id="${this.id}">Delete Quote</button>
                    <p>${this.body}</p>
                </div>
            </div>
        
        ` 
        // document.querySelector(".dlt-quote-btn").addEventListener("click", deleteQuote)
        let dltBtns = document.querySelectorAll(".dlt-quote-btn")
        dltBtns.forEach(btn => btn.addEventListener("click", deleteQuote))
      
    }
}

function displayQuoteForm(event){
    event.preventDefault();
    let quoteFormDiv = document.getElementById("quote-form")
    let authorId = event.target.dataset.authorId
    let html = `
    <form onsubmit="addQuote(); return false;">
    <input id="author_id" name="author_id" type="hidden" value="${authorId}">
    <label>Body</label>
    <input type="textarea" id="body"><br>
    <input type="submit" value="Create Quote">
    </form>
    `
    quoteFormDiv.innerHTML = html

}

function addQuote() {
    const quote = {
        body: document.querySelector('#body').value,
        author_id: document.getElementById('author_id').value
    }
    
    fetch(QUOTES_URL, {
        method: "POST",
        body: JSON.stringify(quote),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(quote => {
        let newQuote = new Quote(quote);
        newQuote.renderQuote(quote); 
        clearQuoteForm();
    })
        
}

function deleteQuote(event){
    event.preventDefault();
    let quoteCard = document.querySelector(".quote-card")
    
   fetch(QUOTES_URL + `/${event.target.dataset.quoteId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(event.target.remove())
        .then(quoteCard.remove())
}

function clearQuoteForm(){
    let quoteFormDiv = document.getElementById("quote-form")
    quoteFormDiv.innerHTML = ''
}






