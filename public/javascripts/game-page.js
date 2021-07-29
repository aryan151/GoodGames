window.addEventListener('DOMContentLoaded', event => {
    const reviewForm = document.querySelector('.add-review')
    const reviewDiv = document.querySelector('.reviews')

    reviewForm.addEventListener('submit', async event => {
        event.preventDefault();

        const formData = new FormData(reviewForm);

        const gameId = formData.get('gameId');
        const content = formData.get('content');
        const rating = formData.get('rating');

        const body = { content, rating }

        let res = await fetch(`/api/games/${gameId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })

        res = await res.json();
        const errorUL = document.getElementById('errors')
        const errorElem = document.querySelector('.error')
        if (res.errors) {
            const errors = [];
            res.errors.forEach(error => errors.push(`
                <li>${error}</li>
            `));
            errorUL.innerHTML = errors.join('')
            errorElem.classList.remove('hidden')
        } else {
            const newDiv = document.createElement('div');

            const reviewCard = `
                    <h4> ${res.user.username} </h4>
                    <p>${res.review.content}</p>
                    <p>Rating:  ${res.review.rating}</p>
                    <div class="review-buttons">
                        <a href = "/reviews/${res.review.id}">
                        <button class="btn btn-primary">
                        Edit
                        </button>
                        </a>
                        <button class="btn btn-warning delete-button" type:="" button="" id="${res.review.id}">
                        Delete
                        </button>
                    </div>

            `
            newDiv.innerHTML = reviewCard
            newDiv.classList.add('card');
            newDiv.classList.add('center')
            newDiv.id = `card${res.review.id}`

            reviewDiv.appendChild(newDiv);
            errorElem.classList.add('hidden')
            reviewForm.reset()

            let deleteButtons = document.querySelectorAll('.delete-button')
            deleteButtons.forEach(button =>{
                button.addEventListener('click',async event =>{
                    let id = event.target.id
                    let review = document.querySelector(`#card${id}`)
                    await fetch(`/reviews/${id}/delete`,{
                        method: 'post',
                    })
                    review.remove()
                })
            })

        }
    })
})
