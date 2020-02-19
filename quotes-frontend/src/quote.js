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
                <span><button class="dlt-quote-btn" data-quote-id="${this.id}">Delete Quote</button></span>
                    <p>${this.body}</p>
                </div>
            </div>
        
        ` 

        let dltBtns = document.querySelectorAll(".dlt-quote-btn")
        dltBtns.forEach(btn => btn.addEventListener("click", deleteQuote))
      
    }
}