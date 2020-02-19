const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getAuthors()

})

function getAuthors() {
    fetch(AUTHORS_URL)
    .then(resp => resp.json())
    .then(data => {
        
        data.forEach(author => {
          let newAuthor = new Author(author);
          newAuthor.renderAuthor();
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
        <li>Author: ${auth.name} <button class="view-auth" data-author-id="${auth.id}">View Author</button><button data-author-id="${auth.id}" class="add-quote" id="add-quote-${auth.id}">Add Quote</button></li>
        `
        attachClickToViewAuthBtns();
        attachClickToAddQuoteBtns();

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

function attachClickToViewAuthBtns() {

    let viewAuthLi = document.querySelectorAll(".author-list ul li button.view-auth")
    viewAuthLi.forEach(btn => btn.addEventListener('click', (e) => {
        viewAuthorPage(e)
    }))
    
}

function attachClickToAddQuoteBtns() {

    let addQuoteBtn = document.querySelectorAll(".author-list ul li button.add-quote")
    addQuoteBtn.forEach(btn => btn.addEventListener('click', (e) => {
        displayQuoteForm(e)
    }))
}

//-------------------------QUOTES-----------------------------------------------

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
    let auth_det = document.querySelector('.auth-details p')
    
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
        newQuote.renderQuote(); 
        clearQuoteForm();
        
        auth_det.innerHTML = ""
    })
        
}

function deleteQuote(event){
    event.preventDefault();

    let parentElement = event.target.parentElement.parentElement.parentElement
    
   fetch(QUOTES_URL + `/${event.target.dataset.quoteId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
   
    .then(parentElement.remove())
 
}

function clearQuoteForm(){
    let quoteFormDiv = document.getElementById("quote-form")
    quoteFormDiv.innerHTML = ''
}






