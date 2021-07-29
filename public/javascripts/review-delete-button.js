window.addEventListener('DOMContentLoaded', event => {
    let deleteButtons = document.querySelectorAll('.delete-button')

    let container = document.querySelector('#reviews-container')
    let noReviewDispaly = () =>{
    let cards = document.querySelectorAll('.card')

    if(cards.length === 0){
        let emptyCard = document.createElement('div')
        emptyCard.classList.add('card')

        let emptyText = document.createElement('h2')
        emptyText.classList.add('card-title')
        emptyText.innerText ='You dont have any reviews right now'

        let gamesLink = document.createElement('a')
        gamesLink.href = '/'

        let gamesLinkText = document.createElement('p')
        gamesLinkText.innerText = 'Find a Game?'
        gamesLinkText.id = 'games-link'

        gamesLink.appendChild(gamesLinkText)
        emptyCard.appendChild(emptyText)
        emptyCard.appendChild(gamesLink)
        container.appendChild(emptyCard)

    }
}
    noReviewDispaly()
    deleteButtons.forEach(button =>{
        button.addEventListener('click',async event =>{
            let id = event.target.id
            let review = document.querySelector(`#card${id}`)
            await fetch(`/reviews/${id}/delete`,{
                method: 'post',
            })

            review.remove()
            noReviewDispaly()
        })
})
})
