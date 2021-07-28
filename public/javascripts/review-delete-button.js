let deleteButtons = document.querySelectorAll('.delete-button')

deleteButtons.forEach(button =>{
    button.addEventListener('click',async event =>{
        '/reviews/:id(\\d+)/edit'
        let id = event.target.id
        let review = document.querySelector(`#card${id}`)

        await fetch(`/reviews/${id}/delete`,{
            method: 'post',
        })

        review.remove()
    })
})
