// class Quote{
//     constructor(quoteObj){
//         this.id = quoteObj.id
//         this.body = quoteObj.body
//         this.image = quoteObj.image_url
//         this.author = quoteObj.author

//     }

    // render(){
    //   //intance method 
    //   const quotesContainer = document.querySelector('#quotes-container')
    //   const quoteCard = document.createElement('div')
    //   quoteCard.dataset.id = this.id
    //   quoteCard.className = 'quote-card'
    //   const quoteTextDiv = document.createElement('div')
    //   quoteTextDiv.className = 'quote-text'
    //   const quoteBodyDiv = document.createElement('div')
    //   const quoteBody = document.createElement('p')
    //   quoteBody.innerHTML = this.body
    //   quoteBodyDiv.append(quoteBody)
    //   const quoteAuthorDiv = document.createElement('div')
    //   const quoteAuthor = document.createElement('h4')
    //   quoteAuthor.innerText = `-${this.author}`
    //   quoteAuthorDiv.append(quoteAuthor)
    //   const deleteBtn = document.createElement('button')
    //   deleteBtn.className = `deletebtn`
    //   deleteBtn.innerText = `Delete`
    //   deleteBtn.dataset.id = this.id
    //   deleteBtn.addEventListener('click', (e) => {
    //       let deleteResponse = confirm(`Are you sure you want to delete this quote?`)
    //       if (deleteResponse == true) {
    //           deletQuoteCard(e)
    //       }
    //   })
    //   quoteTextDiv.append(quoteBodyDiv)
    //   quoteTextDiv.append(quoteAuthorDiv)
    //   quoteTextDiv.append(deleteBtn)
    //   quoteCard.append(quoteTextDiv)
    //   const quoteImgDiv = document.createElement('div')
    //   quoteImgDiv.className('quote-img')
    //   const quoteImg = document.createElement('img')
    //   quoteImg.src = this.image
    //   quoteImg.alt = 'Quote Image'
    //   quoteImgDiv.append(quoteImg)
    //   quoteCard.append(quoteImgDiv)
    //   quotesContainer.append(quoteCard)

    // }
// }