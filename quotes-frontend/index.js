const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getQuotes()
})

//server requests
function getQuotes() {
    return fetch(QUOTES_URL)
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
                this.author = quoteObj.author
        
            }
        

         renderQuotes(){
            //intance method 
            // let quotesContainer = document.querySelector('.quotes-container')
            // quotesContainer.innerHTML = ""
            // let quoteCard = document.createElement('div')
            // quoteCard.dataset.id = this.id
            // quoteCard.className = 'quote-card'
            // let quoteTextDiv = document.createElement('div')
            // quoteTextDiv.className = 'quote-text'
            // let quoteBodyDiv = document.createElement('div')
            // let quoteBody = document.createElement('p')
            // quoteBody.innerHTML = this.body
            // quoteBodyDiv.append(quoteBody)
            // let quoteAuthorDiv = document.createElement('div')
            // let quoteAuthor = document.createElement('h4')
            // quoteAuthor.innerText = `-${this.author}`
            // quoteAuthorDiv.append(quoteAuthor)
            // const deleteBtn = document.createElement('button')
            // deleteBtn.className = `deletebtn`
            // deleteBtn.innerText = `Delete`
            // deleteBtn.dataset.id = this.id
            // deleteBtn.addEventListener('click', (e) => {
            //     let deleteResponse = confirm(`Are you sure you want to delete this quote?`)
            //     if (deleteResponse == true) {
            //         deletQuoteCard(e)
            //     }
            // quoteTextDiv.append(quoteBodyDiv)
            // quoteTextDiv.append(quoteAuthorDiv)
            // quoteTextDiv.append(deleteBtn)
            // quoteCard.append(quoteTextDiv)
            // const quoteImgDiv = document.createElement('div')
            // quoteImgDiv.className('quote-img')
            // const quoteImg = document.createElement('img')
            // quoteImg.src = this.image
            // quoteImg.alt = 'Quote Image'
            // quoteImgDiv.append(quoteImg)
            // quoteCard.append(quoteImgDiv)
            // quotesContainer.append(quoteCard)
            
        }
    }
           
      
// function getAuthors(){
//     return fetch(AUTHORS_URL)
//     .then(rep => rep.json())
//     .then(authors => { 
//         authors.forEach(author => {
//             console.log(author)
//         })

//     })


// function renderAuthors(authors){

// }

// function addQuote(){

// }

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