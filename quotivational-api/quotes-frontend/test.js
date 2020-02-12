const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getQuotes()
})
function getQuotes() {
    fetch(QUOTES_URL)
      .then(resp => resp.json())
      .then(data => {
        const quotesContainer = document.querySelector('.quotes-container');
        quotesContainer.innerHTML = '';
        data.forEach(quote => {
          console.log(quote);
          let newQuote = new Quote(quote);
          newQuote.renderQuotes();
        });
      });
  }
  
  class Quote {
    constructor(quoteObj) {
        this.id = quoteObj.id
        this.body = quoteObj.body
        this.image = quoteObj.image_url
        this.author = quoteObj.author.name
    }
  
    renderQuotes() {
            let quotesContainer = document.querySelector('.quotes-container');
            quotesContainer.innerHTML = "";
    
            const quoteCard = document.createElement('div');
            quoteCard.dataset.id = this.id;
            quoteCard.className = 'card';
            const quoteCard = document.createElement('div')
            quoteCard.dataset.id = quote.id
            quoteCard.className = 'quote-card'
            const quoteTextDiv = document.createElement('div')
            quoteTextDiv.className = 'quote-text'
            const quoteBodyDiv = document.createElement('div')
            const quoteBody = document.createElement('p')
            quoteBody.innerHTML = this.body
            quoteBodyDiv.append(quoteBody)
            const quoteAuthorDiv = document.createElement('div')
            const quoteAuthor = document.createElement('h4')
            quoteAuthor.innerText = `-${this.author}`
            quoteAuthorDiv.append(quoteAuthor)
            quoteContainer.append(quoteCard)
            quoteTextDiv.append(quoteBodyDiv)
            quoteTextDiv.append(quoteAuthorDiv)
            quoteTextDiv.append(deleteBtn)
            quoteCard.append(quoteTextDiv)
            const quoteImgDiv = document.createElement('div')
            quoteImgDiv.className('quote-img')
            const quoteImg = document.createElement('img')
            quoteImg.src = this.image
            quoteImg.alt = 'Quote Image'
            quoteImgDiv.append(quoteImg)
            quoteCard.append(quoteImgDiv)
            quotesContainer.append(quoteCard)
    }

}