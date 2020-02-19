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