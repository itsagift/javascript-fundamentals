let cards = document.getElementsByClassName('card')
cards = Array.from(cards)
console.log(cards)

cards.forEach((card) => {
    card.addEventListener('click', () =>{
        card.classList.toggle('transparent')
    })
})