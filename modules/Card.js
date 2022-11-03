class Card{
    #card = document.createElement('img');
    
    constructor(url, parent, pairNumber){
        this.url = url;
        this.parent = parent;
        this.show; 
        this.pairNumber = pairNumber;
        this.visibility;
    }
    
    get show(){
        return this._show
    }
    set show(val){
        this._show = val;
        if(val){
            this.#showCard()
        } else {
            this.#showBackSideCard()
        }
    }

    addCard(){
        this.parent.appendChild(this.#card);
    }

    #showBackSideCard(){
        this.#card.style.transform = 'perspective(300px) rotateY(180deg)'
        this.#card.src = './imgs/backCard.jpg';
        this.#card.setAttribute('cardId', this.cardId)
    }

    #showCard(){
        this.#card.style.transform = 'perspective(300px) rotateY(0deg)'
        this.#card.src = this.url;
        this.#card.setAttribute('cardId', this.cardId)
    }

    hideCard(){
        this.#card.style.visibility = 'hidden';
    }
}

export default Card