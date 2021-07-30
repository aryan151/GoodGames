window.addEventListener('DOMContentLoaded', event => {
    let deleteButtons = document.querySelectorAll('.delete-button')
    let body = document.querySelector('body')
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
        gamesLinkText.className = 'games-link'

        gamesLink.appendChild(gamesLinkText)
        emptyCard.appendChild(emptyText)
        emptyCard.appendChild(gamesLink)
        container.appendChild(emptyCard)

    }
}
    noReviewDispaly()
    deleteButtons.forEach(button =>{
        button.addEventListener('click',async event =>{

            event.stopPropagation()
            const alreadyDisplayed = document.querySelector('.delete-popup');

            if (document.body.contains(alreadyDisplayed)) {
                alreadyDisplayed.remove()
            }

            let container = event.target.parentElement.parentElement

            let popup = document.createElement('div')
            let popupHeader = document.createElement('h2')
            popupHeader.innerText = `Are you sure you want to delete`
            let popupButton = document.createElement('button')
            popupHeader.classList.add('card-title')
            popupButton.classList.add('btn','btn-warning')
            popupButton.innerText = 'Delete'
            popupButton.dataset.target = event.target.id
            popup.classList.add('card','center','delete-popup')

            popupButton.addEventListener('click', async event => {
                let id = event.target.dataset.target
                let review = document.querySelector(`#card${id}`)
                await fetch(`/reviews/${id}/delete`,{
                    method: 'post',
                })
                review.remove()
                popup.remove
                noReviewDispaly()
            })

            popup.appendChild(popupHeader)
            popup.appendChild(popupButton)
            container.appendChild(popup)

        })
    })
body.addEventListener('click', event => {
    const alreadyDisplayed = document.querySelector('.delete-popup');
    if (document.body.contains(alreadyDisplayed)) {
        alreadyDisplayed.remove()
    }
})
})
